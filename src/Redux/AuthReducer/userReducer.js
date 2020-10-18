import { getRefreshToken } from "./userReducer.utils";
import { actionTypes } from "./userReduceractionTypes";

const initialValue = {
  user: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionTypes.addUser:
      return {
        ...state,
        user: getRefreshToken(state.user, action.token, action.refreshtoken),
      };
    case actionTypes.removeUser:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default userReducer;
