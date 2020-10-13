import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainDiv = styled.div`
  position: relative;
`;

export const MainHead = styled.div`
  margin-top: 75px;
  margin-left: 60px;
  h3 {
    font-weight: 400;
    font-size: 2rem;
  }
`;
export const StyleNav = styled(NavLink)`
  text-decoration: none;
  color: grey;
  width: 100%;
  &.active {
    border-bottom: 2px solid black;
    font-weight: 600;
    color: black;
    &:hover {
      background-color: inherit;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;
  div {
    padding: 25px;
  }
`;

export const CenterMain = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
`;
export const CenterGrey = styled.div`
  font-size: 1em;
  color: grey;
  margin-top: 1.6rem;
`;
