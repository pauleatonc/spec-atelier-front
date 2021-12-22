import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	MINE_SHAFT,
	MEDIA_QUERY_SMALL,
  GALLERY,
  MINE_SHAFT_RGB,
} from '../../config/constants/styled-vars';

const justifyContentDefaultProps = {
	justifyContent: 'flex-start',
};
const justifyContentPropTypes = {
	justifyContent: PropTypes.oneOf(['flex-start', 'center']),
};

export const Root = styled.div`
	background-color: ${GALLERY};
	border-radius: 21.5px;
	max-width: ${({ maxWidth = 'initial' }) => maxWidth};
	position: relative;
	width: 100%;
	${MEDIA_QUERY_SMALL} {
		flex: 1;
		max-width: 100%;
		/* TODO: agregar cuando se agregue el filtro margin-right: 13px; */
	}
`;

Root.propTypes = {
	maxWidth: PropTypes.string.isRequired,
};

export const Input = styled.input`
	background-color: transparent;
	border: 0;
	color: rgba(${MINE_SHAFT_RGB}, 0.45);
	font-family: Lato;
	font-size: 12px;
	height: 100%;
	letter-spacing: 1px;
	padding: ${({ justifyContent = 'flex-start' }) =>
		justifyContent === 'flex-start' ? '11px 20px 10px 51px' : '11px 20px 10px'};
	width: 100%;

	&:focus {
		outline: 0;
	}
`;

Input.defaultProps = justifyContentDefaultProps;
Input.propTypes = justifyContentPropTypes;

export const SearchIcon = styled.img`
	bottom: 0;
	left: ${({ justifyContent = 'flex-start' }) =>
		justifyContent === 'flex-start' ? '20px' : '0'};
	margin: ${({ justifyContent = 'flex-start' }) =>
		justifyContent === 'flex-start' ? 'auto 0' : 'auto 9px auto 0'};
	position: ${({ justifyContent = 'flex-start' }) =>
		justifyContent === 'flex-start' ? 'absolute' : 'relative'};
	top: 0;
`;

SearchIcon.defaultProps = justifyContentDefaultProps;
SearchIcon.propTypes = justifyContentPropTypes;

export const Placeholder = styled.div`
	align-items: center;
	color: ${MINE_SHAFT};
	display: flex;
	font-family: Lato;
	font-size: 12px;
	height: 100%;
	justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
	letter-spacing: 1px;
	opacity: 0.5;
	padding: ${({ justifyContent = 'flex-start' }) =>
		justifyContent === 'flex-start' ? '0 20px 0 51px' : '0 20px'};
	pointer-events: none;
	position: absolute;
	top: 0;
	user-select: none;
	width: 100%;
`;

Placeholder.defaultProps = justifyContentDefaultProps;
Placeholder.propTypes = justifyContentPropTypes;
