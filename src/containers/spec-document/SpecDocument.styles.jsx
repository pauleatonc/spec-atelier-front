import styled from 'styled-components';
import { COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
  box-sizing: border-box;
  height: 100%;
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
  color: ${COLOR_MINE_SHAFT};
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

export const Page = styled.section`
  background-color: #FFF;
  border: 1px solid #979797;
  height: 710px;
  margin: 0 0 10px;
  padding: 40px 66px 40px 52px;
  width: 100%;
`;

export const Block = styled.section`
  position: relative;
  width: 100%;
`;

export const BlockEditor = styled.section`
  background-color: #F2F2F2;
  bottom: 0;
  left: 0;
  padding: 20px 14px 16px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const BlockTitle = styled.section`
  align-items: center;
  background-color: rgba(242, 242, 242, 0.54);
  color: #212121;
  display: flex;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  height: 36px;
  letter-spacing: 1.14px;
  margin: 0 0 4px 0;
  padding: 4px 9px;
  width: 100%;
`;

export const Section = styled.section`
  width: 100%;
`;

export const SectionTitle = styled.section`
  align-items: center;
  background-color: rgba(242, 242, 242, 0.54);
  color: #212121;
  display: flex;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  letter-spacing: 1px;
  margin: 0 0 10px 0;
  padding: 4px 9px;
  width: 100%;
`;

export const SectionItem = styled.section`
  background-color: rgba(242, 242, 242, 0.54);
  margin: 0 0 23px 0;
  min-height: 116px;
  width: 100%;

  &:last-child {
    margin: 0 0 10px 0;
  }
`;
