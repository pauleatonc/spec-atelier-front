import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  width: 587px;
`;

export const AddIcon = styled.img`
  cursor: pointer;
  float: right;
  margin: 8px 7px 0 0;
  position: sticky;
  top: 8px;

  &:active {
    transform: scale(.95);
  }
`;

export const AddMenuItem = styled.section`
  background-color: transparent;
  border-bottom: 1px solid #B3B3B3;
  color: ${COLOR_MINE_SHAFT};
  cursor: pointer;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 26px 0 26px 55px;
  width: 256px;

  &:hover {
    background-color: #EEE;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export const Page = styled.section`
  background-color: #FFF;
  border: 1px solid #979797;
  margin: 0 0 5px;
  min-height: 710px;
  padding: 40px 66px 40px 52px;
  width: 100%;
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
  background-color: #F2F2F2;
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
  border-bottom: 1px solid #B3B3B3;
  color: ${COLOR_MINE_SHAFT};
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 15px 0 15px 35px;
  width: 187px;

  &:hover {
    background-color: #EEE;
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
  padding: 10px;
`;

export const BlockContent = styled.section`
  padding: 8px 0 8px 9px;
`;

export const BlockText = styled.section`
  background-color: rgba(242, 242, 242, 0.54);
  font-family: Lato;
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
  font-family: Lato;
  font-size: 12px;
  font-weight: initial;

  & p {
    color: rgba(33, 33, 33, 0.51);
    letter-spacing: 1px;
    margin: 9px 0;
  }

  & h1 {
    color: #212121;
    font-size: 18px;
    font-weight: bold;
    margin: 9px 0;
  }

  & h2 {
    color: #212121;
    font-size: 14px;
    font-weight: bold;
    margin: 9px 0;
  }

  & h5 {
    color: rgba(33, 33, 33, 0.51);
    font-size: 9px;
    letter-spacing: 1px;
    margin: 9px 0;
  }

  & strong {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }
`;

export const BlockTitle = styled.span`
  text-transform: uppercase;
`;

export const Section = styled.section`
  align-items: center;
  background-color: rgba(242, 242, 242, 0.54);
  color: #212121;
  display: flex;
  font-family: Lato;
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
  background-color: rgba(242, 242, 242, 0.54);
  color: #212121;
  display: flex;
  font-family: Lato;
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
  background-color: rgba(242, 242, 242, 0.54);
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
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 0 0 9px;
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  color: rgba(33, 33, 33, 0.51);
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 0 0 9px;
`;

export const ProductSystem = styled.p`
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 0 0 12px;
`;

export const ProductReference = styled.p`
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 11px;
  letter-spacing: 1px;
  line-height: 1.6;
`;

export const ProductBrand = styled.p`
  color: ${COLOR_MINE_SHAFT};
  font-family: Lato;
  font-size: 11px;
  letter-spacing: 1px;
  line-height: 1.6;
`;
