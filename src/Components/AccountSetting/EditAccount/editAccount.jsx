import React from "react";
import manSvg from "../../../images/man.svg";
import { MainDiv, UserDiv , UserImg , UserInfo } from "./editAccount.style";

const EditAccount = () => {
  return (
    <MainDiv>
      <UserDiv>
        <UserImg>
          <img src={manSvg} alt="avatar" />
        </UserImg>
        <UserInfo>
          <h3>mukulKathuria</h3>
          <button>Change Profile Photo</button>
        </UserInfo>
      </UserDiv>
    </MainDiv>
  );
};

export default EditAccount;
