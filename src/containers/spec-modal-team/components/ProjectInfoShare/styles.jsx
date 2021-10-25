import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	margin: 30px 0;
`;

export const SelectAllProject = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 30px;
`;

export const AllProjectLabel = styled.p`
	font-family: Lato;
	font-size: 13px;
	letter-spacing: 1.08px;
`;

export const IconCheck = styled.i`
	font-size: 18px;
	margin-right: 9px;
	cursor: pointer;
`;

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
