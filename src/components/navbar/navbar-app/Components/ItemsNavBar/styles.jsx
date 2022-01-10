import styled from 'styled-components';
import {
  MINE_SHAFT,
  PRIMARY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
} from '../../../../../config/constants/styled-vars';

export const ItemsContainer = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
  ${MEDIA_QUERY_MEDIUM} {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ active }) => (active ? PRIMARY : MINE_SHAFT)};
  height: 100%;
  margin: 0 4px;
  display: flex;
  min-width: 100px;
  align-items: center;
  jutify-content: flex-end;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ItemText = styled.span`
  height: 18px;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const UnderLine = styled.span`
  width: 100%;
  height: 3px;
  margin: 8px 2px 4px 2px;
  border-radius: 1.5px;
  background-color: ${({ active }) => active && PRIMARY};
`;
