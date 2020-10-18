import http from "./http.services";
import { authurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import { addUser } from "../Redux/AuthReducer/userReducerActions";

const Url = authurl + "/login";
const tokenUrl = authurl + "/token";

export const getLogin = async (values) => {
  const {
    data: { access_token, refresh_token },
  } = await http.post(Url, values);
  await store.dispatch(addUser(access_token, refresh_token));
  const { user } = await store.getState();
  return user;
};

export const getAccessToken = async (token) => {
  const val = {
    token,
  };
  console.log("acessing refresh token");
  const data = await http.post(tokenUrl, val);
  console.log(data);
  return data;
};

export const getlogout = async () => {
  const logouturl = authurl + "/logout";

  const data = await http.post(logouturl);
  return data;
};
