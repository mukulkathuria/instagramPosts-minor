import * as Yup from "yup";

const passRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().min(4).required("Required"),
  username: Yup.string().min(4).required("Usename cant be empty"),
  email: Yup.string().email().required("Email cant be empty"),
  password: Yup.string()
    .min(5, "its too short")
    .matches(passRegx, "please enter valid password")
    .required("Password cant be empty"),
});
