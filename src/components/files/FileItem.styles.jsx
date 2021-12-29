import styled from 'styled-components';
import {
	COLOR_BLACK,
	COLOR_LIGHTGREY,
	ALTO,
} from '../../config/constants/styled-vars';

// import dwgIcon from '../../assets/images/icons/dwg.svg';
// import bimSource from '../../assets/images/icons/bim.svg';
// import pdfIcon from '../../assets/images/icons/pdf.svg';

export const Container = styled.div`
	min-width: 185px;
	height: 38px;
	border-radius: 9px;
	border: solid 1px ${ALTO};
	display: flex;
	padding: 6px 12px;
	align-items: center;
	position: relative;
`;

export const Icon = styled.div`
	height: 24px;
	width: 24px;
`;

export const InfoContainer = styled.div`
	diplay: flex;
	flex-direction: column;
`;

export const Name = styled.div`
	font-family: Lato;
	font-size: 12px;
	letter-spacing: 1px;
	color: ${COLOR_BLACK};
`;

export const Size = styled.div`
	font-size: 10px;
	letter-spacing: 0.83px;
	color: ${COLOR_LIGHTGREY};
`;

export const Buttons = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

export const Button = styled.button``;

export const Text = styled.div``;
