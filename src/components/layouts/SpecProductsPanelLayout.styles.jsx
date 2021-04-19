import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	COLOR_WHITE,
	COLOR_MINE_SHAFT,
	COLOR_MERCURY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${COLOR_WHITE};
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
		0 1px 1px 0 rgba(0, 0, 0, 0.14);
	display: ${({ show = false }) => (show ? 'initial' : 'none')};
	height: calc(100vh - 122px);
	left: 0;
	position: absolute;
	top: 0;
	width: calc(100vw - 69px);
	z-index: 1;
`;

export const Overlay = styled.div`
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 0;
`;

Root.propTypes = {
	show: PropTypes.bool.isRequired,
};

export const ButtonClose = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 20px;
	cursor: pointer;
	padding: 0 23px;
	outline: none;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${COLOR_MERCURY};
	color: ${COLOR_MINE_SHAFT};
	font-family: Lato;
	font-size: 13px;
	font-weight: bold;
	height: 46px;
	padding: 0 23px;
	width: 100%;
`;

export const Title = styled.section`
	display: flex;
	align-items: center;
	height: 46px;
	letter-spacing: 1.08px;
	padding: 0 23px;
`;

export const Panels = styled.section`
	display: flex;
	height: calc(100% - 46px);
	width: 100%;
`;

export const Filters = styled.section`
	border-right: 1px solid ${COLOR_MERCURY};
	display: flex;
	height: 100%;
	position: relative;
	width: 360px;
`;
