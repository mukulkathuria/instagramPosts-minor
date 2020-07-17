import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./Pages/Posts/post";
import HomePage from "./Pages/HomePage/homePage";
import SignInPage from "./Pages/SignInPage/signIn";
import SignUpPage from "./Pages/SignUpPage/signUp";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/accounts/login" component={SignInPage} />
      <Route exact path="/accounts/emailsignup" component={SignUpPage} />
      <Route exact path="/posts/:userid" component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default App;
