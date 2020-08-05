import http from "./http.services";
import { authurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import { addUser } from "../Redux/AuthReducer/userReducerActions";
const Url = authurl + "/login";

export const getLogin = async (values) => {
  const { data } = await http.post(Url, values);
  await store.dispatch(addUser(data));
  const { user } = await store.getState();
  return user;
};
