import styled from 'styled-components';
import { SILVER, MERCURY } from '../../../../config/constants/styled-vars';

export const SelectPaginator = styled.select`
  width: 60px;
  margin: 0px 23px 0px 40px;
`;

export const Paginator = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 15px;
  color: ${SILVER};
  font-size: 12px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: normal;
  border-top: 1px solid ${MERCURY};
  border-bottom: ${({ isSubRows }) =>
    isSubRows ? `1px solid ${MERCURY}` : ''};
`;

export const ArrowPaginator = styled.button`
  color: ${SILVER};
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;
  margin: 0 6px;

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    user-select: none;
  }
`;
