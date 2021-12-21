import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	COLOR_WHITE,
	COLOR_MINE_SHAFT,
	COLOR_DARKGREY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${COLOR_WHITE};
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
		0 1px 1px 0 rgba(0, 0, 0, 0.14);
	display: ${({ show = false }) => (show ? 'initial' : 'none')};
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 360px;
	font-family: Lato;
`;

Root.defaultProps = {
	show: false,
};
Root.propTypes = {
	show: PropTypes.bool,
};

export const PanelTitle = styled.section`
	align-items: center;
	display: flex;
	color: ${COLOR_MINE_SHAFT};
	font-family: Lato;
	font-size: 13px;
	font-weight: bold;
	height: 46px;
	letter-spacing: 1.08px;
	padding: 0 23px;
	width: 100%;
`;

export const TextConfig = styled.section`
	border-top: solid 1px #e5e5e5;
	padding: 25px 23px;
`;

export const TextConfigTitle = styled.h2`
	font-size: 13px;
	font-weight: bold;
`;

export const TextConfigDesc = styled.p`
	font-size: 12px;
	font-weight: normal;
	color: ${COLOR_DARKGREY};
	margin: 9px 0 11px;
`;

export const TextConfigList = styled.section`
	background-color: transparent;
	max-height: 200px;
	overflow-y: auto;
`;
