import posts from '../../Data/posts.json';
import { actionType } from './commentReduxactionTypes';
import {addCommenttoid} from './comment.actions';
const initialValue={
    post:[...posts]
}
const commentReducer = (state=initialValue,action) =>{
    switch(action.type){
        case actionType.addComment:
            return {
                ...state,
                post:addCommenttoid(state.post,action.postid,action.value)
            }
        default:
            return state
    }
}
export default commentReducer;