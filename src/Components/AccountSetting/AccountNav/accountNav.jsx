import React from "react";
import { MainDiv , StyleNav } from "./accountNav.style";

const AccountNav = () => {
  return (
    <MainDiv>
      <StyleNav to="/account/edit">
        <div>Edit Profile</div>
      </StyleNav>

      <StyleNav to="/account/password">
        <div>Change Password</div>
      </StyleNav>

      <StyleNav to="/account/appsandwebsite">
        <div>Apps and Websites</div>
      </StyleNav>

      <StyleNav to="/account/emails">
        <div>Email and SMS</div>
      </StyleNav>

      <StyleNav to="/account/pushnotify">
        <div>Push Notifications</div>
      </StyleNav>

      <StyleNav to="/account/contacts">
        <div>Manage Contacts</div>
      </StyleNav>

      <StyleNav to="/account/privacy">
        <div>Privacy and Security</div>
      </StyleNav>

      <StyleNav to="/account/loginactivity">
        <div>Login Activity</div>
      </StyleNav>
    </MainDiv>
  );
};
export default AccountNav;
