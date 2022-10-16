import styled from 'styled-components';
import { MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  ${MEDIA_QUERY_SMALL} {
    justify-content: start;
  }
`;

export const SearchContaienr = styled.div`
  min-width: 490px;
  padding: 16px;
  display: flex;
  justify-content: center;

  ${MEDIA_QUERY_SMALL} {
    justify-content: start;
    min-width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    div:first-child {
      div {
        justify-content: start;
      }
    }
  }
`;

export const ButtonFilter = styled.div`
  font-size: 20px;
  cursor: pointer;
  outline: none;
  display: none;

  ${MEDIA_QUERY_SMALL} {
    display: none;
  }
`;

export const SearchContent = styled.div``;
