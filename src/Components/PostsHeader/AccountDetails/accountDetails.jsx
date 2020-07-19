import React from "react";
import { connect } from "react-redux";
import { AccDetails } from "./accountDetails.style";
import { removeUser } from "../../../Redux/AuthReducer/userReducerActions";

const AccountDetails = ({ user ,onRemoveUser }) => {
  return (
    <AccDetails>
      <div>Signed as</div>
      <div>{user.name}</div>
      <div onClick={onRemoveUser}>Log out</div>
    </AccDetails>
  );
};
const maptoDispatch = dispatch =>({
    onRemoveUser: () => dispatch(removeUser())
})
export default connect(null,maptoDispatch)(AccountDetails);
