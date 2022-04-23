import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from 'components/basics/Snackbar';
import { onHideAlertSuccess } from './Alert.actions';

/** The Alert's container */
const Alert = () => {
  const { message, show } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(onHideAlertSuccess());

  return (
    <Snackbar show={show} onClose={handleClose}>
      {message}
    </Snackbar>
  );
};

export default Alert;
