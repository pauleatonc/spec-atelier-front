import styled from 'styled-components';
import { COLOR_MINE_SHAFT, COLOR_MERCURY } from '../../config/constants/styled-vars';

export const Root = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 115px);
  max-height: calc(100vh - 115px);
  position: relative;
  width: calc(100% - 360px);
  z-index: 4;
`;

export const Header = styled.section`
  width: 100%;
`;

export const HeaderSearch = styled.section`
  display: flex;
  justify-content: center;
  padding: 23px 0 20px;
  width: 100%;
`;

export const HeaderFilters = styled.section`
  border-bottom: 1px solid ${COLOR_MERCURY};
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0 0 24px;
  width: 100%;
`;

export const Body = styled.section`
  height: 100%;
  overflow-y: auto;
  padding: 20px 46px 15px;
  width: 100%;
`;

export const BodyHeader = styled.section`
  align-items: center;
  color: ${COLOR_MINE_SHAFT};
  color: #212121;
  display: grid;
  font-family: Lato;
  font-size: 12px;
  grid-template-columns: 50% 50%;
  height: 24px;
  letter-spacing: 1px;
  margin: 0 0 21px;
`;

export const Sort = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const Total = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const Cards = styled.section`
  display: grid;
  grid-column-gap: 38px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const LoadMore = styled.section`
  display: flex;
  justify-content: center;
  margin: 50px 0 37px;
`;

export const Loading = styled.span`
  align-items: center;
  color: ${COLOR_MINE_SHAFT};
  display: inline-flex;
  font-family: Lato;
  font-size: 16px;
  height: 34px;
`;
