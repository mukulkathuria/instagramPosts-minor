import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = 'nav-item-active'

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  a {
    text-decoration: none;
    color: inherit;
    font-size:12px;
  }
  svg{
      margin-right:5px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    margin-right:4rem;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    border-top: 1px solid;
    font-weight:600;
  }
`;