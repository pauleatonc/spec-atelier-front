import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-bottom: 100px;
`;

export const BorderContainer = styled.div`
	border: ${({ isProfileStatsTabs }) =>
		isProfileStatsTabs ? '1px solid #e9e9e9' : ''};
`;
