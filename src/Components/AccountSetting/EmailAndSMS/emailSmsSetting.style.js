import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 40px 0 0 90px;
`;

export const InputDiv = styled.div`
  margin: 1.5rem 0;
  font-size: 1em;
  font-weight: 600;
  label {
    display: flex;
    align-items: center;
  }
  input[type="checkbox" i] {
    background-color: #ffff;
    cursor: default;
    appearance: checkbox;
    box-sizing: border-box;
    margin-right: 10px;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    border-radius: 3px;
    height: 16px;
    position: relative;
    width: 16px;
  }
`;
export const SubDiv = styled.div`
  color: grey;
  margin: 15px 5px;
  font-weight: 400;
`;
export const MainHead = styled.div`
  font-size: 1.6em;
`;

export const SuccessBtn = styled.button`
  outline: none;
  border: none;
  background-color: blue;
  cursor: pointer;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  &:disabled {
    background-color: lightblue;
    cursor: default;
  }
`;