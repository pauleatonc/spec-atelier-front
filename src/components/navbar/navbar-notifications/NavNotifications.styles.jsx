import styled from 'styled-components';
import {
	COLOR_BLACK,
	COLOR_PRIMARY,
	COLOR_WHITE,
	COLOR_GREY,
} from '../../../config/constants/styled-vars';

export const NotificationsButton = styled.div`
	color: ${({ isOpen }) => (!isOpen ? COLOR_BLACK : COLOR_PRIMARY)};
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	cursor: pointer;
    width: 5%;
	margin-left: auto; 
    margin-right: 17px;
`;

export const NotificationsOption = styled.section`
	width: 360px;
	position: absolute;
	right: 75px;
	display: ${({ show }) => !show && 'none'};
	top: 69px;
	z-index: 2;
	box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
	&:before {
		content: '';
		width: 25px;
		height: 25px;
		position: absolute;
		top: -4px;
		background: white;
		transform: rotate(45deg) skew(15deg, 15deg);
		right: 13px;
		box-shadow: -5px -5px 2px -4px rgb(0 0 0 / 25%);
		border-radius: 4px;
		z-index: -100;
	}
	@media (max-width: 500px){
		right: 52px !important;
	}
	@media (max-width: 1115px) and (min-width: 500px) {
		right: 58px !important;
	}
`;

export const Option = styled.div`
	height: 60px;
	font-family: Lato;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
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
		border: 3px rgba(117, 117, 117, 0.3);
		background: rgba(117, 117, 117, 0.3);
		border-right: 6px transparent solid;
	} 
`;

export const Separator = styled.div`
	background-color: #c8c8c8;
	height: 1px;
	width: 100%;
`;

export const ProfilePictureContainer = styled.div`
	width: 22px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`;

export const ProfilePictureContainer2 = styled.div`
	padding: 36px;
	padding-right: 4%;
	padding-top: 30px;
	height: 30px;
	border-radius: 50%;
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
    color: #42bfad;
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
    background-color: #31cbb7;
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
	color: #757575;
`;

export const LinkSeeAll = styled.a`
	margin-top: 16px;
	font-family: Lato;
    font-size: 14px;
    margin-bottom: 2px;
    text-align: right;
    color: #42bfad;
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
	color: #42bfad;
	text-decoration: none;
	float: right;
	margin-left: 10px;
	cursor: pointer;
`;

export const CountNoti = styled.span`
	width: 15px;
    height: 15px;
    background-color: red;
    color: #fff;
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
	color: #757575;
	text-align:center;
`;
