import styled from 'styled-components';
import {
  COLOR_BLACK,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
} from '../../../config/constants/styled-vars';


export const Content = styled.div`
  width: 100%;
  margin: 24px 0;
  padding: 44px 40% 44px 104px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 44px 104px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 44px 16px;
  }
`;
