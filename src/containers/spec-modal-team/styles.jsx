import styled from 'styled-components';
import { COLOR_WHITE } from '../../config/constants/styled-vars';

export const Container = styled.section`
	width: 100%;
	max-width: 652px;
	display: flex;
	flex-wrap: wrap;
	background-color: ${COLOR_WHITE};
	padding: 40px;
	border-radius: 8px;
`;

export const ButtonCloseContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: ${({ mBottom = 35 }) => `${mBottom}px`};
	justify-content: ${({ flexEnd = false }) =>
		flexEnd ? `flex-end` : `space-between`};
`;

export const Title = styled.h1`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
`;

export const SearcherContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-bottom: 25px;
`;

export const Disclaimer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 58px;
	background-color: rgba(58, 192, 172, 0.08);
	border-radius: 2px;
	margin-bottom: 25px;
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

export const InputMailContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 4;
	max-width: 350px;
	margin-left: 13px;
	margin-right: 17px;
`;

export const Searcher = styled.input`
	width: 100%;
	border-radius: 4px;
	border: solid 1px
		${({ inputMailInvalid = false }) =>
			inputMailInvalid ? `#ff001f` : `#d6d6d6`};
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

export const PermissionSelectorContainer = styled.div`
	flex: 1;
`;

export const PermisionLabel = styled.p`
	font-family: Lato;
	font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
	font-weight: bold;
	color: #42bfad;
	margin-right: 5px;
`;

export const IconArrowDown = styled.img`
	font-size: 12px;
	color: #42bfad;
`;

export const TitleConfigContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 13px;
	border-bottom: 1px solid #e5e5e5;
	width: 100%;
`;

export const TitleConfig = styled.h1`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
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

export const NewMemberButton = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-bottom: 35px;
	margin-top: 20px;
`;

export const AddIcon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 18px;
`;

export const AddMemberLabel = styled.p`
	color: #45c3b1;
	font-family: Lato;
	font-size: 12px;
	font-weight: bold;
`;

export const ContainerTeam = styled.div`
	width: 100%;
`;

export const InfoUserContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 60px;
	align-items: center;
`;

export const InfoUser = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ItemInfo = styled.p`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
`;

export const DeleteUser = styled.div`
	cursor: pointer;
	display: flex;
`;

export const LabelDelete = styled.i`
	margin-right: 8px;
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	color: #757575;
`;

export const IconDelete = styled.i`
	color: #757575;
`;

export const ResendLabel = styled.span`
	cursor: pointer;
	font-family: Lato;
	font-size: 12px;
	color: #ff7e45;
`;

export const ErrorInput = styled.p`
	position: absolute;
	font-family: Lato;
	font-size: 12px;
	color: #ff001f;
	bottom: -15px;
	left: 5px;
`;
