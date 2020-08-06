import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
`;

export const NullSaved = styled.div`
  display: flex;
  div {
    max-width: 25rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Photogrid = styled.div``;

export const Uploadphoto = styled.div`
  width:15rem;
  height:20rem;
  background-color:#f1f1f1;
  position:relative;
  cursor:pointer;
  svg{
    font-size:3rem;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%)
  }
`;