import styled from "styled-components";

export const InputGroup = styled.div``;

export const InputDiv = styled.div`
  font-size: 12px;
  color: red;
  margin: 0.4rem auto;
  input {
    padding: 10px;
    font-size:1.2em;
    width: 100%;
    background-color:#f1f1f1;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 3px;
    :focus {
      outline: 1.5px solid blue;
    }
  }
`;
