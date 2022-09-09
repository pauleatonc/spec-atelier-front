import styled from 'styled-components';
import {
  MORNING_GLORY,
  PUERTO_RICO,
} from '../../../config/constants/styled-vars';

export const LinkSeeAll = styled.a`
  margin-top: 16px;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: right;
  text-decoration: none;
  float: right;
  margin-left: 43px;
  color: ${({ loadingNoti }) => (loadingNoti ? MORNING_GLORY : PUERTO_RICO)};
  pointer-events: ${({ loadingNoti }) => (loadingNoti ? 'none' : 'initial')};
  font-weight: bold;
  cursor: pointer;
`;
