import React from "react";
import Inputs from "./inputControl";

const FormControl = ({ control, ...props }) => {
  switch (control) {
    case "input":
      return <Inputs {...props} />;
    case "textarea":
      return <Inputs as="textarea" {...props} />;
    default:
      return null;
  }
};
export default FormControl;
