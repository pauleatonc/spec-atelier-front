import styled from 'styled-components';
import {
    COLOR_BLACK,
    COLOR_PRIMARY,
    NAVBAR_HEIGHT,
    COLOR_WHITE,
    COLOR_GREY,
} from '../../config/constants/styled-vars';

export const ProfileButton = styled.div`
	color: ${({ isOpen }) => (!isOpen ? COLOR_BLACK : COLOR_PRIMARY)};
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	cursor: pointer;
    width: 5%;
`;

export const ProfileOptions = styled.section`
	width: 360px;
	position: absolute;
	right: 82px;
	display: ${({ show }) => !show && 'none'};
	top: ${NAVBAR_HEIGHT};
	z-index: 2;
`;

export const Option = styled.div`
	height: 60px;
	font-family: Lato;
	font-size: 12px;
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
	height: 327px;
	overflow: overlay;
	background-color: ${COLOR_WHITE};
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
		0 1px 1px 0 rgba(0, 0, 0, 0.14);
	&::-webkit-scrollbar {
		width: 13px;
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
	margin-left: 27px;
	padding-bottom: 36px;
	padding-right: 4%;
	padding-top: 30px;
	height: 30px;
	width: 100px;
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
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 23px;
`;

export const InfoUserName = styled.span`
	font-family: Lato;
	font-size: 12px;
	margin-bottom: 2px;
	color: ${({ gray }) => (gray ? COLOR_GREY : COLOR_BLACK)};
	b{
		font-weight: bold;
		color: #656565;
	}
`;

export const InfoUserName2 = styled.label`
	font-family: Lato;
	font-size: 12px;
	font-weight: bold;
	margin-bottom: 2px;
	color: ${({ gray }) => (gray ? COLOR_GREY : COLOR_BLACK)};
`;

export const ListHeader = styled.div`
    padding: 8%;
`;

export const TitleHeader = styled.label`
    font-family: Lato;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
    text-align: left;
`;

export const LinkHeader = styled.a`
    font-family: Lato;
    font-size: 12px;
    margin-bottom: 2px;
    text-align: right;
    color: #42bfad;
    text-decoration: none;
    float: right;
`;

export const ListItem = styled.div`
	padding-top: 23px;
	padding-bottom: 25px;
	display: flex;
	
`;

export const ContentActions = styled.div`
	display: flex;
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
    font-size: 12px;
	letter-spacing: 1px;
    margin-bottom: 2px;
    text-align: left;
	color: #757575;
`;

export const LinkSeeAll = styled.a`
	margin-top: 16px;
	font-family: Lato;
    font-size: 12px;
    margin-bottom: 2px;
    text-align: right;
    color: #42bfad;
    text-decoration: none;
    float: right;
	margin-left: 43px;
`;

export const UndoSpan = styled.span`
	margin-top: 16px;
	font-family: Lato;
	font-size: 12px;
	margin-bottom: 2px;
	text-align: right;
	color: #42bfad;
	text-decoration: none;
	float: right;
	margin-left: 53px;
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
