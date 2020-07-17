import React from "react";
import SignInPage from "../SignInPage/signIn";
import { MainDiv, DivContainer, LeftDiv, RightDiv } from "./homePage.style";
import Insta from '../../images/InstagramHome.png';

const HomePage = () => {
  React.useEffect(() => {
    document.title = "Instagram";
  }, []);
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
