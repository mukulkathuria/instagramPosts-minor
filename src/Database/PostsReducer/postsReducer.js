import posts from "../../Data/posts.json";
import { actionType } from "./postsActionTypes";
import { addCommenttoid, addLiketoid ,removeLiketoid} from "./posts.actions";
const initialValue = {
  post: [...posts],
};
const postsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionType.addComment:
      return {
        ...state,
        post: addCommenttoid(state.post, action.postid, action.value),
      };
    case actionType.addLike:
      return {
        ...state,
        post: addLiketoid(state.post, action.postid),
      };
      case actionType.removeLike:
          return{
              ...state,
              post:removeLiketoid(state.post,action.postid)
          }
    default:
      return state;
  }
};
export default postsReducer;
