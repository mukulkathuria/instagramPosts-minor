import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionAsync } from "../../Redux/PostsReducer/post.collection.actions";
import { removeUser } from "../../Redux/AuthReducer/userReducerActions";
import Spinner from "../../Components/Spinner/spinner";
import PostsPageHeader from "../../Components/Posts/PostsHeader/postPageHeader";
import Dashboard from "../Dashboard/dashboard";
import UserPage from "../User/user";
import getUser from "../../services/users.services";
import ChatBox from "../../Components/Chatbox/chatbox";
import AccountPage from "../Account/accountPage";

const Posts = ({ posts, getCollection, match, location, removeUsers }) => {
  const [user, changeuser] = React.useState(null);

  React.useEffect(() => {
    getCollection();
  }, [getCollection]);

  React.useEffect(() => {
    const userinfo = async () => {
      const result = await getUser();
      changeuser(result);
    };
    userinfo();
  }, []);

  if (!user) return <Spinner />;
  return (
    <Suspense fallback={<Spinner />}>
      <PostsPageHeader user={user} match={match} location={location} />
      <Switch>
        <Route
          exact
          path="/direct/inbox"
          render={(props) => <ChatBox {...props} />}
          />
          <Route path="/account" render={(props) => <AccountPage {...props} />} />
        <Route
          path="/:userid"
          render={(props) => {
            return <UserPage user={user} {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            return <Dashboard posts={posts} user={user} {...props} />;
          }}
        />
      </Switch>
    </Suspense>
  );
};
const maptostate = (state) => ({
  posts: state.posts.post,
});
const maptoDispatch = (dispatch) => ({
  getCollection: () => dispatch(fetchCollectionAsync()),
  removeUsers: () => dispatch(removeUser()),
});
export default connect(maptostate, maptoDispatch)(Posts);
