import React from "react";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import { MainImage } from "./postImage.style";
import { addLike } from "../../Redux/PostsReducer/posts.actions";

const PostImage = ({ image, user, likes, postid, onaddLike }) => {
  const [show, hide] = React.useState(false);

  const handleClick = () => {
    const alreadyliked = likes.includes(user.name);
    if (!alreadyliked) {
      onaddLike(postid,user.name);
    }
    hide(true);
    setTimeout(() => {
      hide(false);
    }, 1000);
  };
  return (
    <MainImage>
      {show && <FaHeart color="red" />}
      <img src={image} alt="" onDoubleClick={() => handleClick()} />
    </MainImage>
  );
};
const maptoDispatch = (dispatch) => ({
  onaddLike: (postid, username) => dispatch(addLike(postid, username)),
});
export default connect(null,maptoDispatch)(PostImage);
