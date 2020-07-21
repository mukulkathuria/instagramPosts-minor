import { actionType } from "./postsActionTypes";

export const addComments = (postid, value, username,commid) => ({
  type: actionType.addComment,
  postid,
  value,
  username,
  commid,
});

export const removeComments = (postid, commentid) => ({
  type: actionType.removeComment,
  postid,
  commentid,
});

export const addLike = (postid, username) => ({
  type: actionType.addLike,
  postid,
  username,
});

export const removeLike = (postid, username) => ({
  type: actionType.removeLike,
  postid,
  username,
});

