import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	COLOR_PRIMARY,
	COLOR_MINE_SHAFT,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: #fff;
	height: 100%;
	left: 0;
	padding: 0 23px;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 3;
`;

export const Header = styled.section`
	height: 46px;
	padding: 10px 0 0;
	width: 100%;
`;

export const Body = styled.section`
	height: calc(100% - 46px);
	overflow-y: auto;
	padding: 32px 12px 15px;
	width: 100%;
`;

export const Loading = styled.div`
	align-items: center;
	color: ${COLOR_MINE_SHAFT};
	display: flex;
	font-family: Lato;
	font-size: 16px;
	height: calc(100% - 46px);
	justify-content: center;
	width: 100%;
`;

export const Item = styled.p`
	color: ${({ active }) => (active ? COLOR_PRIMARY : COLOR_MINE_SHAFT)};
	cursor: pointer;
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
	margin: 0 0 15px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	padding: ${({ padding = '0' }) => padding};

	&:hover {
		color: #3fbfad;
	}
`;

Item.defaultProps = {
	active: false,
};

Item.propTypes = {
	active: PropTypes.bool,
};

export const ArrowIcon = styled.img`
	pointer-event: none;
	user-select: none;
`;

export const Divisor = styled.div`
	height: 15px;
`;
