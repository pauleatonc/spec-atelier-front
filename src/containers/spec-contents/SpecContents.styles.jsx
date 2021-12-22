import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	WHITE,
	MINE_SHAFT,
	MEDIA_QUERY_SMALL,
  MERCURY,
  BLACK,
  GALLERY_OPACITY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${WHITE};
	box-shadow: 0 1px 3px 0 rgba(${BLACK}, 0.2), 0 2px 1px -1px rgba(${BLACK}, 0.12),	0 1px 1px 0 rgba(${BLACK}, 0.14);
	display: ${({ show = false }) => (show ? 'initial' : 'none')};
	height: calc(100vh - 122px);
	left: 0;
	position: absolute;
	top: 0;
	width: 360px;
	overflow-x: scroll;
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
	font-family: Lato;
	font-size: 13px;
	font-weight: bold;
	height: 46px;
	letter-spacing: 1.08px;
	padding: 0 23px;
	width: 100%;

	${MEDIA_QUERY_SMALL} {
		border-bottom: solid 1px ${MERCURY};
	}
`;

export const ListTitle = styled.section`
	align-items: center;
	color: ${MINE_SHAFT};
	display: flex;
	font-family: Lato;
	font-size: 13px;
	height: 30px;
	letter-spacing: 1.08px;
	margin: 10px 0 0;
	padding: 0 23px;
`;

export const ListItem = styled.a`
	text-decoration: none;
	align-items: center;
	color: ${MINE_SHAFT};
	cursor: pointer;
	display: grid;
	font-family: Lato;
	font-size: 13px;
	grid-template-columns: auto 24px;
	height: 30px;
	letter-spacing: 1.08px;
	padding: ${({ padding = '0 23px 0 43px' }) => padding};
	margin-bottom: 5px;

	&:hover {
		background-color: ${GALLERY_OPACITY};
	}

	& span {
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

ListItem.defaultProps = {
	padding: '0 23px 0 43px',
};
ListItem.propTypes = {
	padding: PropTypes.string,
};

export const ArrowIcon = styled.img`
	pointer-event: none;
	user-select: none;
`;
