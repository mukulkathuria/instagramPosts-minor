import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: flex-start;
`;

export const LabelAside = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  text-align: right;
  flex: 0 0 194px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 10px;
`;

export const DivExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ExtraInfo = styled.div`
  font-size: 14px;
  color: grey;
  margin: 0.5em 0;
  width: 80%;
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

export const SaveForm = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

export const DisAccount = styled.div`
  font-weight: 600;
  color: #0095f6;
`;
