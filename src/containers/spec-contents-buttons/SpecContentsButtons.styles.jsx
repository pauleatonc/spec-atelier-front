import styled from 'styled-components';
import { SWISS_COFFEE, WHITE } from 'config/constants/styled-vars';

export const ContentButton = styled.div`
  margin: 0 auto 4px auto;
  width: ${({ isTypeTable }) => (isTypeTable ? '965px' : '587px')};
  display: flex;
  justify-content: flex-end;
`;

export const AddIcon = styled.img`
  cursor: pointer;
  position: sticky;
  top: 8px;
  margin-left: 7px;
  width: 45px;
  height: 41px;
  padding: 9px 10px 8px 11px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${SWISS_COFFEE};
  background-color: ${WHITE};
  &:active {
    transform: scale(0.95);
  }
`;
