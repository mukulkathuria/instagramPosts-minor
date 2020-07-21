import * as Yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().min(3).required("Password cant be empty"),
});
