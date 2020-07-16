import React from "react";
import { FaHeart } from "react-icons/fa";
import { MainImage } from "./postImage.style";

const PostImage = ({ image }) => {
  const [show, hide] = React.useState(false);

  const handleClick = () => {
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
export default PostImage;
