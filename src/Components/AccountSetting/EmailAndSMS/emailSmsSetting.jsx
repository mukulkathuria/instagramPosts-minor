import React from "react";
import { Formik, Form, Field } from "formik";
import {
  MainDiv,
  InputDiv,
  SubDiv,
  MainHead,
  SuccessBtn,
} from "./emailSmsSetting.style";
import checkboxs from "./checkBoxes.json";

const EmailAndSMS = () => {
  return (
    <Formik
      initialValues={{
        feedback: false,
        reminder: false,
        product: false,
        news: false,
      }}
    >
      {(formik) => (
        <Form>
          <MainDiv>
            <MainHead>Subscribe to:</MainHead>
            {checkboxs.map((row) => (
              <InputDiv key={row.id}>
                <label>
                  <Field type="checkbox" name={row.name} />
                  {row.label}
                </label>
                <SubDiv>{row.sub}</SubDiv>
              </InputDiv>
            ))}
            <SuccessBtn type="submit" disabled={formik.isSubmitting}>
              Submit
            </SuccessBtn>
          </MainDiv>
        </Form>
      )}
    </Formik>
  );
};
export default EmailAndSMS;
