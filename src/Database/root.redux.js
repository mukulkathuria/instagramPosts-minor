import { createStore ,combineReducers ,applyMiddleware} from 'redux';
import postsReducer from './PostsReducer/postsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [logger];
const reducers = combineReducers({posts:postsReducer});
const store = createStore(reducers,applyMiddleware(...middlewares,thunk));

export default store;