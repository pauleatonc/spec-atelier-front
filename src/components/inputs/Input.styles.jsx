import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Root = styled.div`
  width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
  width: PropTypes.string.isRequired,
};

export const Label = styled.label`
  color: #212121;
  display: block;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: #EEE;
  border: 0;
  border-radius: 21.5px;
  color: #212121;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 11px 23px;
  width: 100%;

  &:active, &:focus {
    outline: 0;
  }

  &::placeholder {
    color: rgba(33, 33, 33, 0.46);
  }
`;
