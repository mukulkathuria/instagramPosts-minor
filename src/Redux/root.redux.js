import { createStore, combineReducers, applyMiddleware } from "redux";
import postsReducer from "./PostsReducer/postsReducer";
import userReducer from "./AuthReducer/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger];
const reducers = combineReducers({ posts: postsReducer, user: userReducer });
const store = createStore(reducers, applyMiddleware(...middlewares, thunk));

export default store;
