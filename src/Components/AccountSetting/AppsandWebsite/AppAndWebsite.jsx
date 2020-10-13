import React from "react";
import { Route, Switch } from "react-router-dom";
import ActiveWebsiteSetting from "./activeWebsite";
import { MainDiv, MainHead, StyleNav, NavBar } from "./AppandWebsite.style";
import ExpiredWebsiteSetting from "./expiredWebsite";
import RemovedWebsiteSetting from "./removedWebsite";

const AppAndWebsite = ({ match: { url } }) => {
  return (
    <MainDiv>
      <MainHead>
        <h3>Apps and Websites</h3>
        <NavBar>
          <StyleNav exact to={`${url}`}>
            <div>Active</div>
          </StyleNav>
          <StyleNav exact to={`${url}/expired`}>
            <div>Expired</div>
          </StyleNav>
          <StyleNav exact to={`${url}/removed`}>
            <div>Remove</div>
          </StyleNav>
        </NavBar>
        <Switch>
          <Route
            exact
            path={`${url}/expired`}
            render={() => <ExpiredWebsiteSetting />}
          />
          <Route
            exact
            path={`${url}/removed`}
            render={() => <RemovedWebsiteSetting />}
          />
          <Route
            exact
            path={`${url}`}
            render={() => <ActiveWebsiteSetting />}
          />
        </Switch>
      </MainHead>
    </MainDiv>
  );
};
export default AppAndWebsite;
