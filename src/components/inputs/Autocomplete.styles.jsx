import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
	width: 100%;
`;

export const Label = styled.label`
	color: ${COLOR_MINE_SHAFT};
	display: block;
	font-family: Lato;
	font-size: 16px;
	font-weight: bold;
	letter-spacing: 1px;
	padding: 0 0 18px;
	width: 100%;
`;

export const Section = styled.div`
	position: relative;
	width: 100%;
	z-index: ${({ open = false }) => (open ? '12' : 'initial')};
`;

Section.propTypes = {
	open: PropTypes.bool.isRequired,
};

export const Input = styled.input`
	align-items: center;
	background-color: transparent;
	border: 1px solid #d6d6d6;
	border-radius: 9px;
	color: ${COLOR_MINE_SHAFT};
	cursor: pointer;
	display: inline-flex;
	height: 38px;
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
	overflow: hidden;
	padding: 0 31px 0 21px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;

	&:active,
	&:focus {
		outline: 0;
	}

	&::placeholder {
		color: rgba(33, 33, 33, 0.46);
	}

	&:disabled {
		background-color: #ddd;
		cursor: not-allowed;
	}
`;

export const Option = styled.section`
	box-sizing: border-box;
	color: ${COLOR_MINE_SHAFT};
	cursor: pointer;
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 0.86px;
	padding: 10px 23px;
	width: 100%;

	&:hover {
		background-color: #eee;
	}

	&:first-child {
		margin: 6px 0 0;
	}

	&:last-child {
		margin: 0 0 6px;
	}

	&:only-child {
		margin: 6px 0;
	}
`;

export const AddOption = styled.section`
	align-items: center;
	display: flex;
	height: 52px;
	min-height: 52px;
	padding: 0 23px;
	width: 100%;
`;

export const AddAction = styled.span`
	color: #00c1aa;
	cursor: pointer;
	font-family: Lato;
	font-weight: bold;
	font-size: 12px;
	letter-spacing: 0.86px;
	margin: 0 5px 0 0;

	&:hover {
		text-decoration: underline;
	}
`;

export const AddText = styled.span`
	color: ${COLOR_MINE_SHAFT};
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 0.86px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
