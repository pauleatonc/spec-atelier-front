import styled from 'styled-components';

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
