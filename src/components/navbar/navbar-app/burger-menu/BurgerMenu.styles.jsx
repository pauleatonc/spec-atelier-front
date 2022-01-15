import styled from "styled-components";
import {
  DARKESTGREY,
  MEDIA_QUERY_STANDAR_MEDIUM,
  MINE_SHAFT,
  NAVBAR_HEIGHT,
  PRIMARY,
  SHADOW_GREY, SILVER,
  WHITE,
  Z_INDEX_NAVBAR
} from "../../../../config/constants/styled-vars";

export const BurgerMenuContainer = styled.div`
  margin: 12px;
  heigt: ${NAVBAR_HEIGHT};
  display: flex;
  align-self: center;
`;

export const BurgerMenuContent = styled.section`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${WHITE};
  box-shadow: ${SHADOW_GREY};
  border: 1px solid ${SILVER};
  position: absolute;
  top: ${NAVBAR_HEIGHT};
  right: 0;
  width: 260px;
  transition: right 0.3s linear;
  z-index: ${Z_INDEX_NAVBAR};
  display: ${props => (props.open ? 'flex' : 'none')};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;  
  height: 60px;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  color: ${MINE_SHAFT};
  color: ${({ active }) => (active ? PRIMARY : MINE_SHAFT)};
  :hover {
    color: ${PRIMARY};
  }
`;

export const BurgerMenuButton = styled.i`
  border: none;
  font-size: 28px;
  color: ${DARKESTGREY};
  cursor: pointer;
  display:none;

  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    display: flex;
  }
`;

export const ItemText = styled.div`
  height: 60px;
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  background-color: ${WHITE};
  display: flex;
  flex: 1;
  align-items: center;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
`;
