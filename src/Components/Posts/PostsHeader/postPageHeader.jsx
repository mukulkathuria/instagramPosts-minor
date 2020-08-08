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
import { BsHouseDoorFill, BsCursor ,BsHouseDoor } from "react-icons/bs";
import imghead from "../../../images/instagram-heading.jpg";
import AccountDetails from "./AccountDetails/accountDetails";
import { baseurl } from "../../../Data/baseUrl.json";

const PostsPageHeader = ({ user ,match}) => {
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
          <Link to="/">
            {match.isExact ? <BsHouseDoorFill /> : <BsHouseDoor />}
          </Link>
          <BsCursor />
          <FaRegCompass />
          <FaRegHeart />
          <Userinfo onClick={() => hideAcc(!showAcc)}>
            <img src={`${baseurl+"/"+user.profileImg}`} alt="avatar" />
            {showAcc && <AccountDetails user={user} />}
          </Userinfo>
        </Icons>
      </DivContainer>
    </Header>
  );
};
export default PostsPageHeader;
