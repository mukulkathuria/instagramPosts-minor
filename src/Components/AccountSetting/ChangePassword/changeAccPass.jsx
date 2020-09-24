import React from "react";
import { Form, Formik } from "formik";
import {
  InputGroup,
  LabelAside,
  SuccessBtn,
  DivExtraInfo,
} from "./changeAccPass.style";
import FormControl from "../../FormControl/formControl";

const ChangeAccountPass = () => {
  return (
    <Formik>
      {(formik) => (
        <Form>
          <InputGroup>
            <LabelAside>
              <label>Old Password</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl control="input" type="password" name="oldpass" />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>New Password</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl control="input" type="password" name="newpass" />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside>
              <label>Confirm New Password</label>
            </LabelAside>
            <DivExtraInfo>
              <FormControl control="input" type="password" name="confirmpass" />
            </DivExtraInfo>
          </InputGroup>
          <InputGroup>
            <LabelAside />
            <SuccessBtn type="submit" disabled={true}>
              Change Password
            </SuccessBtn>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};
export default ChangeAccountPass;
