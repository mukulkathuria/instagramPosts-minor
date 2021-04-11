import { getlogout } from "../../services/signIn.services";
import { actionTypes } from "./userReduceractionTypes";

export const addUser = (token, refreshtoken) => ({
  type: actionTypes.addUser,
  token,
  refreshtoken,
});

export const removeUser = () => {
  return async (dispatch) =>{
    try {
      await getlogout();
      dispatch(removetoken());
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const removetoken = () => ({
  type: actionTypes.removeUser,
});
