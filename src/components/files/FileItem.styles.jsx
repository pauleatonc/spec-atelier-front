import styled from 'styled-components';
import { COLOR_BLACK, COLOR_LIGHTGREY } from '../../config/constants/styled-vars';

export const Container = styled.div`
  min-width: 185px;
  height: 38px;
  border-radius: 9px;
  border: solid 1px #d6d6d6;
  display: flex;
  padding: 6px 12px;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  height: 24px;
  width: 24px;
`;

export const InfoContainer = styled.div`
  diplay: flex;
  flex-direction: column;
`

export const Name = styled.div`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;

export const Size = styled.div`
  font-size: 10px;
  letter-spacing: 0.83px;
  color: ${COLOR_LIGHTGREY};
`;

export const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Delete = styled.button`
  D
`

export const Edit = styled.button`
  E
`
