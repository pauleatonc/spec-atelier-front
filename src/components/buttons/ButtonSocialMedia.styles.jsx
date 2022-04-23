import styled from 'styled-components';
import { ICON_FACEBOOK, ICON_TWITTER } from 'assets/Images';
import {
  MINE_SHAFT,
  PRIMARY,
  SECONDARY,
  DARKESTGREY,
  TERTIARY,
} from 'config/constants/styled-vars';

const mapVariantsToColors = {
  default: MINE_SHAFT,
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
  disabled: DARKESTGREY,
};

const mapTypeToIcon = {
  facebook: ICON_FACEBOOK,
  twitter: ICON_TWITTER,
};

export const ButtonContainer = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  color: ${({ variant }) => mapVariantsToColors[variant]};
  outilne: none;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  height: 18px;
  width: 18px;
  margin: 2px 8px;
  background: url(${({ type }) => (type ? mapTypeToIcon[type] : '')});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    color: ${({ disabled }) =>
      disabled ? mapVariantsToColors.disabled : mapVariantsToColors.primary};
  }
`;
