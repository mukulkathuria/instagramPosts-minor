import React from "react";
import PostHeader from "./PostHeader/postHeader";
import PostImage from "./PostImage/postImage";
import PostLikes from "./PostLikes/postLikes";
import PostComments from "./CommentBox/postComments";
import CommentForm from "./PostComments/commentform";
import { PostsDiv, Post, CommentInput } from "./posts.component.style";
import Spinner from "../Spinner/spinner";

const PostComponent = ({ posts, user }) => {
  if (!posts) return <Spinner />;
  return (
    <PostsDiv>
      {posts.map((list) => (
        <Post key={list._id}>
          <PostHeader
            head={list.heading}
            image={list.headImg}
            postid={list._id}
          />
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
            postuser={list.heading}
            caption={list.caption}
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
    </PostsDiv>
  );
};
export default PostComponent;
