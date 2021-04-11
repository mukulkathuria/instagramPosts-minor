import http from "./http.services";
import axios from 'axios';
import { authurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import { addUser } from "../Redux/AuthReducer/userReducerActions";

const Url = authurl + "/login";
const tokenUrl = authurl + "/token";

export const getLogin = async (values) => {
  const {
    data: { access_token, refresh_token },
  } = await http.post(Url, values, { withCredentials: true });
  await store.dispatch(addUser(access_token, refresh_token));
  const { user } = await store.getState();
  return user;
};

export const getAccessToken = async (token) => {
  const val = {
    token,
  };
  const {
    data: { access_token },
  } = await axios.post(tokenUrl, val, {
    withCredentials: true,
  });
  return access_token;
};

export const getlogout = async () => {
  const logouturl = authurl + "/logout";

  const data = await http.post(logouturl, {}, { withCredentials: true });
  return data;
};
