import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionAsync } from "../../Redux/PostsReducer/post.collection.actions";
import Spinner from "../../Components/Spinner/spinner";
import PostsPageHeader from "../../Components/Posts/PostsHeader/postPageHeader";
import Dashboard from "../Dashboard/dashboard";
import UserPage from "../User/user";

const Posts = ({ posts, user, getCollection }) => {
  React.useEffect(() => {
    getCollection();
  }, [getCollection]);
  return (
    <Suspense fallback={<Spinner />}>
      <PostsPageHeader user={user} />
      <Switch>
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
  user: state.user.user,
});
const maptoDispatch = (dispatch) => ({
  getCollection: () => dispatch(fetchCollectionAsync()),
});
export default connect(maptostate, maptoDispatch)(Posts);
