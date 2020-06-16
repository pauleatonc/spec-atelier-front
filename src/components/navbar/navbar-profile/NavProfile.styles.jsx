import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_PRIMARY,
  NAVBAR_HEIGHT,
  COLOR_WHITE,
} from '../../../config/constants/styled-vars';

export const ProfileButton = styled.div`
  width: 100px;
  color: ${({ isOpen }) => !isOpen ? COLOR_BLACK : COLOR_PRIMARY};
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
  background-color: ${COLOR_WHITE};
  display: flex;
  flex: 1;
  align-items: center;
  padding: 30px;
  color: ${COLOR_BLACK};
  :hover {
    color: ${COLOR_PRIMARY}
  }
  cursor: pointer;
  text-decoration: none;
`;

export const OptionsContent = styled.section`
  width: 260px;
  background-color: ${COLOR_WHITE};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
`;

export const Separator = styled.div`
  background-color: #b3b3b3;
  height: 1px;
  width: 100%;
`;