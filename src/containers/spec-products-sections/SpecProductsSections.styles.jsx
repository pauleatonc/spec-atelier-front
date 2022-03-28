import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PRIMARY, MINE_SHAFT, MEDIA_QUERY_SMALL, WHITE } from '../../config/constants/styled-vars';
import { CLOSE_ICON } from '../../assets/Images';

export const Root = styled.div`
	background-color: ${WHITE};
	height: 100%;
	left: 0;
	padding: 0 23px;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

export const Header = styled.section`
	height: 46px;
	padding: 10px 0 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Body = styled.section`
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(auto-fit, 50%);
	padding: 32px 12px 15px;
	width: 100%;
`;

export const Item = styled.section`
	align-items: center;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 0 29px;
	width: 100%;
`;

export const ItemIcon = styled.span`
  background-image: url('/images/${({ active, icon, iconHover }) => active ? iconHover : icon}.svg');
  background-position: center center;
  background-repeat: no-repeat;
  height: 34px;
  margin: 0 0 9px;
  width: 34px;
  &:hover {
    background-image: url('/images/${({ iconHover }) => iconHover}.svg');
  }
`;

ItemIcon.defaultProps = {
  active: false,
};
ItemIcon.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  iconHover: PropTypes.string.isRequired,
};

export const ItemText = styled.span`
	color: ${({ active }) => (active ? PRIMARY : MINE_SHAFT)};
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 0.86px;
	text-align: center;
`;

ItemText.defaultProps = {
  active: false,
};
ItemText.propTypes = {
  active: PropTypes.bool,
};

export const Loading = styled.section`
	align-items: center;
	color: ${MINE_SHAFT};
	display: flex;
	font-family: Lato;
	font-size: 16px;
	height: calc(100% - 46px);
	justify-content: center;
	margin-top: -50px;
	width: 100%;
`;

export const CloseIcon = styled.i`
	display: none;
	justify-content: flex-end;
	align-items: center;
	font-size: 24px;
	cursor: pointer;
	outline: none;
	content: url(${CLOSE_ICON});
	${MEDIA_QUERY_SMALL} {
		display: flex;
	}
`;
