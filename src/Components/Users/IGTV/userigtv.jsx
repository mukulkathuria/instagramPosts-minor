import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { MainDiv, NullSaved } from "./userigtv.style";

const UserIGTV = () => {
  return (
    <MainDiv>
      <NullSaved>
        <div>
          <BsCameraVideo />
        </div>
        <h4>Upload a Video</h4>
        <p>Videos must be between 1 and 60 minutes long.</p>
      </NullSaved>
    </MainDiv>
  );
};

export default UserIGTV;
