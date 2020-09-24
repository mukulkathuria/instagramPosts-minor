import React from "react";
import { Form, Formik } from "formik";
import { initialValue } from "./formControl";
import FormControl from "../../../FormControl/formControl";
import {
  InputGroup,
  LabelAside,
  ExtraInfo,
  DivExtraInfo,
  SuccessBtn,
  SaveForm,
  DisAccount,
} from "./editAccountForm.style";

const EditAccountForm = () => {
  return (
    <Formik initialValues={initialValue} onSubmit={(val) => console.log(val)}>
      {(formik) => (
        <Form>
          <InputGroup>
            <LabelAside>
              <label>Name</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="input"
                name="name"
                placeholder="Enter your Name"
              />
              <ExtraInfo>
                Help people discover your account by using the name you're known
                by: either your full name, nickname, or business name.
              </ExtraInfo>
              <ExtraInfo>
                You can only change your name twice within 14 days.
              </ExtraInfo>
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Username</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="input"
                name="username"
                placeholder="Enter your Username"
              />
              <ExtraInfo>
                In most cases, you'll be able to change your username back to
                known_stranger08 for another 14 days
              </ExtraInfo>
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Website</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="input"
                name="website"
                placeholder="Enter your Website"
              />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Bio</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="textarea"
                name="bio"
                placeholder="Enter Your Bio"
              />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Email</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="input"
                name="email"
                type="email"
                placeholder="Email"
              />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Phone Number</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl
                control="input"
                name="mobile"
                type="number"
                placeholder="Phone Number"
              />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Gender</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl control="input" name="gender" />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside />
            <SaveForm>
              <SuccessBtn type="submit" disabled={true}>
                Submit
              </SuccessBtn>
              <DisAccount>Temporarily disable my account</DisAccount>
            </SaveForm>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};
export default EditAccountForm;
