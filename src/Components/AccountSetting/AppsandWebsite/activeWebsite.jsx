import React from "react";
import { CenterMain, CenterGrey } from "./AppandWebsite.style";

const ActiveWebsiteSetting = () => {
  return (
    <div>
      <CenterMain>
        These are apps and websites you've used Instagram to log into and have
        recently used. They can request info you chose to share with them.
      </CenterMain>
      <CenterGrey>
        You have not authorized any applications to access your Instagram
        account.
      </CenterGrey>
    </div>
  );
};
export default ActiveWebsiteSetting;
