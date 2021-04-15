import styled from 'styled-components';
import { COLOR_LIGHTERGREY } from '../../config/constants/styled-vars';

export const Container = styled.section`
	padding: 16px ${({ withoutPadding }) => (withoutPadding ? '0px' : '81px')};
`;

export const ListContainer = styled.section`
	padding: 42px;
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
