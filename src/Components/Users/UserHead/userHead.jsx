import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderImg, HeaderUser, ModalDiv } from "./userHead.style";
import Modal from "../../Modal/modal";
import UploadProfile from "./Uploads/uploadProfileImg";
import { baseurl } from "../../../Data/baseUrl.json";

const UserHead = ({ user, currentuser }) => {
  const [urlmodal, hideModal] = React.useState(false);
  const isCurrent = Boolean(user.username === currentuser.username);
  return (
    <Header>
      <HeaderImg>
        <img
          src={`${baseurl + "/" + user.profileImg}`}
          alt="avatar"
          onClick={() => (isCurrent ? hideModal(true) : null)}
        />
      </HeaderImg>
      <HeaderUser>
        <div className="username">
          {user.username}
          {isCurrent ? (
            <Link to="/account">
              <button>Edit Profile</button>
            </Link>
          ) : (
            <button>Follow</button>
          )}
        </div>
        <div className="follower">
          <div>{user.Posts.length} Posts</div>
          <div>{user.followers.length} followers</div>
          <div>{user.follows.length} following</div>
        </div>
        <div className="name">{user.name}</div>
      </HeaderUser>
      {urlmodal && (
        <Modal show={urlmodal} modalClose={() => hideModal(!urlmodal)}>
          <ModalDiv>
            <div className="data">Want to change your Profile Image</div>
            <UploadProfile />
          </ModalDiv>
        </Modal>
      )}
    </Header>
  );
};

export default UserHead;
