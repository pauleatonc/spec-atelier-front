import styled from 'styled-components';
import { PUERTO_RICO } from '../../../../config/constants/styled-vars';

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
		color: ${PUERTO_RICO};
	}
`;

export const WaitingDisclaimer = styled.p`
	font-family: Lato;
	font-size: 10px;
	margin-left: 10px;
	opacity: 0.6;
`;
