import http from "./http.services";
import { store } from "../Redux/root.redux";
import { authurl } from "../Data/baseUrl.json";
import { default as jwt } from "jwt-decode";
import { removeUser, addUser } from "../Redux/AuthReducer/userReducerActions";
import { getAccessToken } from "./signIn.services";

const Url = authurl + "/userinfo";

const getUser = async () => {
  const {
    user: {
      user: { token, refreshtoken },
    },
  } = store.getState();
  let updatedToken = token;
  try {
    const { exp } = jwt(token);
    if (exp < Date.now() / 1000) {
      console.log("Expired token");
      updatedToken = await getAccessToken(refreshtoken);
      console.log(updatedToken);
    }
    const { data } = await http.get(Url, {
      headers: {
        Authorization: "Bearer " + updatedToken,
      },
    });
    return data;
  } catch (err) {
    console.log(jwt(updatedToken));
    store.dispatch(removeUser());
    throw err;
  }
};

export const getCurrentUser = async () => {
  const { token, refreshtoken } = store.getState().user.user;
  const { exp } = jwt(token);
  if (exp < Date.now / 1000) {
    const newtoken = await getAccessToken(refreshtoken);
    store.dispatch(addUser(newtoken));
    const updated = store.getState().user.user.token;
    return jwt(updated);
  } else if (jwt(refreshtoken).exp < Date.now / 1000) {
    store.dispatch(removeUser());
    return null;
  }
  return jwt(token);
};

export default getUser;
