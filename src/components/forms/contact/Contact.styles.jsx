import styled from 'styled-components';
import { SILVER_CHALICE, BLACK, BOULDER } from '../../../config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${BLACK};
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
  font-family: Lato;
  font-size: 12px;
  font-weight: ${strong => strong ? 'bold' : 'normal'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${strong => strong ? BLACK : SILVER_CHALICE};
`;

export const CodeNumber = styled.span`
  font-size: 14px;
  font-family: Lato;
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${BOULDER};
`;

export const CellPhone = styled.div`
  flexDirection: row;
  display: flex;
`;
