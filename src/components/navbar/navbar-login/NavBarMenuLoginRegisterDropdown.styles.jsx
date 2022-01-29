import styled from "styled-components";
import {
  DARKESTGREY,
  MEDIA_QUERY_MAX,
  MINE_SHAFT,
  NAVBAR_HEIGHT,
  PRIMARY, SHADOW_GREY,
  SILVER,
  SILVER_CHALICE,
  WHITE,
  Z_INDEX_NAVBAR
} from "../../../config/constants/styled-vars";

export const SectionPictureMenu = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-self: center
`;

export const PictureLoginRegisterContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${DARKESTGREY};
  cursor: pointer;

  ${MEDIA_QUERY_MAX} {
      display: none;
    }
`;

export const MenuLoginRegisterDropdownContainer = styled.div`
  margin: 0 10px 0 20px;
  heigt: ${NAVBAR_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const MenuLoginRegisterDropdownContent = styled.section`
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

export const LinksContainer = styled.section`
  display: grid;
  width: 100%;
  align-items: center;
`;

export const LinkItem = styled.div`
  align-items: center;
  height: 60px;
  font-size: 14px;
  letter-spacing: 1px;
  justify-content: flex-start;
  padding: 30px;
  font-size: 16px;
  text-align: center;
  outline: none;
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
  display:flex;
  background-color: ${PRIMARY};
  color: ${WHITE};
  :hover {
    color: ${MINE_SHAFT};
  }
`;

export const LinkLogin = styled(LinkItem)`
  display:flex;
  background-color: ${WHITE};
  color: ${SILVER_CHALICE};
  :hover {
    color: ${PRIMARY};
  }
`;
