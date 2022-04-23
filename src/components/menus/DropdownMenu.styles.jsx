import styled from 'styled-components';
import { GALLERY, MINE_SHAFT } from 'config/constants/styled-vars';

export const Root = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  min-height: 24px;
  width: fit-content;
`;

export const Text = styled.span`
  align-items: center;
  color: ${MINE_SHAFT};
  cursor: pointer;
  display: inline-flex;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 5px 0 0;
`;

export const DropdownIcon = styled.img`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
`;

export const Option = styled.section`
  box-sizing: border-box;
  color: ${MINE_SHAFT};
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  width: 100%;
  &:hover {
    background-color: ${GALLERY};
  }
  &:first-child {
    margin: 6px 0 0;
  }
  &:last-child {
    margin: 0 0 6px;
  }
`;
