import React from "react";
import { MainDiv, Photogrid, NullSaved } from "./userposts.style";
import grid from "../../../images/instagridphoto.jpg";

const ProfilePosts = ({ posts }) => {
  return (
    <MainDiv>
      {posts.length === 0 ? (
        <NullSaved>
          <div>
            <img src={grid} alt="gridphoto" />
          </div>
        </NullSaved>
      ) : (
        <Photogrid />
      )}
    </MainDiv>
  );
};
export default ProfilePosts;
