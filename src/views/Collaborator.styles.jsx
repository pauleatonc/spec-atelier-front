import styled from 'styled-components';
import {
  SILVER_CHALICE,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
} from 'config/constants/styled-vars';

export const Container = styled.section`
  padding: 16px 80px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 16px 40px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 16px 16px;
  }
`;

export const ClientContainer = styled.section`
  border: 1px solid ${SILVER_CHALICE};
`;
