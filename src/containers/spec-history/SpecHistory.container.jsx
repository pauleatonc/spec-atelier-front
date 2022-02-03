import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	onGetChangeHistory,
} from './SpecHistory.actions';

const ChangeHistoryContainer = () => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();
  console.log(specID)

  useEffect(() => {
    dispatch(onGetChangeHistory(specID));
  }, []);


  return (
    <h1>hola</h1>
  )
}

export default ChangeHistoryContainer;
