import styled from 'styled-components';
import { GALLERY, MINE_SHAFT } from '../../config/constants/styled-vars';

export const Option = styled.section`
	align-items: center;
	box-sizing: border-box;
	color: ${MINE_SHAFT};
	cursor: pointer;
	display: flex;
	font-family: Lato;
	font-size: 14px;
	letter-spacing: 0.86px;
	padding: 10px 0;
	width: 100%;

	&:hover {
		background-color: ${GALLERY};
	}

	&:first-child {
		margin: 6px 0 0;
	}

	&:last-child {
		margin: 0 0 6px;
	}
`;

export const OptionCheckboxIcon = styled.img`
	height: 18px;
	margin: 0 8px 0 0;
	width: 18px;
`;

export const OptionText = styled.span`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
