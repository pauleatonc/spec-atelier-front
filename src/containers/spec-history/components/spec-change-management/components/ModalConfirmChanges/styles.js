import styled from 'styled-components';
import {
  MINE_SHAFT,
  WHITE,
} from '../../../../../../config/constants/styled-vars';

export const Container = styled.div`
  background-color: ${WHITE};
  width: 360px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;
`;

export const ContainerTextBody = styled.div`
  margin-bottom: 27px;
`;

export const TextBody = styled.p`
  font-size: 14px;
  color: ${MINE_SHAFT};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
