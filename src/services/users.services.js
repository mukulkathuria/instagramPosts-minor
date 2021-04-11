import http from "./http.services";
import { authurl } from "../Data/baseUrl.json";

const Url = authurl + "/userinfo";

const getUser = async (username) => {
  const val = {
    username,
  };
  const { data } = await http.post(Url, val);
  return data;
};

export default getUser;
