import React from "react";
import {
  MainDiv,
  LeftContainer,
  RightContainer,
  DivContainer,
  DirectM,
} from "./chatbox.style";
import { FiEdit, FiSend } from "react-icons/fi";
const ChatBox = () => {
  React.useEffect(() => {
    document.title = "Inbox . Direct";
  }, []);

  return (
    <MainDiv>
      <DivContainer>
        <LeftContainer>
          <DirectM>
            <div />
            <div>Direct</div>
            <FiEdit />
          </DirectM>
        </LeftContainer>
        <RightContainer>
          <div>
            <FiSend />
            <div className="litbig">Write your Messages</div>
            <div className="grey">
              Send private photos and messages to a friend or group.
            </div>
            <button>Send Message</button>
          </div>
        </RightContainer>
      </DivContainer>
    </MainDiv>
  );
};
export default ChatBox;
