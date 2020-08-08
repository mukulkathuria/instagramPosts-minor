export const fileUpload = (error, file) => {
    if (file.size / 1024 / 1024 > 2) {
      return (error.pic = "Invalid size");
    }
    if(file.size / 1024 /1024 <= 2){
      error.pic = ""
    }
    if (file.type === "image/jpeg" || file.type === "image/png") {
      return (error.pic = "");
    } else {
      return (error.pic = "invalid extension");
    }
  };
  