import styled from 'styled-components';
import {
  NAVBAR_HEIGHT,
  MINE_SHAFT,
  WHITE,
  PRIMARY,
  Z_INDEX_NAVBAR,
  SILVER_CHALICE,
  BLACK,
  MEDIA_QUERY_STANDAR_MEDIUM,
  WHITE_RGB,
  DOVE_GRAY,
} from '../../../config/constants/styled-vars';

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  align-items: center;
  background-color: ${({ transparent }) => transparent ? 'transparent' : WHITE};
  display: flex;
  height: ${NAVBAR_HEIGHT};
  position: ${({ fixed }) => fixed && 'fixed'};
  width: 100%;
  transition: all 0.2s ease-in-out;
  color: ${({ transparent }) => (transparent ? MINE_SHAFT : WHITE)};
  box-shadow: 0 2px 4px 0 rgba(${BLACK}, 0.26);
  z-index: ${Z_INDEX_NAVBAR};
`;

export const NavbarContent = styled.div`
  align-items: center;
  color: ${MINE_SHAFT};
  display: flex;
  padding-left: 45px;
  padding-right: 20px;
  height: 100%;
  flex: 1;
`;

export const LogoContent = styled.section`
  align-items: center;
  display: flex;
`;

export const ImgLogo = styled.img`
  width: 100%;
`;

export const ItemsContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ transparent, active }) => {
    if (active) return PRIMARY;
    if (transparent) return WHITE;
    return MINE_SHAFT;
  }};
  height: 40px;
  margin: 4px 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ItemText = styled.span`
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const LinksContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

export const LinkItem = styled.div`
  align-items: center;
  color: ${WHITE};
  display: flex;
  font-size: 16px;
  justify-content: center;
  margin: 8px 0px;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  outline: none;
  padding: 8px 16px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const LinkRegister = styled(LinkItem)`
  border-radius: 20px;
  background-color: ${PRIMARY};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${WHITE};
  width: 130px;
  :hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(${WHITE_RGB}, .5), 0 0 20px rgba(${WHITE_RGB}, .2);
    outline-color: red;
    outline-offset: 15px;
    text-shadow: 1px 1px 2px ${DOVE_GRAY}; 
  }
`;

export const LinkLogin = styled(LinkItem)`
  margin-left: 16px;
  border-radius: 20px;
  border: 1px solid ${({ transparentize }) => (transparentize ? WHITE : SILVER_CHALICE)};
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  background-color: ${({ transparentize }) => transparentize ? 'transparent' : WHITE};
  color: ${({ transparentize }) => (transparentize ? WHITE : SILVER_CHALICE)};
`;

export const LoginRegisterBurgerMenuContent = styled.div`
  display: none;
  align-self: center;

  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    display: flex;
  }
`;
