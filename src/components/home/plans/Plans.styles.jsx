import styled from 'styled-components';
import {
	COLOR_BLACK,
	MEDIA_QUERY_SMALL,
} from '../../../config/constants/styled-vars';

import PLANS_BACKGROUND from '../../../assets/images/home/plans_background.png';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: url(${PLANS_BACKGROUND});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	color: ${COLOR_BLACK};
	width: 100%;
	padding-top: 83px;
	padding-bottom: 200px;
	${MEDIA_QUERY_SMALL} {
		background: #fae5da;
		flex-direction: column;
		padding-bottom: 57px;
	}
`;

export const Title = styled.h1`
	width: 100%;
	font-family: Lato;
	font-size: 25px;
	text-align: center;
	margin-bottom: 80px;
`;

export const ButtonContainer = styled.div`
	width: 30%;
	padding: 16px 0 0 0;
	flex: 1;
	${MEDIA_QUERY_SMALL} {
		width: 80%;
		display: flex;
		margin-bottom: 30px;
		justify-content: center;
	}
`;
