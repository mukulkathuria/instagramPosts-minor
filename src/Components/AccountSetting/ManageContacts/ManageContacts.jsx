import React from "react";
import {
  MainDiv,
  MainHead,
  GrpDiv,
  ContatctGroup,
  ContactDiv,
} from "./ManageContacts.style";

const ManageContacts = () => {
  return (
    <MainDiv>
      <GrpDiv>
        <MainHead>Manage Contacts</MainHead>
        <ContatctGroup>
          <ContactDiv>
            The people listed here are contacts you've uploaded to Instagram. To
            remove your synced contacts, tap Delete All. Your contacts will be
            re-uploaded the next time Instagram syncs your contacts unless you
            go to your device settings and turn off access to contacts
          </ContactDiv>
          <ContactDiv>
            Only you can see your contacts, but Instagram uses the info you've
            uploaded about your contacts to make friend suggestions for you and
            others and to provide a better experience for everyone.
          </ContactDiv>
        </ContatctGroup>
      </GrpDiv>
    </MainDiv>
  );
};
export default ManageContacts;
