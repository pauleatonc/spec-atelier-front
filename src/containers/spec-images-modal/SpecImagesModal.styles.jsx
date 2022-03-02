import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  WHITE,
  MINE_SHAFT,
  PRIMARY,
  BLACK,
  ALTO_OPACITY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${WHITE};
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(${BLACK}, 0.3);
	display: grid;
	grid-template-rows: 76px auto 60px;
	height: 482px;
	width: 612px;
	padding: 20px;
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
	align-items: center;
	padding: 0 40px 0 40px;
	position: relative;
	width: 100%;
`;

export const Title = styled.span`
	color: ${MINE_SHAFT};
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
`;

export const Body = styled.section`
	overflow: hidden;
	padding: 13px 35px 25px;
	width: 100%;
`;

export const Figures = styled.section`
	display: grid;
	grid-column-gap: 18px;
	grid-row-gap: 16px;
	grid-template-columns: repeat(4, 119px);
	grid-template-rows: 146px;
	height: 100%;
	overflow-y: auto;
	padding: 5px;
	width: 100%;
`;

export const Figure = styled.article`
	background-color: ${ALTO_OPACITY};
	border: ${({ selected = false }) => `2px solid ${selected ? PRIMARY : 'transparent'}`};
	cursor: pointer;
	height: 146px;
	position: relative;
	width: 119px;
`;

Figure.defaultProps = {
  selected: false,
};
Figure.propTypes = {
  selected: PropTypes.bool,
};

export const Image = styled.span`
  background-image: url('${({ source }) => source}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 100%;
  left: 0;
  opacity: ${({ selected = false }) => selected ? 1 : 0.6};
  position: absolute;
  top: 0;
  width: 100%;
`;

Image.defaultProps = {
  selected: false,
  source: '#',
};
Image.propTypes = {
  selected: PropTypes.bool,
  source: PropTypes.string,
};

export const CheckIcon = styled.img`
	position: absolute;
	right: 4px;
	top: 4px;
`;

export const Footer = styled.section`
	display: flex;
	justify-content: flex-end;
	padding: 0 40px 25px;
	width: 100%;
`;
