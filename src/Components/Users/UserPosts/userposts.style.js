import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
`;

export const NullSaved = styled.div`
  display: flex;
  div {
    width: 25rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Photogrid = styled.div`
  display:grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GridItems = styled.div`
  height:15rem;
  img{
    height:100%;
    width:100%;
  }
  cursor:pointer;
`;

export const Uploadphoto = styled.div`
  max-width:15rem;
  max-height:20rem;
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