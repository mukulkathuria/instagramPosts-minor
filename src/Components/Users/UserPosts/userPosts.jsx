import React from "react";
import { MainDiv, Photogrid, NullSaved, Uploadphoto } from "./userposts.style";
import AlbumUpload from "./Uploads/uploadalbum";
import grid from "../../../images/instagridphoto.jpg";
import { BsUpload } from "react-icons/bs";
import Modal from "../../Modal/modal";

const ProfilePosts = ({ posts }) => {
  const [show, hide] = React.useState(false);
  return (
    <MainDiv>
      {posts.length === 0 ? (
        <NullSaved>
          <div>
            <img src={grid} alt="gridphoto" />
          </div>
          <Uploadphoto onClick={() => hide(true)}>
            <BsUpload />
          </Uploadphoto>
        </NullSaved>
      ) : (
        <Photogrid />
      )}
      {show && (
        <Modal show={show} modalClose={() => hide(!show)}>
          <AlbumUpload />
        </Modal>
      )}
    </MainDiv>
  );
};
export default ProfilePosts;
