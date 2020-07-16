import { createStore ,combineReducers ,applyMiddleware} from 'redux';
import commentReducer from './CommentReducer/commentReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [logger];
const reducers = combineReducers({postComment:commentReducer});
const store = createStore(reducers,applyMiddleware(...middlewares,thunk));

export default store;