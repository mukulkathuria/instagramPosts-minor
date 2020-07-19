import { actionTypes } from "./userReduceractionTypes";
import { verifyUser } from "./userReducerActions";

const initialValue = {
  user: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionTypes.addUser:
      return {
        ...state,
        user: verifyUser(action.token),
      };
      case actionTypes.removeUser:
        return{
          ...state,
          user:null
        }
    default:
      return state;
  }
};
export default userReducer;
