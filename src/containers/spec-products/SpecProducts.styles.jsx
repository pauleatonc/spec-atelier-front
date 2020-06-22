import styled from 'styled-components';

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
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0 0 24px;
  width: 100%;
`;

export const Body = styled.section`
  height: 100%;
  overflow-y: auto;
  padding: 15px 46px;
  width: 100%;
`;

export const Total = styled.section`
  color: #212121;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 0 21px;
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
  color: #212121;
  display: inline-flex;
  font-family: Lato;
  font-size: 16px;
  height: 34px;
`;
