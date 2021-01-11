import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_LIGHTERGREY,
  COLOR_LIGHTGREY,
  COLOR_PRIMARY,
  COLOR_WHITE,
  VIEW_HEADER_HEIGHT,
} from '../../config/constants/styled-vars';

const position_bottom = 30;

export const Container = styled.section`
  width: 100%;
  position: relative;
  height: ${VIEW_HEADER_HEIGHT + position_bottom}px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 60px;
  bottom: 48px;
`;

export const Header = styled.img`
  height: ${VIEW_HEADER_HEIGHT}px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfilePhoto = styled.div`
  width: 191px;
  height: 190px;
  padding: 1px 1px 2px 2px;
  border: solid 1px #ffffff;
  position: absolute;
  bottom: -${position_bottom}px;
  background-color: ${COLOR_WHITE};
  left: 50%;
  margin-left: -95px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Photo = styled.img`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IconPhoto = styled.div`
  position: absolute;
  bottom: 22%;
  right: 4%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_GREY};
  cursor: pointer;
`;
export const ContentEdit = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export const Row = styled.div`
  display: flex;
`;

export const ProfileName = styled.div`
  width: 167px;
  height: 24px;
  margin: 12px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.25px;
  color: ${COLOR_BLACK};
`

export const ProfileCompany = styled.div`
  height: 22px;
  margin: 8px 0;
  font-family: Lato;
  -webkit-text-stroke: 1px ${COLOR_GREY};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.13px;
  color: ${COLOR_LIGHTGREY};
  white-space: nowrap;
`;

export const ProfileCity = styled.div`
  height: 22px;
  margin: 2px 0;
  font-family: Lato;
  -webkit-text-stroke: 1px ${COLOR_GREY};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.13px;
  color: ${COLOR_LIGHTGREY};
  white-space: nowrap;
`;

export const Item = styled.div`
  color: ${COLOR_PRIMARY};
  height: 100%;
  margin: 0;
  display: flex;
  min-width: 100px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
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
  width: 100px;
  height: 3px;
  margin: 8px 2px 4px 2px;
  border-radius: 1.5px;
  background-color: ${COLOR_PRIMARY};
`;

export const InputText = styled.div`
  white-space: nowrap;
  padding: 4px 16px 8px 16px;
  border: 0; 
  outline: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${COLOR_LIGHTGREY};
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
  border-radius: 0;
  width: 240px;
`
export const DropIcon = styled.img`
  cursor: pointer;
`;

export const TextValue = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`