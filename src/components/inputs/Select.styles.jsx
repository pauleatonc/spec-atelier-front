import styled from 'styled-components';
import {
  SILVER,
  MINE_SHAFT,
  ALTO,
  GALLERY,
  MINE_SHAFT_RGB,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

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

export const Section = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${ALTO};
  border-radius: 9px;
  color: ${MINE_SHAFT};
  cursor: pointer;
  display: inline-flex;
  height: 38px;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  overflow: hidden;
  padding: 0 31px 0 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  &:active,
  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: rgba(${MINE_SHAFT_RGB}, 0.46);
  }

  &:disabled {
    background-color: ${ALTO};
    cursor: not-allowed;
  }
`;

export const InputUnderline = styled(Input)`
  border: 0;
  outline: 0;
  min-width: 140px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 2px solid ${SILVER};
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  border-radius: 0;
`;

export const DropIcon = styled.img`
  bottom: 0;
  cursor: pointer;
  margin: auto 0;
  right: 10px;
  position: absolute;
  top: 0;
`;

export const Option = styled.section`
  box-sizing: border-box;
  color: ${MINE_SHAFT};
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  width: 100%;

  &:hover {
    background-color: ${GALLERY};
  }

  &:first-child {
    margin: 6px 0 0;
  }

  &:last-child {
    margin: 0 0 6px;
  }
`;
