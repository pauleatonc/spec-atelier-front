import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR_BLACK } from '../../config/constants/styled-vars';

export const Container = styled.section`
  min-height: 200px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  aling-items: center;
  margin: auto 0;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled.section`
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  text-align: center;
  color: ${COLOR_BLACK};
  margin: 16px 0;
`

export const Title = styled.div`
  font-weight: bold;
`;

export const Text = styled.div``;

export const ButtonContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
`;