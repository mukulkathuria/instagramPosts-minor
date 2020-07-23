import React from "react";
import { BsBookmark, BsCameraVideo, BsGrid3X3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { LinkDiv, StyledLink } from "./userNav.style";

const UserNav = ({ url }) => {
  return (
    <LinkDiv>
      <StyledLink exact to={{ pathname: `${url}` }}>
        <div>
          <BsGrid3X3 />
          POSTS
        </div>
      </StyledLink>
      <StyledLink to={{ pathname: `${url}/channel` }}>
        <div>
          <BsCameraVideo />
          IGTV
        </div>
      </StyledLink>

      <StyledLink to={{ pathname: `${url}/saved` }}>
        <div>
          <BsBookmark />
          SAVED
        </div>
      </StyledLink>

      <StyledLink to={{ pathname: `${url}/tagged` }}>
        <div>
          <FaRegUserCircle />
          TAGS
        </div>
      </StyledLink>
    </LinkDiv>
  );
};
export default UserNav;
