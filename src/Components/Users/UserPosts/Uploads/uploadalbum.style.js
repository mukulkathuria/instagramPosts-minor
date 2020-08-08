import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin:1.4rem 0;
  input,
  textarea {
    width:100%;
    margin:0.8em 0;
  }
  textarea {
    height: 8rem;
    padding: 10px;
    font-size: 0.8em;
    font-family:arial;
    transition: all 0.3s linear;
    outline: none;
    border: 1px solid #dddddd;
    border-radius: 5px;
    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
  }
  }
`;

export const MainDiv = styled.div`
  text-align: center;
  position: relative;
`;
export const Errors = styled.span`
  color: red;
  font-size: 0.8em;
  text-align:left;
  float:left;
`;
export const Buttonscs = styled.div`
    text-align:center;
    button{
      width:25%;
      background-color:#6699ff;
      padding:5px;
      border-radius:5px;
      cursor:pointer;
      border:none;
      :disabled{
        background-color:lightblue;
        cursor:default;
      }
    }
`;