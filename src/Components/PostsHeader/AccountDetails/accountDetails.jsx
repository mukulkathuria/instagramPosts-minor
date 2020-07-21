import React from "react";
import { connect } from "react-redux";
import { AccDetails,User,SignedAs,Logout } from "./accountDetails.style";
import { removeUser } from "../../../Redux/AuthReducer/userReducerActions";

const AccountDetails = ({ user ,onRemoveUser }) => {
  return (
    <AccDetails>
      <User>
      <SignedAs>Signed as</SignedAs>
      <div>{user.name}</div>
      </User>
      <Logout onClick={onRemoveUser}>Log out</Logout>
    </AccDetails>
  );
};
const maptoDispatch = dispatch =>({
    onRemoveUser: () => dispatch(removeUser())
})
export default connect(null,maptoDispatch)(AccountDetails);
