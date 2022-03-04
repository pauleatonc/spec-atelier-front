import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  MINE_SHAFT,
  MEDIA_QUERY_SMALL,
  NOBEL,
  GALLERY,
  WHITE,
  DUSTY_GRAY,
  CONCRETE,
  CONCRETE_OPACITY,
  MINE_SHAFT_RGB
} from '../../config/constants/styled-vars';

export const Root = styled.div`
  height: 100%;
  position: relative;
  width: 587px;

  ${MEDIA_QUERY_SMALL} {
    width: 100%;
  }
`;

export const AddIcon = styled.img`
	cursor: pointer;
    margin: 8px 7px 0 0;
    position: absolute;
    top: 0;
    right: 0;

  &:active {
    transform: scale(.95);
  }

  ${MEDIA_QUERY_SMALL} {
	position: fixed;
    bottom: 70px;
    right: 10px;
    top: unset;
  }
`;

export const AddMenuItem = styled.section`
	background-color: transparent;
	border-bottom: 1px solid ${NOBEL};
	color: ${MINE_SHAFT};
	cursor: pointer;
	font-size: 14px;
	letter-spacing: 1px;
	padding: 26px 0 26px 55px;
	width: 256px;

	&:hover {
		background-color: ${GALLERY};
	}

	&:last-child {
		border-bottom: 0;
	}
`;

export const Page = styled.section`
  background-color: ${WHITE};
  border: 1px solid ${DUSTY_GRAY};
  margin: 0 0 5px;
  min-height: 710px;
  padding: 40px 66px 40px 52px;
  width: 100%;

  ${MEDIA_QUERY_SMALL} {
    padding: 29px 19px;
  }
`;

export const Group = styled.section`
	width: 100%;
`;

export const Block = styled.section`
	margin: ${({ margin = 'initial' }) => margin};
	width: 100%;

	&:last-child {
		margin: 0;
	}
`;

Block.defaultProps = {
  margin: 'initial',
};
Block.propTypes = {
  margin: PropTypes.string,
};

export const BlockEditor = styled.section`
	background-color: ${CONCRETE};
	bottom: 0;
	left: 0;
	height: 202px;
	padding: 20px 14px 16px;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 10;
`;

export const BlockMenuItem = styled.section`
	background-color: transparent;
	border-bottom: 1px solid ${NOBEL};
	color: ${MINE_SHAFT};
	cursor: pointer;
	font-size: 12px;
	letter-spacing: 0.86px;
	padding: 15px 0 15px 35px;
	width: 187px;

	&:hover {
		background-color: ${GALLERY};
	}

	&:last-child {
		border-bottom: 0;
	}
`;

export const BlockDotsIcon = styled.img`
	cursor: pointer;
	position: absolute;
	right: 5px;
	top: 4px;
	user-select: none;
	visibility: hidden;
`;

export const BlockImage = styled.section`
	display: flex;
	width: 98px;
	margin: 10px 0px 10px 10px;
`;

export const BlockContent = styled.section`
	padding: 8px 0 8px 9px;
`;

export const BlockText = styled.section`
	background-color: ${CONCRETE_OPACITY};
	font-size: 12px;
	margin: 0 0 3px 0;
	padding: 4px 30px 4px 9px;
	position: relative;
	width: 100%;

	&:hover ${BlockDotsIcon} {
		visibility: visible;
	}
`;

export const BlockTextContent = styled.section`
	& p {
		color: ${MINE_SHAFT};
		letter-spacing: 1px;
		margin: 9px 0;
	};
	& h1 {
		color: ${MINE_SHAFT};
		font-size: 18px;
		font-weight: bold;
		margin: 9px 0;
	};
	& h2 {
		color: ${MINE_SHAFT};
		font-size: 14px;
		font-weight: bold;
		margin: 9px 0;
	};
	& h5 {
		color: ${MINE_SHAFT};
		font-size: 9px;
		letter-spacing: 1px;
		margin: 9px 0;
	};
	& strong {
		font-weight: bold;
	};
	& i {
		font-style: italic;
	};
`;

export const BlockTitle = styled.span`
	text-transform: uppercase;
`;

export const Section = styled.section`
	align-items: center;
	background-color: ${CONCRETE_OPACITY};
	color: ${MINE_SHAFT};
	display: flex;
	font-size: 16px;
	font-weight: bold;
	height: 36px;
	letter-spacing: 1px;
	line-height: 1.6;
	margin: 0 0 3px 0;
	padding: 4px 30px 4px 9px;
	position: relative;
	width: 100%;

	&:hover ${BlockDotsIcon} {
		visibility: visible;
	}
`;

export const Item = styled.section`
	align-items: center;
	background-color: ${CONCRETE_OPACITY};
	color: ${MINE_SHAFT};
	display: flex;
	font-size: 14px;
	font-weight: bold;
	height: 36px;
	letter-spacing: 1px;
	line-height: 1.6;
	margin: 0 0 3px 0;
	padding: 4px 30px 4px 9px;
	position: relative;
	width: 100%;

	&:hover ${BlockDotsIcon} {
		visibility: visible;
	}
`;

export const Product = styled.section`
	background-color: ${CONCRETE_OPACITY};
	display: flex;
	margin: 0 0 3px 0;
	min-height: 116px;
	padding: 0 30px 0 0;
	position: relative;
	width: 100%;

	&:hover ${BlockDotsIcon} {
		visibility: visible;
	}
`;

export const ProductImage = styled.img`
	height: 150px;
	object-fit: contain;
	object-position: top;
	width: 98px;
`;

export const ProductTitle = styled.p`
	color: ${MINE_SHAFT};
	font-size: 12px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.6;
	margin: 0 0 9px;
	text-transform: uppercase;
`;

export const ProductDescription = styled.p`
	color: rgba(${MINE_SHAFT_RGB}, 0.51);
	font-size: 12px;
	letter-spacing: 1px;
	line-height: 1.6;
	margin: 0 0 9px;
`;

export const ProductSystem = styled.p`
	color: ${MINE_SHAFT};
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.6;
	margin: 0 0 12px;
`;

export const ProductReference = styled.p`
	color: ${MINE_SHAFT};
	font-size: 11px;
	letter-spacing: 1px;
	line-height: 1.6;
`;

export const ProductBrand = styled.p`
	color: ${MINE_SHAFT};
	font-size: 11px;
	letter-spacing: 1px;
	line-height: 1.6;
`;
