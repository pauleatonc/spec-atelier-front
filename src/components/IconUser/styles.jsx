import styled from 'styled-components';
import {
  COLOR_WHITE,
  COLOR_DARKGREY,
  COLOR_LIGHTGREY,
} from '../../config/constants/styled-vars';

export const Container = styled.div`
  background-color: ${({ waiting = false }) =>
    waiting ? COLOR_LIGHTGREY : COLOR_DARKGREY};
  border-radius: ${({ size = 24 }) => `${size / 2}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size = 24 }) => `${size}px`};
  width: ${({ size = 24 }) => `${size}px`};
  z-index: ${({ zIndex = 1 }) => `${zIndex}`};
  margin-left: ${({ horizontalList }) => (horizontalList ? `-5px` : `0`)};
  border: 0.5px solid ${COLOR_WHITE};
`;

export const ImageProfile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ size = 24 }) => `${size / 2}px`};
`;

export const LetterNameUser = styled.span`
  color: #ffffff;
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  text-align: center;
  margin-right: -1px;
  line-height: 24px;
`;
