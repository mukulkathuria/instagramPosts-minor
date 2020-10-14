import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AccountNav from "../../Components/AccountSetting/AccountNav/accountNav";
import AppAndWebsite from "../../Components/AccountSetting/AppsandWebsite/AppAndWebsite";
import EditAccount from "../../Components/AccountSetting/EditAccount/editAccount";
import EmailAndSMS from "../../Components/AccountSetting/EmailAndSMS/emailSmsSetting";
import LoginActivity from "../../Components/AccountSetting/LoginActivity/LoginActivity";
import ManageContacts from "../../Components/AccountSetting/ManageContacts/ManageContacts";
import PrivacySecurity from "../../Components/AccountSetting/PrivacySecurity/PrivacySecurity";
import PushNotification from "../../Components/AccountSetting/PushNotification/PushNotification";
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
              path={`${url}/appsandwebsite`}
              render={(props) => <AppAndWebsite {...props} />}
            />
            <Route
              exact
              path={`${url}/pushnotify`}
              render={() => <PushNotification />}
            />
            <Route
              exact
              path={`${url}/contacts`}
              render={() => <ManageContacts />}
            />
            <Route
              exact
              path={`${url}/loginactivity`}
              render={() => <LoginActivity />}
            />
            <Route
              exact
              path={`${url}/emails`}
              render={() => <EmailAndSMS />}
            />
            <Route
              exact
              path={`${url}/privacy`}
              render={() => <PrivacySecurity />}
            />
            <Redirect from={`${url}`} to={`${url}/edit`} />
          </Switch>
        </RightContainer>
      </DivContainer>
    </MainDiv>
  );
};
export default AccountPage;
