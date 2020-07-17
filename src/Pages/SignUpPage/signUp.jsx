import React from "react";
import SignUpForm from "../../Components/SignUpForm/signUpForm";
import {
  MainDiv,
  FormDiv,
  Heading,
  AlreadyAcc,
  Termscond,
  FacebookAcc,
} from "./signUpPage.style";
import headingimg from "../../images/instagram-heading.jpg";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  React.useEffect(() => {
    document.title = "Sign up . Instagram";
  }, []);
  return (
    <MainDiv>
      <FormDiv>
        <Heading>
          <img src={headingimg} alt="heading" />
        </Heading>
        <FacebookAcc>
            <div>Sign up to see photos and videos from your friends.</div>
            <button>Log in with Facebook</button>
        </FacebookAcc>
        <SignUpForm />
        <Termscond>
          <div>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy{" "}
          </div>
        </Termscond>
      </FormDiv>
      <AlreadyAcc>
        <div>
          Have an account ? <Link to="/accounts/login">Log in</Link>
        </div>
      </AlreadyAcc>
    </MainDiv>
  );
};
export default SignUpPage;
