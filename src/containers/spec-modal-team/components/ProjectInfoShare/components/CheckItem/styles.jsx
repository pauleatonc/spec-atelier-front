import styled from 'styled-components';
import { COLOR_WHITE_SMOKE } from '../../../../../../config/constants/styled-vars';

export const ListItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	font-family: Lato;
	font-size: 13px;
	height: 30px;
	letter-spacing: 1.08px;
	padding: ${({ padding }) => padding || '0'};

	&:hover {
		background-color: ${COLOR_WHITE_SMOKE};
	}

	& span {
		flex: 1;
	}
`;

export const ArrowIcon = styled.img`
	cursor: pointer;
`;

export const ContainerUsers = styled.div`
	display: flex;
`;
