import {
  addComments,
  removeComments,
  addLike,
  removeLike,
} from "./posts.actions";
import http from "../../services/http.services";
import { toast } from "react-toastify";
import { postsediturl } from "../../Data/baseUrl.json";

export const addCommentsAsync = (postid, value, username) => {
  const values = {
    postid: postid,
    comment: value,
    username: username,
  };
  return async (dispatch) => {
    try {
      const { data: commid } = await http.post(
        postsediturl + "addcomments=nothing",
        values
      );
      dispatch(addComments(postid, value, username, commid));
    } catch (err) {
      toast.error("Server Error");
    }
  };
};

export const removeCommentsAsync = (postid, commentid) => {
  const values = {
    postid: postid,
    commentid: commentid,
  };
  return async (dispatch) => {
    try {
      await http.post(postsediturl + "removecomments=nothing", values);
      dispatch(removeComments(postid, commentid));
    } catch (error) {
      toast.error("Server Error");
    }
  };
};

export const addLikeAsync = (postid, username) => {
  const values = {
    postid: postid,
    username: username,
  };
  return async (dispatch) => {
    try {
      await http.post(postsediturl + "addLike=nothing", values);
      dispatch(addLike(postid, username));
    } catch (err) {
      toast.error("Server Error");
    }
  };
};

export const removeLikeAsync = (postid, username) => {
  const values = {
    postid: postid,
    username: username,
  };
  return async (dispatch) => {
    try {
      await http.post(postsediturl + "removeLike=nothing", values);
      dispatch(removeLike(postid, username));
    } catch (err) {
      toast.error("Server Error");
    }
  };
};
