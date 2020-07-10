import styled from 'styled-components';
import { COLOR_WHITE, SHADOW_GREY } from '../../config/constants/styled-vars';

export const Container = styled.div`
  position: relative;
  ${({ isOpen }) => isOpen ? 'block' : 'inline-block'}
`;

export const Content = styled.div`
  margin-top: 12px;
  position: absolute;
  border: 1px solid #CCC;
  background-color: ${COLOR_WHITE};
  min-width: 160px;
  max-width: 300px;
  padding: 12px 16px;
  z-index: 1;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
  ${({ isOpen }) => isOpen ? `box-shadow: ${SHADOW_GREY}` : ''}
`;