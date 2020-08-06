import React from "react";
import SignInPage from "../SignInPage/signIn";
import { MainDiv, DivContainer, LeftDiv, RightDiv } from "./homePage.style";
import Insta from '../../images/instabg.png';

const HomePage = ({match,history}) => {
  React.useEffect(() => {
    document.title = "Instagram";
    if(!match.isExact){
      history.push("/");
    }
  }, [match,history]);
  return (
    <MainDiv>
      <DivContainer>
        <LeftDiv>
          <img src={Insta} alt="lnsta" />
        </LeftDiv>
        <RightDiv>
          <SignInPage />
        </RightDiv>
      </DivContainer>
    </MainDiv>
  );
};
export default HomePage;
