import styled from 'styled-components';
import {
	COLOR_LIGHTERGREY,
	COLOR_MINE_SHAFT,
} from '../../config/constants/styled-vars';

export const Container = styled.section`
	padding: 16px ${({ withoutPadding }) => (withoutPadding ? '0px' : '81px')};
`;

export const ListContainer = styled.section`
	padding: 15px 42px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 46px;
`;

export const Separator = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${COLOR_LIGHTERGREY};
`;

export const PaddingContainer = styled.div`
	padding: 0 81px;
`;

export const BodyHeader = styled.section`
	align-items: center;
	color: ${COLOR_MINE_SHAFT};
	display: grid;
	font-family: Lato;
	font-size: 12px;
	grid-template-columns: 50% 50%;
	height: 24px;
	letter-spacing: 1px;
	margin-top: 15px;
`;

export const Sort = styled.section`
	display: flex;
	justify-content: flex-start;
`;

export const Total = styled.section`
	align-items: center;
	display: flex;
	justify-content: flex-end;
`;
