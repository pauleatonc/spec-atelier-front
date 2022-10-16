import styled from 'styled-components';
import { ALABASTER, BLACK, MINE_SHAFT } from '../../config/constants/styled-vars';

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  background-color: ${ALABASTER};
  border-radius: 5px;
  box-shadow: 0 11px 15px -7px rgba(${BLACK}, 0.2), 0 9px 46px 8px rgba(${BLACK}, 0.12), 0 24px 38px 3px rgba(${BLACK}, 0.14);
  width: 350px;
  height: 200px;
  padding: 20px;
  overflow-y: auto;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: Lato;
  color: ${MINE_SHAFT};
  line-height: 1.69;
  letter-spacing: 1px;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px; 
`;
