import styled from 'styled-components';
import SUPPLIER_BACKGROUND from '../../../assets/images/home/bg-header-supplier.png';
import SUPPLIER_BACKGROUND_MOBILE from '../../../assets/images/home/bg-header-supplier-mobile.png';
import { COLOR_BLACK, MEDIA_QUERY_SMALL, COLOR_WHITE } from '../../../config/constants/styled-vars';

export const Container = styled.section`
  background: url(${SUPPLIER_BACKGROUND});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  color: ${COLOR_BLACK};
  height: 475px;
  width: 100%;
  ${MEDIA_QUERY_SMALL} {
    background: url(${SUPPLIER_BACKGROUND_MOBILE});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 100%;
  ${MEDIA_QUERY_SMALL} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const InfoContainer = styled.section`
  width: 500px;
  ${MEDIA_QUERY_SMALL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${COLOR_WHITE};
  font-family: 'Lato';
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.5px;
  width: 100 %;
  ${MEDIA_QUERY_SMALL} {
    margin-bottom: 15px;
    line-height: 1.36;
    letter-spacing: 1.56px;
    width: 50 %;
  }
`;

export const Description = styled.p`
  color: ${COLOR_WHITE};
  font-family: 'Lato';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.5px;
  width: 80%;
  margin: 16px 0;
  ${MEDIA_QUERY_SMALL} {
    margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  padding: 16px 0 0 0;
  flex: 1;
  ${MEDIA_QUERY_SMALL} {
    width: 80%;
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
  }
`;