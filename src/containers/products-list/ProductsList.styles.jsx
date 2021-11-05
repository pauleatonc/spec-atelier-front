import styled from 'styled-components';
import {
	COLOR_LIGHTERGREY,
	COLOR_MINE_SHAFT,
	MEDIA_QUERY_SMALL,
} from '../../config/constants/styled-vars';

export const Container = styled.section`
	padding: 16px ${({ withoutPadding }) => (withoutPadding ? '0px' : '81px')};
	${MEDIA_QUERY_SMALL} {
		padding: 0;
	}
`;

export const ListContainer = styled.section`
	padding: 15px 42px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 46px;

	${MEDIA_QUERY_SMALL} {
		grid-template-columns: 1fr;
		padding: 15px 10px;
	}
`;

export const Separator = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${COLOR_LIGHTERGREY};

	${MEDIA_QUERY_SMALL} {
		display: none;
	}
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

	${MEDIA_QUERY_SMALL} {
		padding: 0 20px;
	}
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

export const MobileFilters = styled.section`
	display: none;

	${MEDIA_QUERY_SMALL} {
		display: block;
	}
`;

export const Filters = styled.section`
	${MEDIA_QUERY_SMALL} {
		display: none;
	}
`;
