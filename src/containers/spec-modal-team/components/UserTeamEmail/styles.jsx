import styled from 'styled-components';
import { PUERTO_RICO } from '../../../../config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const ContainerMail = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ owner }) => (owner ? 'pointer' : 'default')};
  font-size: 12px;
`;

export const Email = styled.p`
  margin: 0 14px;
  &:hover {
    color: ${({ owner }) => (owner ? PUERTO_RICO : undefined)};
  }
`;

export const WaitingDisclaimer = styled.small`
  font-size: 10px;
  margin-left: 10px;
  opacity: 0.6;
`;
