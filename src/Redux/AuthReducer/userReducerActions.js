import { actionTypes } from "./userReduceractionTypes";

export const addUser = (token) => ({
  type: actionTypes.addUser,
  token,
});

export const removeUser = () => ({
  type: actionTypes.removeUser,
});


