import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  DivContainer,
  Logo,
  SearchDiv,
  Icons,
  Userinfo,
} from "./postPageHeader.style";
import { FaRegHeart, FaRegCompass } from "react-icons/fa";
import { BsHouseDoorFill, BsCursor } from "react-icons/bs";
import imghead from "../../../images/instagram-heading.jpg";
import avatar from "../../../images/man.svg";
import AccountDetails from "./AccountDetails/accountDetails";

const PostsPageHeader = ({ user }) => {
  const [showAcc, hideAcc] = React.useState(false);

  return (
    <Header>
      <DivContainer>
        <Logo>
          <Link to="/">
            <img src={imghead} alt="logo" />
          </Link>
        </Logo>
        <SearchDiv>
          <input type="text" placeholder="Search" />
        </SearchDiv>
        <Icons>
          <BsHouseDoorFill />
          <BsCursor />
          <FaRegCompass />
          <FaRegHeart />
          <Userinfo onClick={() => hideAcc(!showAcc)}>
            <img src={avatar} alt="avatar" />
            {showAcc && <AccountDetails user={user} />}
          </Userinfo>
        </Icons>
      </DivContainer>
    </Header>
  );
};
export default PostsPageHeader;
