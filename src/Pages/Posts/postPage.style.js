import styled from "styled-components";

export const MainDiv = styled.main`
background-color:rgba(var(--b3f,250,250,250),1);
`;
export const DivContainer = styled.div`
    width:70%;
    margin:0 15%;
`;
export const PostsDiv = styled.div`
  display: flex;
  flex-direction:column;
  width:40rem;
`;
export const Post = styled.div`
  width: 35rem;
  padding:15px;
  margin: 3rem 0;
  background-color:#ffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const CommentInput = styled.div`
  width:100%;
`;
export const PostsPage = styled.div`
  position:relative;
`;