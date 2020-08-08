import React from "react";
import { Heading, HeadingImg, ModalOption } from "./postHeader.style";
import Modal from "../../Modal/modal";
import { BsThreeDots } from "react-icons/bs";
import deletePost from "../../../services/deleteposts.services";
import {baseurl} from "../../../Data/baseUrl.json";

const PostHeader = ({ head, image ,postid}) => {
  const [showoption, hideOption] = React.useState(false);
  const handleDelete =  async(id) =>{
    const data =await deletePost(id);
    if(data === "removed") window.location.reload();
  }
  if(image[0] !== "h") image=baseurl+"/"+image;
  
  return (
    <Heading>
      <HeadingImg>
        <img src={image} alt="" />
        <div>{head}</div>
      </HeadingImg>
      <BsThreeDots onClick={() => hideOption(true)} />
      <Modal show={showoption} modalClose={() => hideOption(!showoption)}>
        <ModalOption>
          <div onClick={() => handleDelete(postid)}>Delete Post</div>
        </ModalOption>
      </Modal>
    </Heading>
  );
};
export default PostHeader;
