import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  CORAL,
  DUSTY_GRAY,
  SEASHELL_PEACH,
  SILVER,
  WHITE,
} from 'config/constants/styled-vars';

const Button = styled.button`
  background-color: ${({ selected = false }) =>
    selected ? SEASHELL_PEACH : WHITE};
  border: 1px solid ${({ selected = false }) => (selected ? CORAL : SILVER)};
  border-radius: 18px;
  color: ${({ selected = false }) => (selected ? CORAL : DUSTY_GRAY)};
  cursor: ${({ disabled = false }) => (disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  height: 26px;
  justify-content: center;
  letter-spacing: 0.86px;
  line-height: 2;
  margin: 5px;
  padding: 0 13px;
  white-space: nowrap;
  &:active,
  &:focus {
    outline: 0;
  }
`;

Button.defaultProps = {
  disabled: false,
  selected: false,
};
Button.propTypes = {
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};

export default Button;
