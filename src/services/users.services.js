import http from "./http.services";
import { store } from "../Redux/root.redux";
import { authurl } from "../Data/baseUrl.json";

const Url = authurl + "/userinfo";
const getUser = async () => {
  const { user:{user:token} } = await store.getState();
  const { data } = await http.get(Url,{headers:{
      Authorization : "Bearer " + token
  }});
  return data;
};

export default getUser;
