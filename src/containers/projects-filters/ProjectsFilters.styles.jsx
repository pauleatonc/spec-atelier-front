import styled from 'styled-components';
import { MINE_SHAFT, SILVER } from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px 0 48px;
`;

export const SortContainer = styled.section`
  padding-left: 32px;
  line-height: normal;
  color: ${MINE_SHAFT};
  display: flex;
  align-items: center;
`;

export const FilterSortText = styled.div`
  white-space: nowrap;
  padding: 4px 16px 8px 16px;
  border: 0;
  outline: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 2px solid ${SILVER};
  font-size: 12px;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  border-radius: 0;
  width: 240px;
  align-items: center;
`;

export const DropIcon = styled.img`
  cursor: pointer;
`;
