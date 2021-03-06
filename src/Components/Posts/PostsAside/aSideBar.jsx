import React from "react";
import {
  AsideMain,
  UserDiv,
  SuggestDiv,
  TermsAndCond,
  UserDetail,
} from "./aSideBar.style";
import { Link } from "react-router-dom";
import { baseurl } from "../../../Data/baseUrl.json";

const AsideBar = ({ user }) => {
  return (
    <AsideMain>
      <UserDiv>
        <div>
          <img src={`${baseurl+"/"+user.profileImg}`} alt="avatar" />
        </div>
        <UserDetail>
          <div className="username">{user.username}</div>
          <div className="name">{user.name}</div>
        </UserDetail>
      </UserDiv>
      <SuggestDiv>
        <div className="suggest">
          <div>Suggestions For You</div>
          <div>See All</div>
        </div>
        <div className="suggestlist">
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
      </SuggestDiv>
      <TermsAndCond>
        <Link to="/">About</Link>
        <Link to="/">Help</Link>
        <Link to="/">Press</Link>
        <Link to="/">API</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Location</Link>
        <Link to="/">Hashtags</Link>
        <Link to="/">Language</Link>
      </TermsAndCond>
    </AsideMain>
  );
};
export default AsideBar;
