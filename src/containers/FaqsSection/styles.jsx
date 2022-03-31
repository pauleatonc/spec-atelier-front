import styled from 'styled-components';
import { MEDIA_QUERY_STANDAR_MEDIUM } from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: 100%;
  max-width: 1041px;
  display: flex;
  flex-wrap: wrap;
  padding: 70px 36px 100px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1.8px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    text-align: center;
  }
`;

export const IconFaqs = styled.img`
  width: 51px;
  height: 51px;
  margin-right: 28px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    margin-bottom: 23px;
    margin-right: 0;
  }
`;
