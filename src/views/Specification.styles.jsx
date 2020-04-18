import styled from 'styled-components';

export const Root = styled.div`
  background-color: #F6F6F6;
  display: grid;
  grid-template-rows: 115px auto;
  height: 100%;
  margin: 0;
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
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: 62px auto;
  left: 0;
  position: absolute;
  top: 0;
`;

export const Panels = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  height: 100%;
  width: auto;
`;
