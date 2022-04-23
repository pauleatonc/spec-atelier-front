import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonIcon } from './ButtonSocialMedia.styles';

/** The ButtonSocialMedia's component */
const ButtonSocialMedia = (props) => {
  const { variant, type, to, ...buttonProps } = props;

  return (
    <ButtonContainer
      {...buttonProps}
      variant={variant}
      target="_blank"
      href={to}
    >
      <ButtonIcon type={type} />
    </ButtonContainer>
  );
};

ButtonSocialMedia.defaultProps = {
  disabled: false,
  variant: 'default',
  width: 'initial',
  target: '_self',
  to: '/',
  children: null,
};

ButtonSocialMedia.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['twitter', 'facebook']).isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'gray',
    'disabled',
  ]),
  width: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
};

export default ButtonSocialMedia;
