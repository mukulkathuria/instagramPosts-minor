import React, { Suspense } from "react";
import { connect } from "react-redux";
import PostHeader from "../../Components/PostHeader/postHeader";
import PostImage from "../../Components/PostImage/postImage";
import PostLikes from "../../Components/PostLikes/postLikes";
import PostComments from "../../Components/CommentBox/postComments";
import CommentForm from "../../Components/PostComments/commentform";
import AsideBar from "../../Components/PostsAside/aSideBar";
import {
  PostsDiv,
  Post,
  CommentInput,
  MainDiv,
  PostsPage,
} from "./postPage.style";
import PostsPageHeader from "../../Components/PostsHeader/postPageHeader";
import { fetchCollectionAsync } from "../../Redux/PostsReducer/post.collection.actions";
import Spinner from "../../Components/Spinner/spinner";

const Posts = ({ posts, user, getCollection, ...props }) => {
  React.useEffect(() => {
    document.title = "Instagram";
    getCollection();
  }, [getCollection]);
  return (
    <PostsPage>
      <PostsPageHeader user={user} />
      <MainDiv>
          <PostsDiv>
            <Suspense fallback={<Spinner />}>
              {posts &&
                posts.map((list) => (
                  <Post key={list._id}>
                    <PostHeader head={list.heading} image={list.headImg} />
                    <PostImage
                      image={list.ImgUrl}
                      user={user}
                      likes={list.like}
                      postid={list._id}
                    />
                    <PostLikes
                      totallikes={list.like}
                      postid={list._id}
                      user={user}
                    />
                    <PostComments
                      user={user}
                      postid={list._id}
                      comments={list.comments}
                    />
                    <CommentInput>
                      <CommentForm postid={list._id} users={user} />
                    </CommentInput>
                  </Post>
                ))}
            </Suspense>
          </PostsDiv>
          <AsideBar user={user} />
        </MainDiv>
    </PostsPage>
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
