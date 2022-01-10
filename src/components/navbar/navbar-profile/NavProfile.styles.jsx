import styled from 'styled-components';
import {
  MINE_SHAFT,
  PRIMARY,
  NAVBAR_HEIGHT,
  WHITE,
  GALLERY,
  SILVER_CHALICE,
  BLACK,
} from '../../../config/constants/styled-vars';

export const ProfileButton = styled.div`
  color: ${({ isOpen }) => (!isOpen ? MINE_SHAFT : PRIMARY)};
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProfileOptions = styled.section`
  position: absolute;
  right: 0;
  display: ${({ show }) => !show && 'none'};
  top: ${NAVBAR_HEIGHT};
  z-index: 2;
`;

export const Option = styled.div`
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
  color: ${MINE_SHAFT};
  :hover {
    color: ${PRIMARY};
  }
  cursor: pointer;
  text-decoration: none;
`;

export const OptionsContent = styled.section`
  width: 260px;
  background-color: ${WHITE};
  box-shadow: 0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12), 0 1px 1px 0 rgba(${BLACK}, 0.14);
`;

export const Separator = styled.div`
  background-color: ${GALLERY};
  height: 1px;
  width: 100%;
`;

export const ProfilePictureContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ProfilePictureImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

export const ContainerNameUser = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const InfoUserName = styled.p`
  font-family: Lato;
  font-size: 14px;
  margin-bottom: 2px;
  color: ${({ gray }) => (gray ? SILVER_CHALICE : MINE_SHAFT)};
`;
