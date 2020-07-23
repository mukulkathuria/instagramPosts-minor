import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MainDiv, NullSaved } from "./usertagged.style";

const UserTagged = () => {
  return (
    <MainDiv>
      <NullSaved>
        <div>
          <FaRegUserCircle />
        </div>
        <h4>Photos of you</h4>
        <p>When people tag you in photos, they'll appear here.</p>
      </NullSaved>
    </MainDiv>
  );
};

export default UserTagged;
