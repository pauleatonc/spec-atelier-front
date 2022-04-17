import styled from 'styled-components';
import {
  HEX_BLACK,
  BLACK_OPACITY,
  BOULDER,
  PRIMARY,
  WHITE,
  SILVER_CHALICE,
  SILVER,
  DOVE_GRAY,
  PUERTO_RICO,
  TURQUOISE,
  RED,
  MORNING_GLORY,
  PUERTO_RICO_BACKGROUND,
} from '../../config/constants/styled-vars';

export const Option = styled.div`
  height: 60px;
  font-size: 12px;
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
  color: ${HEX_BLACK};
  :hover {
    color: ${PRIMARY};
  }
  cursor: pointer;
  text-decoration: none;
`;

export const OptionsContent = styled.section`
  height: 327px;
  overflow: overlay;
  background-color: ${WHITE};
  box-shadow: 0 1px 3px 0 ${BLACK_OPACITY}, 0 2px 1px -1px ${BLACK_OPACITY},
    0 1px 1px 0 ${BLACK_OPACITY};
  &::-webkit-scrollbar {
    width: 13px;
    height: 120px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    border: 3px ${BOULDER};
    background: ${BOULDER};
    border-right: 6px transparent solid;
  }
`;

export const Separator = styled.div`
  background-color: ${SILVER};
  height: 1px;
`;

export const ProfilePictureContainer = styled.div`
  margin-left: 27px;
  padding-bottom: 36px;
  padding-right: 4%;
  padding-top: 30px;
  height: 30px;
  width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ProfilePictureImage = styled.img`
  width: 59.8px;
  border-radius: 33px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

export const ContainerNameUser = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 23px;
`;

export const InfoUserName = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
  color: ${({ gray }) => (gray ? SILVER_CHALICE : HEX_BLACK)};
  b {
    font-weight: bold;
    color: ${DOVE_GRAY};
  }
`;

export const TitleHeader = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
  text-align: left;
`;

export const LinkHeader = styled.a`
  font-size: 12px;
  margin-bottom: 2px;
  text-align: right;
  color: ${PUERTO_RICO};
  text-decoration: none;
  float: right;
`;

export const ListItem = styled.div`
  padding-top: 23px;
  padding-bottom: 25px;
  display: flex;
  background-color: ${({ watchedStatus }) =>
    watchedStatus ? 'none' : PUERTO_RICO_BACKGROUND};
`;

export const ContentActions = styled.div`
  display: flex;
`;

export const ContentPoint = styled.div`
  padding-right: 10px;
`;

export const NewPoint = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${TURQUOISE};
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  z-index: 2;
  float: left;
  margin-right: -22px;
`;

export const ActionPerformed = styled.label`
  margin-top: 16px;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 2px;
  text-align: left;
  color: ${BOULDER};
`;

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

export const UndoSpan = styled.span`
  margin-top: 16px;
  font-size: 12px;
  margin-bottom: 2px;
  text-align: right;
  text-decoration: none;
  float: right;
  margin-left: 53px;
  cursor: pointer;
  color: ${({ loadingNoti }) => (loadingNoti ? MORNING_GLORY : PUERTO_RICO)};
  pointer-events: ${({ loadingNoti }) => (loadingNoti ? 'none' : 'initial')};
`;

export const CountNoti = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${RED};
  color: ${WHITE};
  position: absolute;
  z-index: 1;
  border-radius: 21px;
  font-size: 11px;
  text-align: center;
  margin-top: -14px;
  margin-left: 16px;
  padding-top: 2px;
  font-weight: bold;
`;

export const ContentPrimary = styled.div``;

export const LoadingNoti = styled.label`
  color: ${BOULDER};
  text-align: center;
`;
