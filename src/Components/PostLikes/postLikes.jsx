import React from "react";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../Database/PostsReducer/posts.actions";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { IconDiv, PostLikeDiv } from "./postlikes.style";

const PostLikes = ({ totallikes, userid, ...props }) => {
  const [liked, unLike] = React.useState(false);
  return (
    <PostLikeDiv>
      <IconDiv>
        {liked ? (
          <FaHeart
            color="red"
            onClick={() => {
              unLike(false);
              props.onremoveLike(userid);
            }}
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              unLike(true);
              props.onaddLike(userid);
            }}
          />
        )}
        <FaRegComment />
      </IconDiv>
      <div>
        {totallikes.length > 0 ? (
          <div>{`${totallikes.length}  likes`}</div>
        ) : null}
      </div>
    </PostLikeDiv>
  );
};
const maptoDispatch = (dispatch) => ({
  onaddLike: (postid) => dispatch(addLike(postid)),
  onremoveLike: (postid) => dispatch(removeLike(postid)),
});
export default connect(null, maptoDispatch)(PostLikes);
