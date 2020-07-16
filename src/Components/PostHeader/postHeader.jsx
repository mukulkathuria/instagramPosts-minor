import React from "react";
import { Heading } from "./postHeader.style";

const PostHeader = ({ head, image }) => {
  return (
    <Heading>
      <img src={image} alt="" />
      <div>{head}</div>
    </Heading>
  );
};
export default PostHeader;
