import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_DARKESTGREY, COLOR_BLACK } from '../../config/constants/styled-vars';

export const Name = styled.div`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const CardImg = styled.div`
  height: 144px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const ImageClient = styled.img`
  max-height: 85px;
  max-width: 200px;
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

export const Country = styled.div`
  width: 38px;
  height: 24px;
  margin: 0 0 1px 4px;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;
