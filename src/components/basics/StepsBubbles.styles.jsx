import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Root = styled.div`
	height: 30px;
	position: relative;
	width: ${({ width = '100%' }) => width};
`;

Root.propTypes = {
	width: PropTypes.string.isRequired,
};

export const Line = styled.div`
	background-color: rgba(151, 151, 151, 0.32);
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
	background-color: ${({ active }) => (active ? '#00BFA8' : '#FFFFFF')};
	border: 1px solid
		${({ active }) => (active ? 'none' : 'rgba(151, 151, 151, 0.32)')};
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
	color: ${({ active }) => (active ? '#FFFFFF' : '#00BFA8')};
	font-family: Lato;
	font-size: 16px;
	font-weight: bold;
	line-height: 1.75;
`;
