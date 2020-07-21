import styled from "styled-components";

export const MainImage = styled.div`
  width: 100%;
  height: 35rem;
  margin:0.7rem 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius:5px;
  }
  svg {
    position: absolute;
    font-size: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
