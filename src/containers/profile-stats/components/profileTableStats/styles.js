import styled from 'styled-components';

import INSTITUTIONAL from '../../../../assets/images/project/project_type/ic-institutional_grey.svg';
import HOSPITAL from '../../../../assets/images/project/project_type/ic-hospitaler_grey.svg';
import REAL_STATE from '../../../../assets/images/project/project_type/ic-real_state_grey.svg';
import RESIDENTIAL from '../../../../assets/images/project/project_type/ic-residential_grey.svg';
import HOTEL from '../../../../assets/images/project/project_type/ic-hotel_grey.svg';
import EDUCATIONAL from '../../../../assets/images/project/project_type/ic-educational_grey.svg';
import COMMERCIAL from '../../../../assets/images/project/project_type/ic-commercial_grey.svg';
import OFFICE from '../../../../assets/images/project/project_type/ic-office_grey.svg';
import INDUSTRIAL from '../../../../assets/images/project/project_type/ic-industrial_grey.svg';

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
	color: rgba(0, 0, 0, 0.54);
	font-size: 12px;
`;

export const TableBody = styled.tbody`
	color: rgba(0, 0, 0, 0.87);
	font-size: 13px;
	tr:last-child {
		border-bottom: none;
	}
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
