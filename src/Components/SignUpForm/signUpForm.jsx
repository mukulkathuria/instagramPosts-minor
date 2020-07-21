import React from "react";
import { withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import FormControl from "../FormControl/formControl";
import { toast } from "react-toastify";
import {
  initialValues,
  validationSchema,
} from "./FormikControls/initialvalidation";
import { registerUser } from "../../services/signUp.services";

const SignUpForm = ({ history, ...props }) => {
  const onSubmitting = async (values, submitprops) => {
    try {
      const user = await registerUser(values);
      if (user.user) history.push("/");
    } catch (err) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        toast.error("Server Error");
        submitprops.resetForm(true);
      }
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
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="small">
            Make sure it's at least 15 characters OR at least 8 characters
            including a number and a lowercase letter
          </div>
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
