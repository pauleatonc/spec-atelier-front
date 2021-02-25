import React from 'react';
import PropTypes from 'prop-types';
import {
  PrimaryButton,
  SecondaryButton,
  DefaultButton,
  GrayButton,
  CancelButton,
  CancelSecondaryButton
} from './Button.styles';

/**
 * The Button's component.
 */
const Button = props => {
  const { variant, ...buttonProps } = props;

  switch (variant) {
    case 'primary':
      return <PrimaryButton {...buttonProps} />;
    case 'secondary':
      return <SecondaryButton {...buttonProps} />;
    case 'gray':
      return <GrayButton {...buttonProps} />;
    case 'cancel':
      return <CancelButton {...buttonProps} />;
    case 'cancel-secondary':
      return <CancelSecondaryButton {...buttonProps} />;
    default:
      return <DefaultButton {...buttonProps} />;
  }
};

Button.defaultProps = {
  disabled: false,
  inverse: false,
  margin: 'initial',
  size: 'md',
  type: 'button',
  variant: 'default',
  width: 'initial',
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  margin: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf(['button']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'default', 'gray', 'cancel', 'cancel-secondary']),
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
