import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  WHITE,
  MINE_SHAFT,
  BOULDER,
  MEDIA_QUERY_SMALL,
  MERCURY,
  BLACK
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${WHITE};
	box-shadow: 0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12), 0 1px 1px 0 rgba(${BLACK}, 0.14);
	display: ${({ show = false }) => (show ? 'initial' : 'none')};
	height: calc(100vh - 122px);
	left: 0;
	position: absolute;
	top: 0;
	width: 360px;
	z-index: 1;

	${MEDIA_QUERY_SMALL} {
		width: 100vw;
		height: 100vh;
		top: -35px;
	}
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
	color: ${MINE_SHAFT};
	font-size: 13px;
	font-weight: bold;
	height: 46px;
	letter-spacing: 1.08px;
	padding: 0 23px;
	width: 100%;
`;

export const TextConfig = styled.section`
	border-top: solid 1px ${MERCURY};
	padding: 25px 23px;
`;

export const TextConfigTitle = styled.h2`
	font-size: 13px;
	font-weight: bold;
`;

export const TextConfigDesc = styled.p`
	font-size: 12px;
	font-weight: normal;
	color: ${BOULDER};
	margin: 9px 0 11px;
`;

export const TextConfigList = styled.section`
	background-color: transparent;
	max-height: 200px;
	overflow-y: auto;
`;
