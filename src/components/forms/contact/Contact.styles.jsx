import styled from 'styled-components';
import { SILVER_CHALICE, MINE_SHAFT, BOULDER } from '../../../config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  margin: 16px 0 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  margin: 8px 0;
  position: relative;
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: ${strong => strong ? 'bold' : 'normal'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${strong => strong ? MINE_SHAFT : SILVER_CHALICE};
`;

export const CodeNumber = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${BOULDER};
`;

export const CellPhone = styled.div`
  flexDirection: row;
  display: flex;
`;
