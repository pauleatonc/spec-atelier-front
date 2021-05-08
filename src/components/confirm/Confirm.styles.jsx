import styled from 'styled-components';

export const Root = styled.div`
  background-color: #FAFAFA;
  border-radius: 5px;
  box-shadow: ${({ shadow = true }) => shadow ? '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)' : 'none'};
  width: 493px;
  height: 256px;
  padding: 45px 80px 55px;
  overflow-y: auto;
`;


export const Text = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-family: Roboto;
  color: #797979;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 0.57px;
  text-align: center;
`;

export const Buttons = styled.div`
  margin: 35px 0 0; 
  display: flex;
  justify-content: space-between;
`;