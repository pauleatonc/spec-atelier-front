import styled from 'styled-components';
import { COLOR_LIGHTGREY, COLOR_LIGHTERGREY } from '../../config/constants/styled-vars';

export const Card = styled.section`
  border: solid 1px ${COLOR_LIGHTGREY};
  border-radius: 16px;
  padding: 24px 40px;
  transition: all .2s ease-in-out;
  &:hover {
    box-shadow: 7px 11px 22px -5px rgba(0, 0, 0, 0.75);
  }
`;

export const CardImg = styled.div`
  height: 144px;
  margin: 18px auto;
  padding: 8px;
  cursor: pointer;
`;

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin 8px 0;
`;

export const Title = styled.div`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Line = styled.div`
  height: 2px;
  border: solid 1px ${COLOR_LIGHTERGREY};
`

export const DescriptionContainer = styled.section`
  margin: 16px 0;
`;