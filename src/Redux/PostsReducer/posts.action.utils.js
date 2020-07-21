
export const removeLiketoid = (posts, postid, username) => {
    return posts.map((list) =>
      list._id === postid
        ? {
            ...list,
            like: [
              ...list.like.splice(0, list.like.indexOf(username)),
              ...list.like.splice(1),
            ],
          }
        : list
    );
  };
  
  export const addLiketoid = (posts, postid, username) => {
    return posts.map((list) =>
      list._id === postid
        ? {
            ...list,
            like: [...list.like, username],
          }
        : list
    );
  };
  
export const addCommenttoid = (posts, postid, value, username,commid) => {
    return posts.map((list) =>
      list._id === postid
        ? {
            ...list,
            comments: [
              ...list.comments,
              { user: username, comment: value, _id: commid },
            ],
          }
        : list
    );
  };
  
  export const removeCommenttoid = (post, postid, commentid) => {
    return post.map((list) =>
      list._id === postid
        ? {
            ...list,
            comments: list.comments.filter((comm) => comm._id !== commentid),
          }
        : list
    );
  };
  