import React from "react";
import PostHeader from "../../Components/PostHeader/postHeader";
import PostImage from "../../Components/PostImage/postImage";
import PostLikes from "../../Components/PostLikes/postLikes";
import PostComments from "../../Components/CommentBox/postComments";
import CommentForm from "../../Components/PostComments/commentform";
import { PostsDiv, Post, CommentInput } from "./postPage.style";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  return (
    <PostsDiv>
      <div>
        {posts.post &&
          posts.post.map((list) => (
            <Post key={list.id}>
              <PostHeader head={list.heading} image={list.headImg} />
              <PostImage image={list.ImgUrl} />
              <PostLikes totallikes={list.like} userid={list.id} />
              <PostComments comments={list.comments} />
              <CommentInput>
                <CommentForm userid={list.id} />
              </CommentInput>
            </Post>
          ))}
      </div>
    </PostsDiv>
  );
};
const maptostate = (state) => ({
  posts: state.posts,
});
export default connect(maptostate)(Posts);
