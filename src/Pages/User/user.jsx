import React from "react";
import { Route, Switch } from "react-router-dom";
import UserNav from "../../Components/Users/UserNav/userNav";
import UserHead from "../../Components/Users/UserHead/userHead";
import SavedPosts from "../../Components/Users/SavedPosts/savedPosts";
import UserTagged from "../../Components/Users/UserTagged/usertagged";
import UserIGTV from "../../Components/Users/IGTV/userigtv";
import ProfilePosts from "../../Components/Users/UserPosts/userPosts";
import { DivContainer, PostsDiv, MainDiv } from "./user.style";

const UserPage = ({ currentuser, match: { url }, match }) => {
  React.useEffect(() => {
    document.title =
      currentuser.name + "  (@ " + currentuser.username + ")  . Instagram";
  }, [currentuser]);

  // debug
  return (
    <MainDiv>
      <DivContainer>
        <UserHead user={currentuser} />
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
                  posts={currentuser.Posts}
                  match={match}
                  user={currentuser}
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
