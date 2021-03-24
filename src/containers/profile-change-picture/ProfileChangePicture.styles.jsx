import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_WHITE, COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.section`
  background-color: ${COLOR_WHITE};
  box-shadow: ${({ shadow = true }) => shadow ? '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)' : 'none'};
  display: flex;
  flex-wrap: wrap;
  max-height: 488px;
  width: 514px;
  padding: 28px 27px 38px 37px;
`;

export const Header = styled.header`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Title = styled.span`
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ButtonUploadPicture = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const EditorPicture = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 13px
`;

export const ButtonZoomPicture = styled.button`
  width: 15px;
  cursor: pointer;
  padding: 0;
  appearance: none;
  border-style: none;
  background-color: transparent;
  margin: 0 15px;

  &:active,
  &:focus {
    outline: 0;
  }

  &:disabled, &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    user-select: none;
  }
`;
