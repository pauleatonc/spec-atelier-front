import styled from 'styled-components';
import { COLOR_LIGHTERGREY } from '../config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px 81px;
`;

export const PaddingContainer = styled.div`
  padding: 0 81px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${COLOR_LIGHTERGREY};
`;
