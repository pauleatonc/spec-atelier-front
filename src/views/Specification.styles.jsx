import styled from 'styled-components';
import { MEDIA_QUERY_SMALL, WILD_SAND } from '../config/constants/styled-vars';

export const Root = styled.div`
  background-color: ${WILD_SAND};
  display: grid;
  grid-template-rows: 115px auto;
  margin: 0;
  overflow: auto;
  padding: 0;
  width: 100%;

  ${MEDIA_QUERY_SMALL} {
    grid-template-rows: 85px auto;
  }
`;

export const Header = styled.header`
  box-sizing: border-box;
  padding: 10px 0 0;
  width: 100%;

  ${MEDIA_QUERY_SMALL} {
    padding: 0px;
  }
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 0 10px;
  position: relative;
  width: 100%;
  margin-bottom: 60px;
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 62px auto;
  height: calc(100vh - 115px);
  left: 0;
  max-height: calc(100vh - 115px);
  position: fixed;
  top: 115px;

  ${MEDIA_QUERY_SMALL} {
    width: 100%;
    grid-template-columns: unset;
    top: unset;
    height: unset;
    max-height: unset;
  }
`;

export const Panels = styled.section`
  position: relative;
`;
