import React from "react";
import { Formik, Form } from "formik";
import FormControl from "../FormControl/formControl";
import {
  initialValues,
  validationSchema,
} from "./FormikControls/initialvalidation";
import onSubmitting from "./FormikControls/submition";
const SignUpForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitting}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            name="name"
            type="text"
            placeholder="Name"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            label="email"
            placeholder="Email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            label="password"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing Up..." : "Sign up"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpForm;
