import axios from "axios";
import { toast } from "react-toastify";
import { authurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import jwtDecode from "jwt-decode";
import { addUser, removeUser } from "../Redux/AuthReducer/userReducerActions";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
};

axios.interceptors.response.use(null, (err) => {
  const errors =
    err.response && err.response.status >= 404 && err.response.status <= 500;
  if (!err.response) {
    toast.error("Something went wrong");
  } else if (errors) {
    if (err.response.data.error) {
      toast.error(err.response.data.error, {
        position: "bottom-center",
      });
    } else {
      toast.error("Internal Server Error");
    }
  }
  const onrequest = err.config;
  const user = store.getState().user;

  let exp = null;

  if (user.user && user.user.token) {
    const expiry = jwtDecode(user.user.token);
    exp = expiry.exp;
  }

  const onlyrefresh = Boolean(
    user.user && user.user.refreshtoken && !user.user.token
  );

  if (((exp && exp < Date.now() / 1000) || onlyrefresh) && !onrequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve, reject) =>
        failedQueue.push({ resolve, reject })
      )
        .then((tokens) => {
          onrequest.headers["Authorization"] = "Bearer " + tokens;
          return axios(onrequest);
        })
        .catch((error) => Promise.reject(error));
    }
    onrequest._retry = true;
    isRefreshing = true;

    return new Promise((resolve, reject) => {
      const refreshUrl = authurl + "/token";
      axios
        .post(
          refreshUrl,
          {
            token: user.user.refreshtoken,
          },
          { withCredentials: true }
        )
        .then(({ data: { access_token } }) => {
          console.log(access_token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + access_token;
          // redux state manage
          store.dispatch(addUser(access_token));
          processQueue(null, access_token);
          resolve(axios(onrequest));
        })
        .catch((error) => {
          // dispatch logout here
          store.dispatch(removeUser());
          processQueue(error, null);
          reject(error);
        })
        .then(() => (isRefreshing = false));
    });
  }

  return Promise.reject(err);
});

axios.interceptors.request.use(
  (config) => {
    const user = store.getState().user;
    let token = null;
    if (user.user?.token) {
      token = user.user.token;
    }
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
};
