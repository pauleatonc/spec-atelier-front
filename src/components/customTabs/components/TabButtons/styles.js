import styled from 'styled-components';

import {
	COLOR_LIGHTERGREY,
	COLOR_LIGHTGREY,
	COLOR_PRIMARY,
} from '../../../../config/constants/styled-vars';

export const ContainerTabs = styled.div`
	display: flex;
	border-bottom: solid 1px ${COLOR_LIGHTERGREY};
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin-bottom: 40px;
`;

export const ButtonTab = styled.button`
	color: ${({ isActive }) => (isActive ? COLOR_PRIMARY : COLOR_LIGHTGREY)};
	margin: 0 24px;
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	background: transparent;
	border: none;
	outline: none;
	position: relative;
	cursor: pointer;
	::after {
		content: '';
		position: absolute;
		height: 3px;
		width: 100%;
		left: 0;
		bottom: -14px;
		background-color: ${COLOR_PRIMARY};
		display: ${({ isActive }) => (isActive ? 'block' : 'none')};
	}
`;

export const ProfileStatsTabs = styled.div`
	display: flex;
	padding: 15px;
	background-color: #fafafa;
`;

export const ProfileStatsButtonTab = styled.div`
	color: ${({ isActive }) => (isActive ? '#ffffff' : COLOR_PRIMARY)};
	cursor: pointer;
	margin: 0px 12px;
	padding: 7px 20px;
	border-radius: 50px;
	font-family: Lato;
	font-size: 14px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	background-color: ${({ isActive }) =>
		isActive ? COLOR_PRIMARY : 'transparent'};
`;
