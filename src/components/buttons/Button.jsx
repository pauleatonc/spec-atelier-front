import React from 'react';
import PropTypes from 'prop-types';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import {
  PrimaryButton,
  SecondaryButton,
  DefaultButton,
  GrayButton,
  CancelButton,
  CancelSecondaryButton,
  CancelNotificationButton,
} from './Button.styles';

/** The Button's component */
const Button = props => {
  const { variant, ...buttonProps } = props;
  const BUTTONS = {
    [VARIANTS_BUTTON.PRIMARY]: <PrimaryButton {...buttonProps} />,
    [VARIANTS_BUTTON.SECONDARY]: <SecondaryButton {...buttonProps} />,
    [VARIANTS_BUTTON.GRAY]: <GrayButton {...buttonProps} />,
    [VARIANTS_BUTTON.CANCEL]: <CancelButton {...buttonProps} />,
    [VARIANTS_BUTTON.CANCEL_SECONDARY]: <CancelSecondaryButton {...buttonProps} />,
    [VARIANTS_BUTTON.CANCEL_SECONDARY_NOTIFICATION]: <CancelNotificationButton {...buttonProps} />,
  }

  return BUTTONS[variant] || <DefaultButton {...buttonProps} />;
};

Button.defaultProps = {
  disabled: false,
  inverse: false,
  margin: 'initial',
  fontSize: '16px',
  height: '34px',
  type: 'button',
  variant: 'default',
  width: 'initial',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  inverse: PropTypes.bool,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.oneOf(['button']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'default', 'gray', 'cancel', 'cancel-secondary']),
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
