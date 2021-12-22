import styled from 'styled-components';

import {
	ALABASTER,
	MERCURY,
	BLACK_OPACITY,
	BLACK_OPACITY_DARK,
} from '../../../../config/constants/styled-vars';

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
