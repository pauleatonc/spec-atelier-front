import React from 'react';
import PropTypes from 'prop-types';

/**
 * The SnackBar's component.
 */
const SnackBar = props => {
  const { message } = props;

  return (
    <div className="snack-bar">
      {message}
    </div>
  );
};

SnackBar.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SnackBar;
