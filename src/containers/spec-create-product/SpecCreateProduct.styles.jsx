import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ALABASTER,
  ALTO,
  DUSTY_GRAY,
  MINE_SHAFT,
  WHITE,
  BLACK,
  DUSTY_GRAY_OPACITY,
} from '../../config/constants/styled-vars';

export const Root = styled.div`
	background-color: ${ALABASTER};
	border-radius: 5px;
	box-shadow: ${({ shadow = true }) => shadow ? `0 11px 15px -7px rgba(${BLACK}, 0.2), 0 9px 46px 8px rgba(${BLACK}, 0.12), 0 24px 38px 3px rgba(${BLACK}, 0.14)` : 'none'};
	display: grid;
	grid-template-rows: 76px auto 60px;
	height: 522px;
	width: 952px;
`;

Root.defaultProps = {
  shadow: true,
};
Root.propTypes = {
  shadow: PropTypes.bool,
};

export const Loading = styled.div`
	align-items: center;
	color: ${MINE_SHAFT};
	display: flex;
	font-size: 16px;
	font-weight: bold;
	height: 100%;
	justify-content: center;
	letter-spacing: 1px;
	width: 100%;
`;

export const Header = styled.section`
	align-items: center;
	border-bottom: 1px solid ${DUSTY_GRAY_OPACITY};
	display: flex;
	padding: 25px 40px;
	position: relative;
	width: 100%;
`;

export const Title = styled.span`
	color: ${MINE_SHAFT};
	font-size: 16px;
	font-weight: bold;
	letter-spacing: 1px;
	width: 100%;
`;

export const Body = styled.section`
	padding: 18px 40px 25px;
	width: 100%;
`;

export const Section = styled.section`
	align-items: ${({ alignItems = 'initial' }) => alignItems};
	display: ${({ display = 'initial' }) => display};
	grid-template-columns: ${({ gridTemplateColumns = 'initial' }) => gridTemplateColumns};
	grid-template-rows: ${({ gridTemplateRows = 'initial' }) => gridTemplateRows};
	grid-gap: ${({ gridGap = '20px' }) => gridGap};
	padding: ${({ padding = 'initial' }) => padding};
	width: 100%;
`;

Section.defaultProps = {
  alignItems: 'initial',
  display: 'block',
  gridGap: '20px',
  gridTemplateColumns: 'initial',
  gridTemplateRows: 'initial',
  padding: 'initial',
};
Section.propTypes = {
  alignItems: PropTypes.string,
  display: PropTypes.string,
  gridGap: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  padding: PropTypes.string,
};

export const Footer = styled.section`
	display: flex;
	justify-content: flex-end;
	padding: 0 40px 25px;
	width: 100%;
`;

export const Gap = styled.div`
	display: inline-block;
	height: 10px;
	width: 10px;
`;

export const ButtonSelectorContent = styled.div`
	white-space: nowrap;
	outline: 0;
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${DUSTY_GRAY};
	border-radius: 9px;
	padding: 0 12px 0 18px;
	background-color: ${({ disabled }) => disabled ? ALTO : WHITE};
`;

export const InputButton = styled.input`
  align-items: center;
  background-color: transparent;
  color: ${MINE_SHAFT};
  cursor: pointer;
  display: inline-flex;
  height: 38px;
  font-size: 12px;
  letter-spacing: 1px;
  overflow: hidden;
  padding-left: 24px
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  border: 0;

  &:active, &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${MINE_SHAFT};
  }

  &:disabled {
    background-color: ${ALTO};
    cursor: not-allowed;
  }
`;

export const DropIcon = styled.img`
	cursor: pointer;
`;
