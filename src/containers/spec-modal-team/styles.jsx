import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Container = styled.section`
	width: 100%;
	max-width: 652px;
	display: flex;
	flex-wrap: wrap;
	background-color: ${COLOR_WHITE};
	padding: 25px 30px 27px 44px;
	border-radius: 8px;
`;

export const ButtonCloseContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const Title = styled.h1`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 35px;
`;

export const SearcherContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
`;

export const DisclaimerUserNotSpec = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 58px;
	background-color: rgba(58, 192, 172, 0.08);
	border-radius: 2px;
	margin: 25px 0px;
`;

export const IconInfo = styled.i`
	color: #3ac0ad;
	margin-right: 12px;
`;

export const DescDisclaimer = styled.p`
	font-family: Lato;
	font-size: 12px;
	max-width: 480px;
`;

export const EmailDesc = styled.span`
	font-weight: bold;
`;

export const Label = styled.h3`
	font-family: Lato;
	font-size: 12px;
	font-weight: bold;
	flex: 1;
`;

export const Searcher = styled.input`
	flex: 4;
	max-width: 350px;
	margin-left: 13px;
	margin-right: 17px;
	border-radius: 4px;
	border: solid 1px #d6d6d6;
	font-family: Lato;
	font-size: 12px;
	height: 34px;
	padding-left: 15px;
	caret-color: #45c3b1;
	&::placeholder {
		color: #d6d6d6;
	}
	&:focus {
		outline: none;
	}
`;

export const Permissions = styled.p`
	font-family: Lato;
	font-size: 12px;
	font-weight: bold;
	flex: 1;
`;

export const TitleConfig = styled.h1`
	width: 100%;
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	padding-bottom: 13px;
	border-bottom: 1px solid #e5e5e5;
`;

export const Message = styled.textarea`
	width: 100%;
	resize: none;
	min-height: 160px;
	background-color: rgba(0, 0, 0, 0.06);
	border: none;
	padding: 22px;
	font-family: Lato;
	font-size: 14px;
	margin-bottom: 30px;
	&:active,
	&:focus {
		outline: 0;
	}
`;

export const ContainerButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
