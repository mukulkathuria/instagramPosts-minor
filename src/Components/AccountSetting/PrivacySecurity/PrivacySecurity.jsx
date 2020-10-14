import React from "react";
import {
  MainDiv,
  MainGroup,
  MainHead,
  CheckDiv,
  ConDiv,
  ExtraInfo,
} from "./PrivacySecurity.style";

const PrivacySecurity = () => {
  return (
    <MainDiv>
      <MainGroup>
        <ConDiv>
          <MainHead>Account Privacy</MainHead>
          <CheckDiv>
            <input type="checkbox" name="type1" />
            <label>Private Account</label>
          </CheckDiv>
          <ExtraInfo>
            When your account is private, only people you approve can see your
            photos and videos on Instagram. Your existing followers won't be
            affected.
          </ExtraInfo>
        </ConDiv>
      </MainGroup>
      <MainGroup>
        <ConDiv>
          <MainHead>Activity Status</MainHead>
          <CheckDiv>
            <input type="checkbox" name="type1" />
            <label>Show Activity Status</label>
          </CheckDiv>
          <ExtraInfo>
            Allow accounts you follow and anyone you message to see when you
            were last active on Instagram apps. When this is turned off, you
            won't be able to see the activity status of other accounts.
          </ExtraInfo>
        </ConDiv>
      </MainGroup>
      <MainGroup>
        <ConDiv>
          <MainHead>Story Sharing</MainHead>
          <CheckDiv>
            <input type="checkbox" name="type1" />
            <label>Allow Sharing</label>
          </CheckDiv>
          <ExtraInfo>Let people share your story as messages</ExtraInfo>
        </ConDiv>
      </MainGroup>
    </MainDiv>
  );
};
export default PrivacySecurity;
