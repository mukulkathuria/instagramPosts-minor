import styled from "styled-components";

export const Form = styled.form`
    input{
        margin-top:12px;
    }
`;
export const Errors = styled.div`
  color: red;
  font-size: 0.7em;
`;
export const Successbtn = styled.div`
  margin: 0.7em 0;
  text-align: center;
  button {
    background-color: #6699ff;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    :disabled {
      background-color: lightblue;
      cursor: default;
    }
  }
`;
