import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  flex-direction: column;
  align-items: center;
`;

export const FormDiv = styled.div`
  background-color: white;
  padding: 42px;
  padding-top: 10px;
  margin: 2rem 0;
  width: 25rem;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  .small {
    font-size: 9px;
    color:grey;
  }
  button {
    margin: 1rem 0;
    padding: 8px;
    background-color: blue;
    color: white;
    font-weight: 600;
    border: 0.2px solid #f1f1f1;
    border-radius: 5px;
    width: 100%;
    :disabled {
      background-color: lightblue;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Heading = styled.div`
  padding: 0 4.5em;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Termscond = styled.div`
  font-size: 0.7em;
  text-align: center;
  color: grey;
`;

export const FacebookAcc = styled.div`
  font-weight: 600;
  text-align: center;
  color: grey;
  button {
    background-color: rgba(var(--d69, 0, 149, 246), 1);
  }
`;

export const AlreadyAcc = styled.div`
  text-align: center;
  width: 25rem;
  background-color: #ffff;
  padding: 1rem;
  font-size: 0.8em;
  margin-bottom: 5.6rem;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  a {
    text-decoration: none;
    color: blue;
    font-weight: 600;
  }
`;
