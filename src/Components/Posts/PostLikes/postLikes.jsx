import React from "react";
import { connect } from "react-redux";
import { addLikeAsync, removeLikeAsync } from "../../../Redux/PostsReducer/AsyncActions";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { IconDiv, PostLikeDiv, TotalLikesDiv ,Caption} from "./postlikes.style";

const PostLikes = ({ totallikes, postid, user, ...props }) => {
  const alreadyliked = totallikes.includes(user.username);
  const [liked, unLike] = React.useState(false);
  return (
    <PostLikeDiv>
      <IconDiv>
        {liked || alreadyliked ? (
          <FaHeart
            color="red"
            onClick={() => {
              unLike(false);
              props.onremoveLike(postid, user.username);
            }}
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              unLike(true);
              props.onaddLike(postid, user.username);
            }}
          />
        )}
        <FaRegComment />
      </IconDiv>
      <TotalLikesDiv>
        {totallikes.length > 0 ? (
          <div>
            <FaHeart /> {`${totallikes.length}  likes`}
          </div>
        ) : null}
      </TotalLikesDiv>
      <Caption>
        <strong>{props.postuser}</strong>
        <div>{props.caption}</div>
      </Caption>
    </PostLikeDiv>
  );
};
const maptoDispatch = (dispatch) => ({
  onaddLike: (postid, username) => dispatch(addLikeAsync(postid, username)),
  onremoveLike: (postid, username) => dispatch(removeLikeAsync(postid, username)),
});

export default connect(null, maptoDispatch)(PostLikes);
