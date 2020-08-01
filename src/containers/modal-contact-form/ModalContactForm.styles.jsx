import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: 30%;
  min-width: 464px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: ${COLOR_WHITE};
  padding: 18px;
`;

export const  BottonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ButtonClose = styled.span`
  margin: 10px 12px 0 auto;
  cursor: pointer;
  outline: none;
`;