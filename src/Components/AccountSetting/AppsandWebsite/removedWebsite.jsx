import React from "react";
import { CenterMain, CenterGrey } from "./AppandWebsite.style";

const RemovedWebsiteSetting = () => {
  return (
    <div>
      <CenterMain>
        These are apps and websites you removed from your account. This means
        they may still have access to info you previously shared, but can't make
        additional requests for private info.
      </CenterMain>
      <CenterGrey>
        You have no removed applications that had access to your Instagram
        account.
      </CenterGrey>
    </div>
  );
};
export default RemovedWebsiteSetting;
