import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	font-family: Lato;
`;

export const TableHead = styled.thead`
	color: rgba(0, 0, 0, 0.54);
	font-size: 12px;
`;

export const TableBody = styled.tbody`
	color: rgba(0, 0, 0, 0.87);
	font-size: 13px;
`;

export const RowTable = styled.tr`
	border-bottom: 1px solid #e9e9e9;
	background-color: ${({ isExpanded }) => (isExpanded ? '#fafafa' : '')};
`;

export const TableTh = styled.th`
	padding: 15px;
	text-align: center;
`;

export const TableTd = styled.td`
	padding: 15px;
	text-align: center;
`;
