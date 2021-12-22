import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ALTO, MINE_SHAFT, MINE_SHAFT_RGB } from '../../config/constants/styled-vars';

export const Root = styled.div`
	width: 100%;
	position: relative;
`;

export const Label = styled.label`
	color: ${MINE_SHAFT};
	display: block;
	font-family: Lato;
	font-size: 16px;
	font-weight: bold;
	letter-spacing: 1px;
	padding: 0 0 18px;
	width: 100%;
`;

export const Textarea = styled.textarea`
	background-color: transparent;
	border: 1px solid ${ALTO};
	border-radius: 4px;
	color: ${MINE_SHAFT};
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
	min-height: ${({ minHeightTextArea }) => minHeightTextArea};
	padding: 11px 19px;
	resize: none;
	width: 100%;

	&:active,
	&:focus {
		outline: 0;
	}

	&::placeholder {
		color: rgba(${MINE_SHAFT_RGB}, 0.46);
	}
`;

export const CountCharacter = styled.p`
	position: absolute;
	bottom: 12px;
	right: 10px;
	font-family: Lato;
	font-size: 12px;
	color: ${ALTO};
`;

Textarea.propTypes = {
	minHeightTextArea: PropTypes.string,
};

Textarea.defaultProps = {
	minHeightTextArea: '152px',
};
