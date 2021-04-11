import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UserNav from "../../Components/Users/UserNav/userNav";
import UserHead from "../../Components/Users/UserHead/userHead";
import SavedPosts from "../../Components/Users/SavedPosts/savedPosts";
import UserTagged from "../../Components/Users/UserTagged/usertagged";
import UserIGTV from "../../Components/Users/IGTV/userigtv";
import ProfilePosts from "../../Components/Users/UserPosts/userPosts";
import { DivContainer, PostsDiv, MainDiv } from "./user.style";
import getUser from "../../services/users.services";
import Spinner from "../../Components/Spinner/spinner";

const UserPage = (props) => {
  const {
    match: {
      url,
      params: { userid },
    },
    currentuser,
    match,
  } = props;

  const [user, setuser] = useState(null);

  React.useEffect(() => {
    if (user) {
      document.title = user.name + "  (@ " + user.username + ")  . Instagram";
    }
  }, [user]);

  React.useEffect(() => {
    getUser(userid)
      .then((res) => setuser(res))
      .catch((err) => console.log(err));
  }, [userid]);
  // debug
  if (!user) return <Spinner />;

  return (
    <MainDiv>
      <DivContainer>
        <UserHead user={user} currentuser={currentuser} />
        <UserNav url={url} />
        <PostsDiv>
          <Switch>
            <Route exact path={`${url}/channel`} render={() => <UserIGTV />} />
            <Route exact path={`${url}/saved`} render={() => <SavedPosts />} />
            <Route exact path={`${url}/tagged`} render={() => <UserTagged />} />
            <Route
              exact
              path={`${url}`}
              render={() => (
                <ProfilePosts
                  posts={user.Posts}
                  match={match}
                  user={user}
                  currentuser={currentuser}
                />
              )}
            />
          </Switch>
        </PostsDiv>
      </DivContainer>
    </MainDiv>
  );
};
export default UserPage;
