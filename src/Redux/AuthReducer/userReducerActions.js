import jwtDecode from "jwt-decode";
import { actionTypes } from "./userReduceractionTypes";

export const addUser = (token) => ({
  type: actionTypes.addUser,
  token,
});

export const removeUser = () => ({
  type: actionTypes.removeUser,
});

export const verifyUser = (token) => {
  try {
    const decode = jwtDecode(token);
    return decode;
  } catch (err) {
    return null;
  }
};
