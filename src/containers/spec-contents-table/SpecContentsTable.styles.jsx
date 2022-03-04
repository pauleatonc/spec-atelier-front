import styled from 'styled-components';
import {
  ALTO,
  BLACK,
  CARIBBEAN_GREEN,
  CARIBBEAN_GREEN_OPACITY,
  JAVA,
  MERCURY,
  SILVER,
  WHITE,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  display: -webkit-box;
  height: 100%;
  width: 100%;
  margin-bottom: 1%;
`;

export const ContentTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 970px;
  height: 597px;
`;

export const Header = styled.td`
  width: 100%;
  height: 46px;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 0.94;
  letter-spacing: normal;
  background-color: ${WHITE};
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${CARIBBEAN_GREEN_OPACITY};
  padding: 20px;
`;

export const TableElements = styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.07;
  color: rgba(${BLACK}, 0.87);
`;

export const TableTotal = styled.h1`
  height: 17px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.07;
  color: rgba(${BLACK}, 0.87);
  margin-right: ${({ mRight }) => `${mRight}px` || '0'};
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 0.94;
  float: left;
`;

export const ButtonsHeader = styled.div`
  font-weight: bold;
  line-height: 0.94;
  letter-spacing: normal;
  display: flex;
  float: right;
`;
export const Button = styled.div`
  cursor: pointer;
  font-size: 14px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${CARIBBEAN_GREEN};
  height: 20px;
  display: flex;
  position: ${({ isExpandButton }) => isExpandButton && 'absolute'};
  top: ${({ isExpandButton }) => isExpandButton && '20px'};
  right: ${({ isExpandButton }) => isExpandButton && '150px'};
`;

export const ImgButton = styled.img`
  margin: 0px 5px 0px 39px;
`;

export const ImgSubtotal = styled.img``;

export const Table = styled.table`
  width: 100%;
  border-radius: 2px;
  border: solid 1px ${MERCURY};
  background-color: ${WHITE};
  position: relative;
`;

export const TableThead = styled.thead`
  padding: 8px;
  height: 46px;
  text-align: left;
  border-radius: 2px;
  border: solid 1px ${MERCURY};
`;

export const TableTbody = styled.tbody`
  width: 2px;
  text-align: left;
`;

export const TableTd = styled.td`
  padding: ${({ isTypeUnity }) => (isTypeUnity ? '16.5px' : '20px')} 15px;
  border-top: 1px solid ${ALTO};
  border-bottom: 1px solid ${ALTO};
  font-size: 13px;
  font-weight: ${({ isTypeUnity }) => (isTypeUnity ? 'normal' : 'bold')};
  line-height: 0.92;
  color: rgba(${BLACK}, 0.87);
  text-align: ${({ isDesc }) => (isDesc ? 'left' : 'center')};
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableTh = styled.th`
  font-size: 13px;
  line-height: 1.25;
  color: rgba(${BLACK}, 0.54);
  padding: 20px 15px;
  text-align: ${({ isDesc }) => (isDesc ? 'left' : 'center')};
`;

export const TableInput = styled.input`
  border-style: none;
  width: 56px;
  border-bottom: solid 1px ${SILVER};
`;

export const ButtonConsult = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${CARIBBEAN_GREEN};
  cursor: pointer;
`;

export const IconExpan = styled.div`
  color: ${JAVA};
`;

export const ContainerTotalTable = styled.div`
  display: flex;
`;
