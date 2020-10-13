import React from "react";
import { Formik, Form, Field } from "formik";
import {
  MainDiv,
  RadioDiv,
  RadioGroup,
  RadioHead,
  Label,
  MainGroup,
  SubDiv,
} from "./pushNotfication.style";
import { initialValue } from "./radioInitialValue";
import notifications from "./notifications.data.json";

const PushNotification = () => {
  return (
    <Formik initialValues={initialValue}>
      {(formik) => (
        <Form>
          <MainDiv>
            {notifications.map((row) => (
              <MainGroup key={row.id}>
                <RadioHead>{row.head}</RadioHead>
                <RadioGroup>
                  {row.radiogroup.map((fields) => (
                    <RadioDiv key={fields.id}>
                      <Field
                        type="radio"
                        name={row.name}
                        value={fields.value}
                      />
                      <Label>{fields.label}</Label>
                    </RadioDiv>
                  ))}
                </RadioGroup>
                <SubDiv>{row.sub}</SubDiv>
              </MainGroup>
            ))}
          </MainDiv>
        </Form>
      )}
    </Formik>
  );
};

export default PushNotification;
