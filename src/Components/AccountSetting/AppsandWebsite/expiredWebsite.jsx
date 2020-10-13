import React from "react";
import { CenterMain, CenterGrey } from "./AppandWebsite.style";

const ExpiredWebsiteSetting = () => {
  return (
    <div>
      <CenterMain>
        These are apps and websites you've used Instagram to log into and may
        not have used in a while. They may still have access to info you
        previously shared, but their ability to make additional requests for
        private info has expired.
      </CenterMain>
      <CenterGrey>
        You have no expired applications that had access to your Instagram
        account.
      </CenterGrey>
    </div>
  );
};
export default ExpiredWebsiteSetting;
