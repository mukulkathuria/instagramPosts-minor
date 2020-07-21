import React from "react";
import { connect } from "react-redux";
import { removeCommentsAsync } from "../../Redux/PostsReducer/AsyncActions";
import { RecentComments, Comments, CommentFlex } from "./postComment.style";
import { BsFillTrashFill } from "react-icons/bs";

const PostComments = ({ comments, onremoveComment, postid, user }) => {
  return (
    <RecentComments>
      {comments.map((comm, i) => (
        <Comments key={i}>
          <CommentFlex>
            <div>
              <a href="/">{comm.user}</a>
              {comm.comment}
            </div>
            {comm.user === user.username && (
              <BsFillTrashFill
                onClick={() => onremoveComment(postid, comm._id)}
              />
            )}
          </CommentFlex>
        </Comments>
      ))}
    </RecentComments>
  );
};
const maptoDispatch = (dispatch) => ({
  onremoveComment: (postid, commid) =>
    dispatch(removeCommentsAsync(postid, commid)),
});
export default connect(null, maptoDispatch)(PostComments);
