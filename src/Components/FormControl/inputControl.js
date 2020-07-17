import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputGroup, InputDiv } from "./inputs.style";

const Inputs = ({ label, name, ...rest }) => {
  return (
    <InputGroup>
      <InputDiv>
        <Field name={name} {...rest} />
        <ErrorMessage name={name} />
      </InputDiv>
    </InputGroup>
  );
};
export default Inputs;
