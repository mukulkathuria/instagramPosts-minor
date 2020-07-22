import { createStore, combineReducers, applyMiddleware } from "redux";
import postsReducer from "./PostsReducer/postsReducer";
import userReducer from "./AuthReducer/userReducer";
import { persistStore ,persistReducer } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session';
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

const persistconfig = {
  key:"root",
  storage:storageSession,
  whitelist:['user']
}

const reducers = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

const persistreduce = persistReducer(persistconfig,reducers)

export const store = createStore(persistreduce, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
