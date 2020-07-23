import React from "react";
import AsideBar from "../../Components/Posts/PostsAside/aSideBar";
import { MainDiv, PostsPage } from "./dashboard.style";
import PostComponent from "../../Components/Posts/posts.component";

const Dashboard = ({ posts, user }) => {
    React.useEffect(()=>{
        document.title="Instagram";
    },[])
  return (
    <PostsPage>
      <MainDiv>
        <PostComponent posts={posts} user={user} />
        <AsideBar user={user} />
      </MainDiv>
    </PostsPage>
  );
};
export default Dashboard;
