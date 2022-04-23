import styled from 'styled-components';
import { BLACK, WHITE, Z_INDEX_ALERT } from 'config/constants/styled-vars';

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  background-color: rgba(${BLACK}, 0.87);
  border-radius: 4px;
  box-shadow: 0 3px 5px -1px rgba(${BLACK}, 0.2),
    0 1px 18px 0 rgba(${BLACK}, 0.12), 0 6px 10px 0 rgba(${BLACK}, 0.14);
  color: ${WHITE};
  cursor: pointer;
  font-family: Lato;
  font-size: 14px;
  left: 0;
  letter-spacing: 0.25px;
  line-height: 1.43;
  margin: 0 auto;
  padding: 14px 16px;
  position: fixed;
  right: 0;
  top: 67px;
  width: fit-content;
  z-index: ${Z_INDEX_ALERT};
`;
