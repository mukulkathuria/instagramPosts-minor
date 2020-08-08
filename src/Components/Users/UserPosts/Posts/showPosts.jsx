import React from "react";
import PostImage from "../../../Posts/PostImage/postImage";
import PostHeader from "../../../Posts/PostHeader/postHeader";
import PostLikes from "../../../Posts/PostLikes/postLikes";
import CommentForm from "../../../Posts/PostComments/commentform";
import PostComments from "../../../Posts/CommentBox/postComments";

import {
  MainDiv,
  LeftContainer,
  RightContainer,
  Header,
  Likes,
  Comments,
} from "./showPosts.style";

const ShowUserPost = ({ posts, user }) => {
  return (
    <MainDiv>
      <LeftContainer>
        <PostImage
          image={posts.ImgUrl}
          user={user}
          likes={posts.like}
          postid={posts._id}
          usershow
        />
      </LeftContainer>
      <RightContainer>
        <Header>
          <PostHeader
            head={posts.heading}
            image={posts.headImg}
            postid={posts._id}
          />
        </Header>
        <Likes>
          <PostLikes
            totallikes={posts.like}
            postid={posts._id}
            user={user}
            postuser={posts.heading}
            caption={posts.caption}
          />
        </Likes>
        <Comments>
          <PostComments
            user={user}
            postid={posts._id}
            comments={posts.comments}
          />
          <CommentForm postid={posts._id} users={user} />
        </Comments>
      </RightContainer>
    </MainDiv>
  );
};
export default ShowUserPost;
