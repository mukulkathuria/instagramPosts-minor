import http from "./http.services";
import { postbaseurl } from "../Data/baseUrl.json";

const Uri = postbaseurl + "/deletepost";

const deletePost = async (postid) => {
  const value = {
    postid,
  };
  const { data } =await http.post(Uri, value);
  return data;
};
export default deletePost;
