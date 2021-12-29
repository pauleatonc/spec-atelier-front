import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_SILVER,
  COLOR_PUERTO_RICO,
  COLOR_BOULDER,
  COLOR_TURQUOISE,
  COLOR_RED,
  COLOR_BLACK_OPACITY_GRAY_SECONDARY,
  COLOR_GRAY_OPACITY_SECONDARY,
  COLOR_GRAY_OPACITY_TRANSPARENT
} from '../../../config/constants/styled-vars';

export const NotificationsButton = styled.div`
	color: ${({ isOpen }) => (!isOpen ? COLOR_BLACK : COLOR_PRIMARY)};
	display: flex;
	height: 57px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
  width: 71px;
	margin-left: auto; 
  margin-right: 16px;
`;

export const NotificationsOption = styled.section`
	width: 360px;
	height: ${({ totalNotifications }) => (totalNotifications > 1 ? '446px' : 'auto')};
	position: absolute;
	right: 75px;
	display: ${({ show }) => !show && 'none'};
	top: 69px;
	z-index: 2;
	box-shadow: 0 -1px 4px 0 ${COLOR_GRAY_OPACITY_SECONDARY}, 0 2px 4px 0 ${COLOR_GRAY_OPACITY_SECONDARY};
	&:before {
		content: '';
		width: 25px;
		height: 25px;
		position: absolute;
		top: -4px;
		background: ${COLOR_WHITE};
		transform: rotate(45deg) skew(15deg, 15deg);
		right: 13px;
		box-shadow: -5px -5px 2px -4px ${COLOR_GRAY_OPACITY_TRANSPARENT};
		border-radius: 4px;
		z-index: -100;
	}
`;

export const Option = styled.div`
	height: 60px;
	font-family: Lato;
	font-size: 14px;
	letter-spacing: 1px;
	background-color: ${COLOR_WHITE};
	display: flex;
	flex: 1;
	align-items: center;
	padding: 30px;
	color: ${COLOR_BLACK};
	:hover {
		color: ${COLOR_PRIMARY};
	}
	cursor: pointer;
	text-decoration: none;
`;

export const OptionsContent = styled.section`
	width: 360px;
	height: ${({ totalNotifications }) => (totalNotifications > 1 ? '446px' : 'auto')};
	overflow: overlay;
	background-color: ${COLOR_WHITE};
	&::-webkit-scrollbar {
		width: 8px;
  	height: 120px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		border: 3px ${COLOR_BLACK_OPACITY_GRAY_SECONDARY};
		background: ${COLOR_BLACK_OPACITY_GRAY_SECONDARY};
		border-right: 6px transparent solid;
	} 
`;

export const Separator = styled.div`
	background-color: ${COLOR_SILVER};
	height: 1px;
`;

export const NotificationsIcon = styled.div`
	width: 22px;
	height: 30px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`;

export const ProfilePictureImage = styled.img`
	width: 59.8px;
	border-radius: 33px;
`;

export const ProfileInfo = styled.div`
	display: flex;
	align-items: center;
	padding-left: 30px;
`;

export const ContainerNameUser = styled.div`
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 10px;
	margin-top: 44px;
`;

export const InfoUserName = styled.p`
	font-family: Lato;
	font-size: 14px;
	margin-bottom: 2px;
	color: ${({ gray }) => (gray ? COLOR_GREY : COLOR_BLACK)};
`;

export const InfoUserName2 = styled.label`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 2px;
	color: ${({ gray }) => (gray ? COLOR_GREY : COLOR_BLACK)};
`;

export const ListHeader = styled.div`
  padding: 8%;
	padding-left: 26px;
	padding-bottom: 12px;
`;

export const TitleHeader = styled.label`
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 2px;
	text-align: left;
`;

export const LinkHeader = styled.a`
	font-family: Lato;
	font-size: 14px;
	margin-bottom: 2px;
	text-align: right;
	color: ${COLOR_PUERTO_RICO};
	text-decoration: none;
	margin-left: 155px;
`;

export const ListItem = styled.div`
	padding-top: 23px;
	display: flex;
	background-color: ${({ newItem }) => (newItem ? '#42bfad26' : 'none')};
`;

export const ContentActions = styled.div`
	margin-bottom: 64px;
	display: flex;
	margin-top: 5px;
`;

export const ContentPoint = styled.div`
	padding-right: 10px;
`;

export const NewPoint = styled.span`
	width: 12px;
	height: 12px;
	border-radius: 10px;
	background-color: ${COLOR_TURQUOISE};
	margin-left: 10px;
	margin-top: 10px;
	position: relative;
	z-index: 2;
	float: left;
	margin-right: -22px;
`;

export const ActionPerformed = styled.label`
	margin-top: 16px;
	font-family: Lato;
	font-size: 14px;
	letter-spacing: 1px;
	margin-bottom: 2px;
	text-align: left;
	color: ${COLOR_BOULDER};
`;

export const LinkSeeAll = styled.a`
	margin-top: 16px;
	font-family: Lato;
	font-size: 14px;
	margin-bottom: 2px;
	text-align: right;
	color: ${COLOR_PUERTO_RICO};
	text-decoration: none;
	float: right;
	margin-left: 10px;
`;

export const UndoSpan = styled.span`
	margin-top: 16px;
	font-family: Lato;
	font-size: 14px;
	margin-bottom: 2px;
	text-align: right;
	color: ${COLOR_PUERTO_RICO};
	text-decoration: none;
	float: right;
	margin-left: 10px;
	cursor: pointer;
`;

export const CountNoti = styled.span`
	width: 15px;
	height: 15px;
	background-color: ${COLOR_RED};
	color: ${COLOR_WHITE};
	position: absolute;
	z-index: 1;
	border-radius: 21px;
	font-size: 11px;
	text-align: center;
	margin-top: -14px;
	margin-left: 16px;
	padding-top: 2px;
	font-weight: bold;
`;

export const ContentPrimary = styled.div`
`;

export const LoadingNoti = styled.label`
	color: ${COLOR_BOULDER};
	text-align:center;
`;
