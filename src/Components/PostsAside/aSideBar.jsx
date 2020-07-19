import React from "react";
import { AsideMain, UserDiv, SuggestDiv, TermsAndCond } from "./aSideBar.style";
import avatar from "../../images/man.svg";
import { Link } from "react-router-dom";

const AsideBar = ({user}) => {
  return (
    <AsideMain>
      <UserDiv>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div>{user.name}</div>
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
