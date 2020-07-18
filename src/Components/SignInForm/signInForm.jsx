import React from "react";
import { Formik, Form } from "formik";
import FormControl from "../FormControl/formControl";
import { withRouter } from "react-router-dom";
import {
  initialValues,
  validationSchema,
} from "./FormikControls/initialvalidation";
import { getLogin } from "../../services/signIn.services";

const SignInForm = ({ history, ...props }) => {
  const onSubmitting = async (values, submitprops) => {
    try {
      const user = await getLogin(values);
      if (user.user) history.push("/posts/" + user.user.name);
    } catch (err) {
      submitprops.setSubmitting(false);
      submitprops.setFieldError("password", err.response.data.error);
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
export default withRouter(SignInForm);
