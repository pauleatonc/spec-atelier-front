import styled from 'styled-components';
import { COLOR_LIGHTERGREY } from '../config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px 81px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${COLOR_LIGHTERGREY};
`;

export const ButtonCreateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
