import { actionType } from "./postsActionTypes";

export const addComments = (postid, value) => ({
  type: actionType.addComment,
  postid,
  value,
});

export const addCommenttoid = (posts, postid, value) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          comments: [...list.comments, { user: "Mike", comment: value }],
        }
      : list
  );
};

export const addLike = (postid) =>({
  type:actionType.addLike,
  postid
})

export const removeLike = (postid) =>({
  type:actionType.removeLike,
  postid
})

export const removeLiketoid = (posts, postid) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          like:[...list.like.splice(0,list.like.length-1),...list.like.splice(1)]
        }
      : list
  );
};

export const addLiketoid = (posts, postid) => {
  return posts.map((list) =>
    list.id === postid
      ? {
          ...list,
          like:[...list.like,"Mike"]
        }
      : list
  );
};