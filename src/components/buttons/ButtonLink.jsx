import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonIcon, ButtonText, TextContainer } from './ButtonLink.styles';
import { useState } from 'react';

const mapTypesToName = {
  address: 'Dirección',
  web: 'Website', 
  phone: 'Teléfono',
  default: '',
};

/**
 * The ButtonLink's component.
 */
const ButtonLink = props => {
  const { variant, type, children, to, target, ...buttonProps } = props;
  const [showAsInfo, setShowAsInfo] = useState(false);
  const toggle = () => setShowAsInfo(!showAsInfo);
  return (
    <ButtonContainer variant={variant} {...buttonProps} >
      <ButtonIcon
        type="button"
        href={to}
        value={to}
        target={target}
        rel="noreferrer noopener"
        type={type}
      >
      </ButtonIcon>
      <TextContainer>
        <ButtonText
          type="button"
          href={to}
          value={to}
          target={target}
          rel="noreferrer noopener"
          show={showAsInfo}
          onClick={toggle}
        >
          {children}
        </ButtonText>
        <ButtonText
          type="button"
          href={to}
          value={to}
          target={target}
          rel="noreferrer noopener"
          show={!showAsInfo}
          onClick={toggle}
        >
          {mapTypesToName[type]}
        </ButtonText>
      </TextContainer>
    </ButtonContainer>
  );
};

ButtonLink.defaultProps = {
  disabled: false,
  type: 'none',
  variant: 'default',
  width: 'initial',
  target: '_self',
  to: '/',
  children: null,
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['address', 'web', 'phone', 'none', 'twitter', 'facebook']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'default', 'gray', 'disabled']),
  width: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
};

export default ButtonLink;
