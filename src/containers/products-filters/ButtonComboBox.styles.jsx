import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Container = styled.div`
  position: relative;
  ${({ isOpen }) => isOpen ? 'block' : 'inline-block'}
  >div {
    display: block;
  }
`;

export const Content = styled.div`
  position: absolute;
  border: 1px solid #CCC;
  background-color: ${COLOR_WHITE};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
`;