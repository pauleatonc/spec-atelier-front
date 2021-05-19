import styled from 'styled-components';
import { MEDIA_QUERY_STANDAR_MEDIUM } from '../../config/constants/styled-vars';

export const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	padding: 80px 36px 60px;
	align-items: center;
	justify-content: center;
`;

export const ImageSection = styled.img`
	margin-right: ${({ header }) => (header ? '48px' : '80px')};
	margin-bottom: 40px;
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		margin-right: 0px;
		max-width: 300px;
		max-heigth: 250px;
	}
`;

export const TitleSection = styled.h1`
	font-family: Lato;
	font-size: 25px;
	line-height: 30px;
	font-weight: bold;
	letter-spacing: 1.5px;
	max-width: ${({ header }) => (header ? '400px' : '500px')};
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		width: 90%;
		max-width: 100%;
		text-align: center;
	}
`;

export const SubtitleSection = styled.p`
	font-size: 20px;
	letter-spacing: 1.25px;
	font-weight: normal;
`;
