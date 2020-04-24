import styled from 'styled-components';

export const Root = styled.div`
  background-color: #FFF;
  border: 1px solid #979797;
  box-sizing: border-box;
  height: 710px;
  padding: 40px 66px 40px 52px;
  position: relative;
  width: 587px;
`;

export const AddIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 15px;

  &:active {
    transform: scale(.95);
  }
`;

export const MenuItem = styled.section`
  background-color: transparent;
  border-bottom: 1px solid #B3B3B3;
  color: #212121;
  cursor: pointer;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 26px 0 26px 55px;
  width: 256px;

  &:hover {
    background-color: #EEE;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
