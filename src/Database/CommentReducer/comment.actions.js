import { actionType } from "./commentReduxactionTypes";

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
