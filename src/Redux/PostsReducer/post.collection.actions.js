import {  actionType } from "./postsActionTypes";
import axios from "axios";
import { baseurl } from "../../Data/baseUrl.json";

const Url = baseurl + "/posts";

export const fetchCollectionStart = () => ({
  type: actionType.fetchcollectionstart,
});

export const fetchCollectionSuccess = (collections) => ({
  type: actionType.fetchcollectionsucess,
  payload: collections,
});

export const fetchCollectionfailure = (errorMessage) => ({
  type: actionType.fetchcollectionfailure,
  payload: errorMessage,
});

export const fetchCollectionAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionStart());
    try {
      const { data } = await axios.get(Url);
      console.log(data);
      dispatch(fetchCollectionSuccess(data));
    } catch (err) {
      dispatch(fetchCollectionfailure(err.response.data));
    }
  };
};
