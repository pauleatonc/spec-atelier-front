import styled from 'styled-components';
import {
  MEDIA_QUERY_STANDAR_MEDIUM,
  SILVER,
} from 'config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 50px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 25px;
  align-items: center;
  border-radius: 15px;
  border: solid 1px ${SILVER};
  margin: 15px 0;
  justify-content: space-between;
  cursor: pointer;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    padding-left: 16px;
    padding-right: 24px;
  }
`;

export const Title = styled.p`
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.2px;
  max-width: 90%;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    font-size: 17px;
  }
`;

export const IconExpan = styled.i`
  color: ${SILVER};
`;

export const ExpandableContent = styled.div`
  width: 90%;
  margin-top: 20px;
  font-family: Lato;
  font-size: 16px;
  letter-spacing: 0.96px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    font-size: 14px;
  }
`;

export const TextExpandable = styled.p`
  margin: 10px 0;
`;
