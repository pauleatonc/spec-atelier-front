import styled from 'styled-components';
import { SILVER, GALLERY, BLACK } from '../../config/constants/styled-vars';

export const Card = styled.section`
  border: solid 1px ${SILVER};
  border-radius: 16px;
  padding: 24px 40px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 7px 11px 22px -5px rgba(${BLACK}, 0.75);
  }
`;

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 8px 0;
`;

export const Line = styled.div`
  height: 2px;
  border: solid 1px ${GALLERY};
`;

export const DescriptionContainer = styled.section`
  margin: 16px 0;
  max-height: 135px;
  overflow: hidden;
`;
