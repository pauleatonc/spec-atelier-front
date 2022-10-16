import styled from 'styled-components';
import { ALTO } from '../../config/constants/styled-vars';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  visibility: hidden;
`;

export const Content = styled.div`
  position: relative;
`;

export const BlockDotsIcon = styled.img`
  cursor: pointer;
  position: relative;
  z-index: 100;
  top: 3px;
  user-select: none;
  border-radius: 50%;
  right: ${({ right = '-430px' }) => right};
  &:hover {
    background-color: ${ALTO};
    transition: background-color 1s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;
