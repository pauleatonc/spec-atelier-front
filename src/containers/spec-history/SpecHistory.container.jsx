import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { onGetChangeHistory } from './SpecHistory.actions';

const ChangeHistoryContainer = () => {
  const dispatch = useDispatch();
  const { id: specID } = useParams();

  useEffect(() => {
    dispatch(onGetChangeHistory(specID));
  }, []);

  return <h1>hola</h1>;
};

export default ChangeHistoryContainer;
