import React from "react";
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
  DivContainer,
  PostsPage,
} from "./postPage.style";
import PostsPageHeader from "../../Components/PostsHeader/postPageHeader";

const Posts = ({ posts, user, ...props }) => {
  return (
    <PostsPage>
      <PostsPageHeader user={user} />
      <MainDiv>
        <DivContainer>
          <PostsDiv>
            {posts &&
              posts.map((list) => (
                <Post key={list.id}>
                  <PostHeader head={list.heading} image={list.headImg} />
                  <PostImage
                    image={list.ImgUrl}
                    user={user}
                    likes={list.like}
                    postid={list.id}
                  />
                  <PostLikes
                    totallikes={list.like}
                    postid={list.id}
                    user={user}
                  />
                  <PostComments comments={list.comments} />
                  <CommentInput>
                    <CommentForm postid={list.id} users={user} />
                  </CommentInput>
                </Post>
              ))}
          </PostsDiv>
          <AsideBar user={user} />
        </DivContainer>
      </MainDiv>
    </PostsPage>
  );
};
const maptostate = (state) => ({
  posts: state.posts.post,
  user: state.user.user,
});
export default connect(maptostate)(Posts);
