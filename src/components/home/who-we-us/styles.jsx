import styled from 'styled-components';
import {
	MEDIA_QUERY_SMALL,
	MEDIA_QUERY_STANDAR_MEDIUM,
} from '../../../config/constants/styled-vars';

export const Container = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 100px 0px;
	background-color: #f9f9f9;
	position: relative;
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px 30px;
	}
`;

export const Section = styled.div`
	height: 310px;
	max-width: 350px;
	margin: 0px 35px;
	${MEDIA_QUERY_SMALL} {
		height: auto;
		margin: 30px 0;
	}
`;

export const Icon = styled.img`
	height: 100px;
	margin-bottom: 38px;
	${MEDIA_QUERY_SMALL} {
		height: 85px;
		margin-bottom: 10px;
	}
`;

export const InfoContainer = styled.div`
	colo: rgb(8, 38, 44);
`;

export const Title = styled.h1`
	font-family: 'Akzidenz Grotesk - light';
	font-size: 25px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 1.5px;
`;

export const TextDescription = styled.p`
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-family: 'Lato';
	letter-spacing: 1px;
	padding-right: 20px;
	line-height: 20px;
	margin-bottom: ${({ subtitle }) => (subtitle ? '30px' : '0px')};
	${MEDIA_QUERY_SMALL} {
		font-size: 14px;
		margin-bottom: ${({ subtitle }) => (subtitle ? '20px' : '0px')};
	}
`;

export const BannerSliderContainer = styled.div`
	width: 100%;
	height: 160px;
	position: absolute;
	top: -35px;
	display: flex;
	justify-content: center;
	align-items: center;
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		position: relative;
		height: auto;
		padding-top: 145px;
		padding-bottom: 110px;
	}
`;

export const BannerSlider = styled.div`
	width: 525px;
	height: 160px;
	border-radius: 12px;
	background-color: black;
	box-shadow: 0 2px 4px 0 rgba(201, 198, 198, 0.5);
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		height: 290px;
	}
`;
