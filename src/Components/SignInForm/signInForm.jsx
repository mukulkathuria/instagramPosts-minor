import React from "react";
import { Formik, Form } from "formik";
import FormControl from "../FormControl/formControl";
import {
  initialValues,
  validationSchema,
} from "./FormikControls/initialvalidation";
import onSubmitting from "./FormikControls/submition";
const SignInForm = (props) => {
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
            name="email"
            type="email"
            placeholder="username or email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Login in.." : "Log in"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;
