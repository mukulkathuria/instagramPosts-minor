import { actionType } from "./postsActionTypes";

export const addComments = (postid, value,username) => ({
  type: actionType.addComment,
  postid,
  value,
  username
});

export const addCommenttoid = (posts, postid, value,username) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          comments: [...list.comments, { user: username, comment: value }],
        }
      : list
  );
};

export const addLike = (postid,username) =>({
  type:actionType.addLike,
  postid,username
})

export const removeLike = (postid,username) =>({
  type:actionType.removeLike,
  postid,
  username
})

export const removeLiketoid = (posts, postid,username) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          like:[...list.like.splice(0,list.like.indexOf(username)),...list.like.splice(1)]
        }
      : list
  );
};

export const addLiketoid = (posts, postid,username) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          like:[...list.like,username]
        }
      : list
  );
};