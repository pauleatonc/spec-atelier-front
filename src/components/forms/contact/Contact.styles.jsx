import styled from 'styled-components';
import { COLOR_GREY, COLOR_BLACK, COLOR_DARKGREY } from '../../../config/constants/styled-vars';

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
  color: ${COLOR_BLACK};
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
  color: ${strong => strong ? COLOR_BLACK : COLOR_GREY};
`;

export const CodeNumber = styled.span`
  font-size: 14;
  font-family: Lato;
  display: flex;
  align-items: center;
  margin: 0 8px 0;
  color: ${COLOR_DARKGREY};
`;

export const CellPhone = styled.div`
  flexDirection: row;
  display: flex;
`;
