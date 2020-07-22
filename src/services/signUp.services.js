import http from "./http.services";
import { authurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import { addUser } from "../Redux/AuthReducer/userReducerActions";
const Url = authurl + "/register";

export const registerUser = async (values) => {
  const { headers } = await http.post(Url, values);
  await store.dispatch(addUser(headers["x-auth-token"]));
  const { user } = await store.getState();
  return user;
};
