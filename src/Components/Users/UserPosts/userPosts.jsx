import React from "react";
import {MainDiv,Photogrid} from "./userposts.style";
import grid from "../../../images/instagridphoto.jpg";

const ProfilePosts  = () =>{
    return(
        <MainDiv>
            <Photogrid>
                <img src={grid} alt="gridphoto"/>
            </Photogrid>
        </MainDiv>
    );
}
export default ProfilePosts;