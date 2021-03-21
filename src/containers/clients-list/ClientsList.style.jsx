import styled from 'styled-components';
import { COLOR_BLACK, MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  ${MEDIA_QUERY_MEDIUM} {
    grid-gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    padding: 16px 40px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 16px 16px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const IconContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px;
`;

export const Icon = styled.img`
  height: 98px;
  max-width: 98px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: ${COLOR_BLACK};
`;

export const Text = styled.span`
  padding: 2px;
  margin: 2px;
`;
