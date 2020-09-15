import styled from 'styled-components';
import { COLOR_TERTIARY, MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

export const Container = styled.footer`
  font-family: 'Lato', sans-serif;
  background-color: ${COLOR_TERTIARY};
  min-height: 300px;
  display: flex;
`

export const Content = styled.section`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  color: white;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex: 2;
  flex-direction: column;
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
    flex-direction: row;
  }

`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ImageConainer = styled.div`
  padding-right: 80px;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-evenly;
  ${MEDIA_QUERY_SMALL} {
    flex-direction: column;
    padding-right: 0;
    padding-top: 24px;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

