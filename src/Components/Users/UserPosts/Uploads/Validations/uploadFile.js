export const fileUpload = (error, file) => {
  if (file.size / 1024 / 1024 > 2) {
    return (error.file = "Invalid size");
  }
  if(file.size / 1024 /1024 <= 2){
    error.file = ""
  }
  if (file.type === "image/jpeg" || file.type === "image/png") {
    return (error.file = "");
  } else {
    return (error.file = "invalid extension");
  }
};
