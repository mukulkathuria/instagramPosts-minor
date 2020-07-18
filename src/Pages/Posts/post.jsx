import React from "react";
import { Redirect } from "react-router-dom";
import PostHeader from "../../Components/PostHeader/postHeader";
import PostImage from "../../Components/PostImage/postImage";
import PostLikes from "../../Components/PostLikes/postLikes";
import PostComments from "../../Components/CommentBox/postComments";
import CommentForm from "../../Components/PostComments/commentform";
import { PostsDiv, Post, CommentInput } from "./postPage.style";
import { connect } from "react-redux";

const Posts = ({ posts, user, match }) => {
  const CapUser =
    match.params.userid[0].toUpperCase() + match.params.userid.slice(1);
  const smallUser = match.params.userid;
  if (user.name !== smallUser || user.name !== CapUser) {
    return <Redirect to={{ pathname: "/posts/" + user.name }} />;
  }
  return (
    <PostsDiv>
      <div>
        {posts.post &&
          posts.post.map((list) => (
            <Post key={list.id}>
              <PostHeader head={list.heading} image={list.headImg} />
              <PostImage image={list.ImgUrl} />
              <PostLikes totallikes={list.like} postid={list.id} user={user} />
              <PostComments comments={list.comments} />
              <CommentInput>
                <CommentForm postid={list.id} users={user} />
              </CommentInput>
            </Post>
          ))}
      </div>
    </PostsDiv>
  );
};
const maptostate = (state) => ({
  posts: state.posts,
  user: state.user.user,
});
export default connect(maptostate)(Posts);
