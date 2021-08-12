import styled from 'styled-components';

export const TableInput = styled.input`
	border-style: none;
	outline: none;
	width: 58px;
	border-bottom: solid 1px rgba(0, 0, 0, 0.28);
	font-family: Lato;
	font-size: 13px;
	caret-color: #00c3ac;
	&:active,
	&:focus {
		border-bottom: solid 1px #00c3ac;
	}
`;
