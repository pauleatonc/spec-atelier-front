import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  WHITE,
  PRIMARY,
  SECONDARY,
  MEDIA_QUERY_SMALL,
  MINE_SHAFT,
  JAVA,
} from '../../config/constants/styled-vars';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  font-family: 'Lato', sans-serif;
`;

export const Content = styled.div`
  padding: 60px 120px;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  ${MEDIA_QUERY_SMALL} {
    padding: 60px 60px;
  }
`;

export const LoginTitle = styled.p`
  font-family: 'Akzidenz Grotesk - condenced', sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.88px;
`;

export const HeaderText = styled.section`
  font-size: 12px;
  justify-content: flex-end;
  display: flex;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  font-style: normal;
  margin-bottom: 100px;
`;

export const RegisterText = styled.span`
  font-weight: normal;
`;

export const RegisterLink = styled(Link)`
  font-weight: bold;
  color: ${PRIMARY};
  text-decoration: none;
  margin-left: 5px;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  font-style: normal;
  font-size: 12px;
`;

export const ButtonGoogleContainer = styled.section`
  margin: 40px 0;
`;

export const TextContent = styled.div`
  padding: 32px 0 8px;
`;

export const TextInfo = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${({ size = 14 }) => size}px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  margin-bottom: 35px;
  font-family: Lato;
  color: ${MINE_SHAFT};
`;

export const Form = styled.form`
  margin-top: 35px;
`;

export const ButtonLogin = styled.button`
  background-color: ${SECONDARY};
  color: ${WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 34px;
  font-size: 16px;
  font-family: 'Lato';
  font-stretch: normal;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 20px;
  min-width: 150px;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  outilne: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`;

export const KeepSessionContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-bottom: 22px;
`; 

export const ButtonText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  padding: 16px 0;
`;

export const TermsText = styled.div`
  margin: 16px 0;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  display: flex;
`;

export const TermsLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${JAVA};
  margin-left: 4px;
  clear: both;
  overflow: hidden;
  white-space: nowrap;
`;
