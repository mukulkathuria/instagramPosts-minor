import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AccountNav from "../../Components/AccountSetting/AccountNav/accountNav";
import EditAccount from "../../Components/AccountSetting/EditAccount/editAccount";
import {
  MainDiv,
  DivContainer,
  LeftContainer,
  RightContainer,
} from "./accounts.style";

const AccountPage = ({ match: { url } }) => {
  return (
    <MainDiv>
      <DivContainer>
        <LeftContainer>
          <AccountNav />
        </LeftContainer>
        <RightContainer>
          <Switch>
            <Route
              exact
              path={`${url}/edit`}
              render={(props) => <EditAccount {...props} />}
            />
            <Route
              exact
              path={`${url}/password`}
              render={(props) => <EditAccount Pass {...props} />}
            />
            <Route
              exact
              path={`${url}/appsandwebsite`}
              render={() => <p>AppandWebsite</p>}
            />
            <Route
              exact
              path={`${url}/pushnotify`}
              render={() => <p>PushNotification</p>}
            />
            <Route
              exact
              path={`${url}/contacts`}
              render={() => <p>Manage Contacts</p>}
            />
            <Route
              exact
              path={`${url}/loginactivity`}
              render={() => <p>Login Activity</p>}
            />
            <Route
              exact
              path={`${url}/emails`}
              render={() => <p>Email from instagram</p>}
            />
            <Route
              exact
              path={`${url}/privacy`}
              render={() => <p>Privacy</p>}
            />
            <Redirect from={`${url}`} to={`${url}/edit`} />
          </Switch>
        </RightContainer>
      </DivContainer>
    </MainDiv>
  );
};
export default AccountPage;
