import { actionTypes } from "./userReduceractionTypes";


const initialValue = {
  user: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionTypes.addUser:
      return {
        ...state,
        user: action.token,
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
