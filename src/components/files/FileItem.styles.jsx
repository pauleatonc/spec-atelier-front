import styled from 'styled-components';
import { ALTO, MINE_SHAFT, SILVER } from '../../config/constants/styled-vars';

export const Container = styled.div`
  min-width: 185px;
  height: 38px;
  border-radius: 9px;
  border: solid 1px ${ALTO};
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
`;

export const Name = styled.div`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
`;

export const Size = styled.div`
  font-size: 10px;
  letter-spacing: 0.83px;
  color: ${SILVER};
`;

export const Buttons = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;
