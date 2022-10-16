import styled from 'styled-components';
import { MINE_SHAFT } from '../../config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px;
`;

export const IconContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px;
`;

export const Icon = styled.img`
  height: 98px;
  max-width: 98px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: ${MINE_SHAFT};
`;

export const Text = styled.span`
  padding: 2px;
  margin: 2px;
`;

export const ButtonSection = styled.section`
  margin: 16px 0 38px;
  display: flex;
  flex: 1;
  justify-content: ${({ justify }) => justify || 'flex-star'};
`;
