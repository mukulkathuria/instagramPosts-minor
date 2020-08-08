import styled from "styled-components";

export const Header = styled.div`
  margin: 2rem;
  padding: 1rem;
  display: flex;
`;
export const HeaderImg = styled.div`
  height: 150px;
  width: 150px;
  margin:0 5rem;
  img {
    height: 150px;
    width: 150px;
    cursor:pointer;
    border-radius:50%;
  }
`;

export const ModalDiv = styled.div`
  .data{
    text-align:center;
    margin-bottom:1rem;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  .username {
    display: flex;
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;
    button {
      background-color: #ffff;
      border: 0.2px solid;
      cursor: pointer;
      margin: 0 2rem;
      font-weight: 600;
      border-radius: 5px;
      padding: 5px;
      border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    }
  }
  .follower {
    display: flex;
    margin: 0.5em 0;
    margin-left: 0;
    div {
      margin-right: 15px;
    }
  }
  .name {
    font-size: 1.2em;
    color: grey;
    margin: 0.5em 0;
  }
`;
