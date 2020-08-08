import React from "react";
import avatar from "../../../images/man.svg";
import { Header, HeaderImg, HeaderUser } from "./userHead.style";

const UserHead = ({user}) => {
  return (
    <Header>
      <HeaderImg>
        <img src={avatar} alt="avatar" />
      </HeaderImg>
      <HeaderUser>
        <div className="username">
          {user.username}
          <button>Edit Profile</button>
        </div>
        <div className="follower">
          <div>{user.Posts.length} Posts</div>
          <div>{user.followers.length} followers</div>
          <div>{user.follows.length} following</div>
        </div>
        <div className="name">{user.name}</div>
      </HeaderUser>
    </Header>
  );
};

export default UserHead;