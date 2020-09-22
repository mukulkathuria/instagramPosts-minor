import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  display: flex;
`;
export const DivContainer = styled.div`
  width: 70%;
  margin: 1% 15%;
  background-color: #ffff;
  display: flex;
  height: 86vh;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const LeftContainer = styled.div`
    width:25%;
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const RightContainer = styled.div`
    width:75%;
`;