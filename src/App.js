import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Posts from "./Pages/Posts/post";
import HomePage from "./Pages/HomePage/homePage";
import SignInPage from "./Pages/SignInPage/signIn";
import SignUpPage from "./Pages/SignUpPage/signUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ user, ...props }) => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/" render={(props) =>{
          if(user) return <Posts user={user} {...props} />
          return <HomePage {...props} />
        }} />
        <Route exact path="/accounts/login" component={SignInPage} />
        <Route exact path="/accounts/emailsignup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
};
const maptostate = (state) => ({
  user: state.user.user,
});
export default connect(maptostate)(App);
