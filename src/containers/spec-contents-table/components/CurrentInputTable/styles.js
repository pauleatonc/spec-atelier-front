import styled from 'styled-components';
import {
  BLACK,
  CARIBBEAN_GREEN,
} from '../../../../config/constants/styled-vars';

export const TableInput = styled.input`
  border-style: none;
  outline: none;
  width: 58px;
  border-bottom: solid 1px rgba(${BLACK}, 0.28);
  font-size: 13px;
  caret-color: ${CARIBBEAN_GREEN};
  &:active,
  &:focus {
    border-bottom: solid 1px ${CARIBBEAN_GREEN};
  }
`;
