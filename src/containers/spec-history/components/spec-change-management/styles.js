import styled from 'styled-components';
import { BOULDER } from '../../../../config/constants/styled-vars';

export const Container = styled.section`
  width: 95%;
  margin: 0 auto;
`;

export const DisclaimerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const IcDisclaimer = styled.img`
  width: 20px;
  height: 20px;
`;

export const DescDisclaimer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TextDisclaimer = styled.span`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const ContainerChanges = styled.div`
  margin: 40px auto 50px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 60px;
`;

export const ChangesConfirmed = styled.span`
  font-family: Lato;
  font-size: 12px;
  color: ${BOULDER};
`;
