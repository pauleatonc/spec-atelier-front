import styled from 'styled-components';
import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

export const Container = styled.section`
  display: grid;
  padding: 28px 0;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  ${MEDIA_QUERY_MEDIUM} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;
  }
  ${MEDIA_QUERY_SMALL} {
    grid-template-columns: repeat(1, 1fr);
    max-height: auto;
    row-gap: 32px;
  }
`;

