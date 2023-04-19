import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from './type';
import axios from 'axios';

export const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS
  }
}

export const loadApiCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const loadApiCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error
  }
}

export const apiCall = () => {
  return (dispatch) => {

    dispatch(loadApiComments())

    axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      dispatch(loadApiCommentsSuccess(response.data))
    })
    .catch((error) => {
      dispatch(loadApiCommentsError(error.message))
    })
  }
}