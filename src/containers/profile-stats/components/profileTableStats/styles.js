import styled from 'styled-components';
import {
  ALABASTER,
  MERCURY,
  BLACK_OPACITY,
  BLACK_OPACITY_DARK,
} from '../../../../config/constants/styled-vars';
import {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  HOTEL,
  EDUCATIONAL,
  COMMERCIAL,
  OFFICE,
  INDUSTRIAL,
} from '../../../../assets/Images';

const types = {
  INSTITUTIONAL,
  HOSPITAL,
  REAL_STATE,
  RESIDENTIAL,
  HOTEL,
  EDUCATIONAL,
  COMMERCIAL,
  OFFICE,
  INDUSTRIAL,
};

export const Table = styled.table`
  width: 100%;
  font-family: Lato;
`;

export const TableHead = styled.thead`
  color: ${BLACK_OPACITY};
  font-size: 12px;
`;

export const TableBody = styled.tbody`
  color: ${BLACK_OPACITY_DARK};
  font-size: 13px;
  tr:last-child {
    border-bottom: none;
  }
`;

export const RowTable = styled.tr`
  border-bottom: 1px solid ${MERCURY};
  background-color: ${({ isExpanded }) => (isExpanded ? ALABASTER : '')};
`;

export const TableTh = styled.th`
  padding: 15px;
  text-align: center;
  cursor: ${({ canSort }) => (canSort ? 'pointer' : 'default')};
`;

export const TableTd = styled.td`
  padding: 15px;
  text-align: center;
  display: ${({ isProjectType }) => (isProjectType ? 'flex' : '')};
  justify-content: center;
  align-items: center;
`;

export const IconType = styled.i`
	width: 20px;
	height: 20px;
	background-image: url('${({ type }) => (type ? types[type] : '')}');
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 5px;
`;

export const IconSort = styled.i`
  margin-left: 10px;
  font-size: 12px;
`;
