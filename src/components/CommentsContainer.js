import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from '../redux/comments/ActionComments';

const CommentsContainer = () => {
    const apiData = useSelector((state) => state.reducerComments.comments);
    const dispatchComment = useDispatch()

  return (
    <div>

    </div>
  )
}

export default CommentsContainer