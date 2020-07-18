import React from "react";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../Redux/PostsReducer/posts.actions";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { IconDiv, PostLikeDiv, TotalLikesDiv } from "./postlikes.style";

const PostLikes = ({ totallikes, postid, user, ...props }) => {
  const alreadyliked = totallikes.includes(user.name);
  const [liked, unLike] = React.useState(false);
  return (
    <PostLikeDiv>
      <IconDiv>
        {liked || alreadyliked ? (
          <FaHeart
            color="red"
            onClick={() => {
              unLike(false);
              props.onremoveLike(postid, user.name);
            }}
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              unLike(true);
              props.onaddLike(postid, user.name);
            }}
          />
        )}
        <FaRegComment />
      </IconDiv>
      <hr />
      <TotalLikesDiv>
        {totallikes.length > 0 ? (
          <div>
            <FaHeart /> {`${totallikes.length}  likes`}
          </div>
        ) : null}
      </TotalLikesDiv>
    </PostLikeDiv>
  );
};
const maptoDispatch = (dispatch) => ({
  onaddLike: (postid, username) => dispatch(addLike(postid, username)),
  onremoveLike: (postid, username) => dispatch(removeLike(postid, username)),
});

export default connect(null, maptoDispatch)(PostLikes);
