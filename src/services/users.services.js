import http from "./http.services";
import { store } from "../Redux/root.redux";
import { authurl } from "../Data/baseUrl.json";
import { default as jwt } from "jwt-decode";
import { removeUser } from "../Redux/AuthReducer/userReducerActions";

const Url = authurl + "/userinfo";
const getUser = async () => {
  const {
    user: { user: token },
  } = await store.getState();
  try {
    jwt(token);
    const { data } = await http.get(Url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (err) {
    store.dispatch(removeUser());
  }
};

export default getUser;
