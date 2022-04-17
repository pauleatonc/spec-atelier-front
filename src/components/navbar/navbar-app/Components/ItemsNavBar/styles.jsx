import styled from 'styled-components';
import {
  MINE_SHAFT,
  PRIMARY,
  MEDIA_QUERY_STANDAR_MEDIUM,
} from '../../../../../config/constants/styled-vars';

export const ItemsContainer = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: 9px;
  height: 100%;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ active }) => (active ? PRIMARY : MINE_SHAFT)};
  height: 100%;
  margin: 0 4px;
  display: flex;
  min-width: 90px;
  align-items: center;
  justify-content: center;
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
  :hover {
    color: ${PRIMARY};
  }
`;

export const ItemText = styled.span`
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
`;

export const UnderLine = styled.span`
  width: 100%;
  height: 3px;
  margin: 8px 2px 4px 2px;
  border-radius: 1.5px;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  background-color: ${({ active }) => active && PRIMARY};
`;

export const ProfileBurgerMenuContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
  align-items: center;
`;
