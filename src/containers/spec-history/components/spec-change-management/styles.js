import styled from 'styled-components';
import { BOULDER, MINE_SHAFT } from '../../../../config/constants/styled-vars';

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
  font-size: 12px;
  color: ${BOULDER};
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  color: ${MINE_SHAFT};
`;

export const FilterContent = styled.div`
  width: 237px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const Label = styled.span`
  font-weight: bold;
  padding: 4px 0 12px;
  font-size: 12px;
`;

export const UserNameLabel = styled.p`
  margin-left: 6px;
  font-size: 12px;
`;
