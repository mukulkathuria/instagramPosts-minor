import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AccDetails, User, Logout } from "./accountDetails.style";
import { removeUser } from "../../../../Redux/AuthReducer/userReducerActions";
import { FaUserTie } from "react-icons/fa";

const AccountDetails = ({ user, onRemoveUser }) => {
  return (
    <AccDetails>
      <User>
        <ul>
          <Link to={{ pathname: "/" + user.username }}>
            <li>
              <FaUserTie /> Profile
            </li>
          </Link>
        </ul>
      </User>
      <Logout onClick={onRemoveUser}>Log out</Logout>
    </AccDetails>
  );
};
const maptoDispatch = (dispatch) => ({
  onRemoveUser: () => dispatch(removeUser()),
});
export default connect(null, maptoDispatch)(AccountDetails);
