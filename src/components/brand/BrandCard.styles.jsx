import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_DARKESTGREY } from '../../config/constants/styled-vars';

export const Name = styled.div`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const Quantity = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 2.25;
  letter-spacing: 1px;
  color: ${COLOR_PRIMARY};
`;

export const Description = styled.p`
  min-height: 120px;
  font-family: Lato;
  font-size: 12px;
  line-height: 2.25;
  letter-spacing: 1px;
  color: ${COLOR_DARKESTGREY};
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 4px 0;
`;