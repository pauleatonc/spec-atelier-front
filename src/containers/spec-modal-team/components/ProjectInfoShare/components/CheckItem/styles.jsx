import styled from 'styled-components';

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
		background-color: rgba(235, 234, 234, 0.5);
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
