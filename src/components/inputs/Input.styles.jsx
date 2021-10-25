import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	COLOR_LIGHTGREY,
	COLOR_WHITE,
	COLOR_BLACK,
	COLOR_MINE_SHAFT,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
	width: PropTypes.string.isRequired,
};

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

export const Input = styled.input`
	background-color: #eee;
	border: 0;
	border-radius: 21.5px;
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
	padding: 11px 23px;
	width: 100%;

	&:active,
	&:focus {
		outline: 0;
		color: ${COLOR_MINE_SHAFT};
	}

	&::placeholder {
		color: rgba(33, 33, 33, 0.46);
	}
`;

export const InputUnderline = styled.input`
	border: 0;
	outline: 0;
	min-width: 100px;
	width: 100%;
	display: flex;
	padding: 10px ${({ textAlign }) => (textAlign === 'right' ? '0' : '10px')}
		10px ${({ textAlign }) => (textAlign === 'right' ? '10px' : '0px')};
	flex: 1;
	border-bottom: 1px solid
		${({ colorUnderline }) => colorUnderline || COLOR_LIGHTGREY};
	font-family: Lato;
	font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 1.17px;
	color: ${COLOR_BLACK};
	background-color: ${COLOR_WHITE};
	border-radius: 0;
	text-align: ${({ textAlign }) => textAlign || 'left'};
	&:active,
	&:focus {
		outline: 0;
		color: ${COLOR_BLACK};
	}
`;

export const InputForm = styled.input`
	background-color: transparent;
	height: 40px;

	border: 1px solid #d6d6d6;
	outline: 0;
	min-width: 100px;
	width: 100%;
	padding: 0 31px 0 21px;
	font-family: Lato;
	font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '12px')};
	letter-spacing: 1.17px;
	border-radius: 9px;
	text-align: ${({ textAlign }) => textAlign || 'left'};
`;
