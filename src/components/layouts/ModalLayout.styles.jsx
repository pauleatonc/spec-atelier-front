import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

const Root = styled.div`
	align-items: center;
	background-color: ${({ overlay = true }) => overlay ? 'rgba(59, 59, 59, .54)' : 'rgba(59, 59, 59, 0)'};
	bottom: 0;
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	overflow-y: auto;
	padding: 20px;
`;

export const CloseIcon = styled.i`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 24px;
	cursor: pointer;
	outline: none;
	// width: 100%;
  width: ${({ widthChange = false }) => (widthChange ? 'auto' : '100%')};
	${MEDIA_QUERY_SMALL} {
		display: ${({ hideInMobile = false }) => (hideInMobile ? 'none' : 'flex')};
	}
`;

Root.propTypes = {
	overlay: PropTypes.bool.isRequired,
};

export default Root;
