import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, ButtonIcon, ButtonText, TextContainer } from './ButtonLink.styles';


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
  const showInfo = () => setShowAsInfo(true);
  
  return (
    <ButtonContainer variant={variant} {...buttonProps} >
      <ButtonIcon
        type={type || "button"}
        onClick={toggle}
       />
      <TextContainer>
        <ButtonText
          type="button"
          href={to}
          value={to}
          target={target}
          rel="noreferrer noopener"
          show={showAsInfo}
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
          onClick={showInfo}
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
