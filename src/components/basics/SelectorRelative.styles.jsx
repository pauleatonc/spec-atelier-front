import styled from 'styled-components';
import {
  WHITE,
  SHADOW_GREY,
  SILVER,
  GALLERY,
  PUERTO_RICO,
  PUERTO_RICO_BACKGROUND,
} from '../../config/constants/styled-vars';

export const Container = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
`;

export const Content = styled.div`
  position: absolute;
  border: 1px solid ${SILVER};
  background-color: ${WHITE};
  min-width: 160px;
  min-height: 30px;
  z-index: 3;
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: ${({ width }) => width || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  ${({ showIconInfo }) => showIconInfo && 'overflow: visible'};
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

export const ContentOption = styled.div`
  display: block;
  padding: 0 9px;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.8' : 'initial')};
  &:hover {
    background-color: ${({ backgroundPuertoRico, disabled }) =>
      backgroundPuertoRico && !disabled ? PUERTO_RICO_BACKGROUND : GALLERY};
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  &:hover {
    ${({ hoverPrimaryColor }) => hoverPrimaryColor && `color: ${PUERTO_RICO}`};
  }
`;

export const ContentUser = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
`;

export const NameSection = styled.option`
  padding-left: 6px;
  display: flex;
  align-items: center;
`;

export const OptionNameSection = styled.option`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  font-size: 12px;
`;

export const NoOptions = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  padding: 10px 23px;
  color: ${SILVER};
`;

export const IconInfo = styled.i`
  font-size: 13px;
`;
