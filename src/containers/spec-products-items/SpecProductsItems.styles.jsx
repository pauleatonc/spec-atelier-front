import styled from 'styled-components';

export const Root = styled.div`
  background-color: #FFF;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Header = styled.section`
  border-bottom: 1px solid #E5E5E5;
  height: 46px;
  width: 100%;
`;

export const Body = styled.section`
  padding: 37px 35px 0;
  width: 100%;
`;

export const Item = styled.p`
  color: #212121;
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 0 15px;

  &:hover {
    color: #3FBFAD;
  }
`;
