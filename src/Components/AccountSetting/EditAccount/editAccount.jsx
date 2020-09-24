import React, { useEffect } from "react";
import manSvg from "../../../images/man.svg";
import ChangeAccountPass from "../ChangePassword/changeAccPass";
import {
  MainDiv,
  UserDiv,
  UserImg,
  UserInfo,
  FormDiv,
} from "./editAccount.style";
import EditAccountForm from "./EditForm/editAccountForm";

const EditAccount = ({ Pass }) => {
  useEffect(() => {
    document.title = "Edit Profile .Instagram";
  }, []);
  return (
    <MainDiv>
      <UserDiv>
        <UserImg>
          <img src={manSvg} alt="avatar" />
        </UserImg>
        <UserInfo>
          <h3>mukulKathuria</h3>
          {!Pass && <button>Change Profile Photo</button>}
        </UserInfo>
      </UserDiv>
      <FormDiv>{Pass ? <ChangeAccountPass /> : <EditAccountForm />}</FormDiv>
    </MainDiv>
  );
};

export default EditAccount;
