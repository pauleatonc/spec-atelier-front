import styled from 'styled-components';

export const Container = styled.section`
	align-items: center;
	background-color: #757575;
	border-radius: ${({ size = 24 }) => `${size / 2}px`};
	display: flex;
	justify-content: center;
	height: ${({ size = 24 }) => `${size}px`};
	width: ${({ size = 24 }) => `${size}px`};
	z-index: ${({ zIndex = 1 }) => `${zIndex}`};
	margin-left: ${({ horizontalList }) => (horizontalList ? `-5px` : `0`)};
	:nth-child(odd) {
		background-color: ${({ horizontalList }) => horizontalList && `#42bfad`};
	}
`;

export const ImageProfile = styled.img`
	width: 100%;
	height: 100%;
	border-radius: ${({ size = 24 }) => `${size / 2}px`};
`;

export const LetterNameUser = styled.p`
	color: #ffffff;
	font-family: Lato;
	font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
`;
