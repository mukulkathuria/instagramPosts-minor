import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AccDetails, User, Logout } from "./accountDetails.style";
import { removeUser } from "../../../../Redux/AuthReducer/userReducerActions";
import BackDropAcc from "./backdropaccount";
import { FaUserTie } from "react-icons/fa";

const AccountDetails = ({ user, onRemoveUser }) => {
  const[bkdropshow , hideshow] = React.useState(true);
  return (
    <React.Fragment>
      <BackDropAcc show={bkdropshow} clicked={() => hideshow(false)} />
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
    </React.Fragment>
  );
};
const maptoDispatch = (dispatch) => ({
  onRemoveUser: () => dispatch(removeUser()),
});
export default connect(null, maptoDispatch)(AccountDetails);
