import styled from 'styled-components';
import {
  WHITE,
  SHADOW_GREY,
  MINE_SHAFT,
  SILVER,
  GALLERY,
  PUERTO_RICO,
} from '../../config/constants/styled-vars';

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
`;

export const Content = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  margin-top: 8px;
  position: absolute;
  border: 1px solid ${SILVER};
  background-color: ${WHITE};
  min-width: 160px;
  min-height: 30px;
  width: ${({ width }) => width || '100%'};
  padding: 4px 4px;
  z-index: 1;
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${({ isOpen }) => (isOpen ? `box-shadow: ${SHADOW_GREY}` : '')};
  ${({ right }) => (right ? 'right: 0' : 'left: 0')};
`;

export const Section = styled.div`
  width: 100%;
  cursor: pointer;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 23px;
  width: 100%;
  &:hover {
    background-color: ${GALLERY};
    p,
    i {
      ${({ hoverPrimaryColor }) =>
        hoverPrimaryColor && `color: ${PUERTO_RICO}`};
    }
  }
  &:first-child {
    margin: 6px 0 0;
  }
  &:last-child {
    margin: 0 0 6px;
  }
`;

export const OptionLabel = styled.p`
  color: ${MINE_SHAFT};
  letter-spacing: 0.86px;
  font-family: Lato;
  font-size: 12px;
`;

export const IconInfo = styled.i`
  font-size: 13px;
`;

export const NoOptions = styled.div`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  color: ${SILVER};
`;
