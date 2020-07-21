import { actionType } from "./postsActionTypes";
import {
  addCommenttoid,
  addLiketoid,
  removeLiketoid,
  removeCommenttoid,
} from "./posts.action.utils";

const initialValue = {
  post: null,
  isFetching: false,
  errorMessage: undefined,
};
const postsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionType.fetchcollectionstart:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.fetchcollectionsucess:
      return {
        ...state,
        isFetching: false,
        post: action.payload,
      };
    case actionType.fetchcollectionfailure:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case actionType.addComment:
      return {
        ...state,
        post: addCommenttoid(
          state.post,
          action.postid,
          action.value,
          action.username,
          action.commid,
        ),
      };
    case actionType.removeComment:
      return {
        ...state,
        post: removeCommenttoid(state.post, action.postid, action.commentid),
      };
    case actionType.addLike:
      return {
        ...state,
        post: addLiketoid(state.post, action.postid, action.username),
      };
    case actionType.removeLike:
      return {
        ...state,
        post: removeLiketoid(state.post, action.postid, action.username),
      };
    default:
      return state;
  }
};
export default postsReducer;
