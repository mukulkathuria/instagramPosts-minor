import React from "react";
import SignInForm from "../../Components/SignInForm/signInForm";
import headingimg from "../../images/instagram-heading.jpg";
import {
  FormDiv,
  SignInDiv,
  Heading,
  ForgetPass,
  SignUp,
} from "./signin.style";
import { Link } from "react-router-dom";
const SignInPage = () => {
  React.useEffect(() => {
    document.title = "Login ● Instagram";
  }, []);
  return (
    <SignInDiv>
      <FormDiv>
        <Heading>
          <img src={headingimg} alt="heading" />
        </Heading>
        <SignInForm />
        <ForgetPass>
          <div>or</div>
          <button>Login with Facebook</button>
          <div>Forget password</div>
        </ForgetPass>
      </FormDiv>
      <SignUp>
        <div>
          Don't have any account? <Link to="/accounts/emailsignup">Sign up</Link>
        </div>
      </SignUp>
    </SignInDiv>
  );
};
export default SignInPage;
