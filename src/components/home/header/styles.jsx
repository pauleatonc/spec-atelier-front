import styled from 'styled-components';
import BACKGROUND_HEADER_HOME from 'assets/images/home/bg-header-home.png';
import {
  MEDIA_QUERY_STANDAR_MEDIUM,
  SILVER_OPACITY,
  WHITE,
} from 'config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 600px;
  background: url(${BACKGROUND_HEADER_HOME});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  justify-content: space-around;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    position: relative;
    flex-direction: column;
  }
`;

export const VideoBanner = styled.iframe`
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 ${SILVER_OPACITY};
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    z-index: 1;
    width: 90%;
    max-height: 220px;
    position: absolute;
    bottom: -100px;
  }
`;

export const InfoContainer = styled.div`
  width: 340px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    width: 90%;
    max-width: 340px;
  }
`;

export const TextBanner = styled.p`
  font-family: 'lato';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 1px;
  color: ${WHITE};
  margin-bottom: ${({ mBottom = '0' }) => mBottom};
`;

export const Titlebanner = styled.span`
  font-size: 30px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.88px;
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    font-size: 25px;
  }
`;

export const ContainerButtonBanner = styled.div`
  ${MEDIA_QUERY_STANDAR_MEDIUM} {
    display: none;
  }
`;
