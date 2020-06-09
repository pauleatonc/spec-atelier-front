import styled from 'styled-components';
import { COLOR_GREY, COLOR_BLACK } from '../../../config/constants/styled-vars';

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
