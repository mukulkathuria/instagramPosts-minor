import React from "react";
import {
  MainDiv,
  Photogrid,
  NullSaved,
  Uploadphoto,
  GridItems,
} from "./userposts.style";
import AlbumUpload from "./Uploads/uploadalbum";
import grid from "../../../images/instagridphoto.jpg";
import { BsUpload } from "react-icons/bs";
import Modal from "../../Modal/modal";
import { baseurl } from "../../../Data/baseUrl.json";
import ShowUserPost from "./Posts/showPosts";

const ProfilePosts = ({ posts ,user}) => {
  const [show, hide] = React.useState(false);
  const [showAlbum, hideAlbum] = React.useState(false);
  const [userPost, changePost] = React.useState(null);
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
        <Photogrid>
          {posts.map((list) => (
            <GridItems
              key={list._id}
              onClick={() => {
                hideAlbum(true);
                changePost(list);
              }}
            >
              <img src={`${baseurl}/${list.ImgUrl}`} alt={list._id} />
            </GridItems>
          ))}
          <Uploadphoto onClick={() => hide(true)}>
            <BsUpload />
          </Uploadphoto>
        </Photogrid>
      )}
      {show && (
        <Modal show={show} modalClose={() => hide(!show)}>
          <AlbumUpload />
        </Modal>
      )}
      {showAlbum && (
        <Modal show={showAlbum} modalClose={() => hideAlbum(!showAlbum)}>
          <ShowUserPost posts={userPost} user={user} />
        </Modal>
      )}
    </MainDiv>
  );
};
export default ProfilePosts;
