import jwtDecode from "jwt-decode";

const verifyUser = (token) => {
  try {
    const decode = jwtDecode(token);
    return decode;
  } catch (err) {
    return null;
  }
};

export default verifyUser;
