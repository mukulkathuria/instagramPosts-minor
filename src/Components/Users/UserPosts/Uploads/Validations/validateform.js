import { fileUpload } from "./uploadFile";

export const validateForm = ({ errors, ...res }) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));

  for (let key in res) {
    if (key === "uploadPercentage") {
      key++;
    } else {
      if (res[key].length === 0) valid = false;
    }
  }
  return valid;
};

export const changeErrors = (error, name, value, targets) => {
  switch (name) {
    case "desc":
      error.desc = value.length <= 10 ? "Min char 10 letters" : "";
      break;

    case "file":
      let file = targets.files[0];
      if (file) fileUpload(error, file);
      break;

    default:
      break;
  }
};

export const errorsForm = ({ errors, ...res }) => {
  for (let key in res) {
    if (key === "uploadPercentage") {
      key++;
    } else {
      if (res[key].length === 0) {
        errors[key] = `invalid ${key}`;
      }
    }
  }
};

