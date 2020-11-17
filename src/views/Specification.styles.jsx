import styled from 'styled-components';

export const Root = styled.div`
  background-color: #F6F6F6;
  display: grid;
  grid-template-rows: 115px auto;
  height: 100%;
  margin: 0;
  overflow: auto;
  padding: 0;
  width: 100%;
`;

export const Header = styled.header`
  box-sizing: border-box;
  padding: 10px 0 0;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 0 10px;
  position: relative;
  width: 100%;
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 62px auto;
  height: calc(100vh - 115px);
  left: 0;
  max-height: calc(100vh - 115px);
  position: fixed;
  top: 115px;
`;

export const Panels = styled.section`
  position: relative;
`;
