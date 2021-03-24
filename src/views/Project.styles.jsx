import styled from 'styled-components';
import { MEDIA_QUERY_MEDIUM, MEDIA_QUERY_SMALL } from '../config/constants/styled-vars';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.section`
  padding: 16px 82px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 16px 42px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 16px 16px;
  }
`;
