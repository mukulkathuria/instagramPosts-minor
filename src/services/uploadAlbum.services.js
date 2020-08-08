import http from "./http.services";
import { postbaseurl } from "../Data/baseUrl.json";
import { store } from "../Redux/root.redux";
import { default as jwt } from "jwt-decode";
const Url = postbaseurl + "/addposts";

export const UploadPhoto = async ( desc, file ) => {
  const {
    user: { user: token },
  } = await store.getState();
  const verifieduser = jwt(token);
  const values = new FormData();
  values.append("username",verifieduser.username);
  values.append("caption",desc);
  values.append("photo",file.current.files[0]);
  
  const { data } = await http.post(Url, values);
  return data;
};
