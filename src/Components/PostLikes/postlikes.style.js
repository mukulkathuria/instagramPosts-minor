import styled from "styled-components";

export const PostLikeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconDiv = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    margin-right: 1.2rem;
    font-size: 1.2em;
    &:hover {
      cursor: pointer;
    }
  }
`;
