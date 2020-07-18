import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import FormControl from "../FormControl/formControl";
import {
  initialValues,
  validationSchema,
} from "./FormikControls/initialvalidation";
import { registerUser } from "../../services/signUp.services";

const SignUpForm = ({ history, ...props }) => {
  const onSubmitting = async (values, submitprops) => {
    try {
      const user = await registerUser(values);
      if (user.user) history.push("/posts/" + user.user.name);
    } catch (err) {
      submitprops.setSubmitting(false);
      submitprops.setFieldError("email", err.response.data.error);
    }
  };

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
export default withRouter(SignUpForm);
