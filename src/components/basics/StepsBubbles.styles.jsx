import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CARIBBEAN_GREEN, DUSTY_GRAY, DUSTY_GRAY_OPACITY, WHITE } from '../../config/constants/styled-vars';

export const Root = styled.div`
	height: 30px;
	position: relative;
	width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
  width: PropTypes.string.isRequired,
};

export const Line = styled.div`
	background-color: ${DUSTY_GRAY_OPACITY};
	bottom: 0;
	height: 4px;
	left: 0;
	margin: auto 0;
	position: absolute;
	right: 0;
	top: 0;
`;

export const Bubbles = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: flex-start;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

export const Bubble = styled.div`
	background-color: ${({ active }) => (active ? CARIBBEAN_GREEN : WHITE)};
	border: 1px solid
		${({ active }) => (active ? 'none' : DUSTY_GRAY)};
	cursor: ${({ onClick = undefined }) => (onClick ? 'pointer' : 'default')};
	display: inline-flex;
	justify-content: center;
	border-radius: 50%;
	height: 30px;
	margin: 0 42px 0 0;
	min-width: 30px;
	width: 30px;

	&:active {
		transform: scale(0.95);
	}
`;

Bubble.defaultProps = {
  onClick: undefined,
};
Bubble.propTypes = {
  onClick: PropTypes.func,
};

export const BubbleText = styled.span`
	color: ${({ active }) => (active ? WHITE : CARIBBEAN_GREEN)};
	font-size: 16px;
	font-weight: bold;
	line-height: 1.75;
`;
