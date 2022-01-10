import styled from 'styled-components';
import { WHITE, SHADOW_GREY, MINE_SHAFT, SILVER, GALLERY } from '../../config/constants/styled-vars';


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
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  ${({ isOpen }) => isOpen ? `box-shadow: ${SHADOW_GREY}` : ''};
  ${({ right }) => right ? 'right: 0' : 'left: 0'};
`;

export const Section = styled.div`
  width: 100%;
  cursor: pointer;
  margin: auto 0;
  display: flex;
  align-items: center;
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

export const NoOptions = styled.div`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  color: ${SILVER};
`
