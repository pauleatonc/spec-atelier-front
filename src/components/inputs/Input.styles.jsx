import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  SILVER,
  WHITE,
  MINE_SHAFT,
  GALLERY,
  ALTO,
  MINE_SHAFT_RGB,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
  width: PropTypes.string.isRequired,
};

export const Label = styled.label`
  color: ${MINE_SHAFT};
  display: block;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 18px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${GALLERY};
  border: 0;
  border-radius: 21.5px;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 11px 23px;
  width: 100%;

  &:active,
  &:focus {
    outline: 0;
    color: ${MINE_SHAFT};
  }

  &::placeholder {
    color: rgba(${MINE_SHAFT_RGB}, 0.46);
  }
`;

export const InputUnderline = styled.input`
  border: 0;
  outline: 0;
  min-width: 100px;
  width: 100%;
  display: flex;
  padding: 10px ${({ textAlign }) => (textAlign === 'right' ? '0' : '10px')}
    10px ${({ textAlign }) => (textAlign === 'right' ? '10px' : '0px')};
  flex: 1;
  border-bottom: 1px solid
    ${({ colorUnderline }) => colorUnderline || SILVER};
  font-family: Lato;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.17px;
  color: ${MINE_SHAFT};
  background-color: ${WHITE};
  border-radius: 0;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  &:active,
  &:focus {
    outline: 0;
    color: ${MINE_SHAFT};
  }
`;

export const InputForm = styled.input`
  background-color: transparent;
  height: 40px;
  border: 1px solid ${ALTO};
  outline: 0;
  min-width: 100px;
  width: 100%;
  padding: 0 31px 0 21px;
  font-family: Lato;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '12px')};
  letter-spacing: 1.17px;
  border-radius: 9px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
