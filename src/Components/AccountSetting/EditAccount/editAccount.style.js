import styled from "styled-components";

export const MainDiv = styled.div``;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 0;
`;

export const UserInfo = styled.div`
  h3 {
    font-weight: 500;
  }
  button {
    border: none;
    color: blue;
    font-weight: 600;
    background-color: inherit;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const UserImg = styled.div`
  margin: 2px 32px 0 124px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;
