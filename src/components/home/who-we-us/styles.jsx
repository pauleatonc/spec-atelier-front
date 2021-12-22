import styled from 'styled-components';
import {
	MEDIA_QUERY_SMALL,
	MEDIA_QUERY_STANDAR_MEDIUM,
	BOTTLE_GREEN,
	ALABASTER,
	WHITE,
	GRAY_OPACITY,
} from '../../../config/constants/styled-vars';

export const Container = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 200px 0px 100px 0px;
	background-color: ${ALABASTER};
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
	colo: ${BOTTLE_GREEN};
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
	width: 525px;
	height: 160px;
	position: absolute;
	top: -35px;
	${MEDIA_QUERY_STANDAR_MEDIUM} {
		position: relative;
		height: auto;
		padding-top: 145px;
		padding-bottom: 110px;
		width: 100%;
	}
`;

export const BannerSlider = styled.div`
	display: flex !important;
	align-items: center;
	width: 100%;
	height: 160px;
	border-radius: 12px;
	box-shadow: 0 2px 4px 0 ${GRAY_OPACITY};
	text-align: center;
	overflow: hidden;
	background-color: ${WHITE};

	img {
		width: 230px;
		height: 100%;
		object-fit: cover;
	}

	${MEDIA_QUERY_STANDAR_MEDIUM} {
		height: 290px;
		flex-direction: column;
		img {
			width: 100%;
			height: 156px;
		}
	}
`;

export const TextSlider = styled.div`
	font-family: Lato;
	font-size: 18px;
	font-weight: bold;
	box-sizing: border-box;
	padding: 0px 33px;
	flex: 1;
	justify-content: center;
	align-items: center;
	display: flex;
`;
