import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  div {
    padding: 20px 10px 20px 20px;
  }
`;

export const StyleNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  &:hover {
    background-color: #f1f1f1;
  }
  &.active {
    border-left: 3px solid black;
    font-weight: 600;
    &:hover {
      background-color: inherit;
    }
  }
`;
