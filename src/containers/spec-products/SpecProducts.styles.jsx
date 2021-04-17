import styled from 'styled-components';

export const Overlay = styled.div`
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 0;
`;

export const Root = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
	width: calc(100% - 360px);
	z-index: 4;
`;

export const Body = styled.section`
	height: 100%;
	overflow-y: auto;
	padding: 20px 46px 15px;
	width: 100%;
`;
