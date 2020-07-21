import React from "react";
import { Heading, HeadingImg } from "./postHeader.style";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = ({ head, image }) => {
  return (
    <Heading>
      <HeadingImg>
        <img src={image} alt="" />
        <div>{head}</div>
      </HeadingImg>
      <BsThreeDots />
    </Heading>
  );
};
export default PostHeader;
