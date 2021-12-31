import styled from 'styled-components';
import { WHITE } from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: ${({ width }) => width || '100%'};
  min-width: 464px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: ${WHITE};
  padding: 18px;
`;

export const BottonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ContentLogin = styled.span`
  width: 100%;
  height: 100%;
  padding: 32px 40px 80px 40px;
`;
