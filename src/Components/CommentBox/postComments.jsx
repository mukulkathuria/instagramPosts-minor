import React from "react";
import {RecentComments ,Comments} from './postComment.style';

const PostComments = ({ comments }) => {
  return (
    <RecentComments>
      {comments.map((comm, i) => (
          <Comments key={i}>
            <a href="/">{comm.user}</a>
            {comm.comment}
          </Comments>
      ))}
    </RecentComments>
  );
};
export default PostComments;
