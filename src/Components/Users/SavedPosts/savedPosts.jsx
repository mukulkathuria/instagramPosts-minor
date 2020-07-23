import React from "react";
import { BsBookmark } from "react-icons/bs";
import { MainDiv, NullSaved } from "./savedPosts.style";

const SavedPosts = () => {
  return (
    <MainDiv>
      <NullSaved>
        <div>
          <BsBookmark />
        </div>
        <h4>Saved</h4>
        <p>
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </p>
      </NullSaved>
    </MainDiv>
  );
};
export default SavedPosts;
