import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ selected = false }) => selected ? '#FFF6F2' : '#FFF'};
  border: 1px solid ${({ selected = false }) => selected ? '#FF7E45' : '#CCC'};
  border-radius: 18px;
  color: ${({ selected = false }) => selected ? '#FF7E45' : '#9C9C9C'};
  cursor: pointer;
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
  selected: false,
};
Button.propTypes = {
  selected: PropTypes.bool,
};

export default Button;
