import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 12px;
	justify-content: space-between;
`;

export const ContainerMail = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const Email = styled.p`
	font-family: Lato;
	font-size: 12px;
	margin-left: 14px;
	&:hover {
		color: #42bfad;
	}
`;
