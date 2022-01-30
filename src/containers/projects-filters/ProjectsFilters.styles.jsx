import styled from 'styled-components';
import { DARKESTGREY, MINE_SHAFT, SILVER, GALLERY } from '../../config/constants/styled-vars';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px 0 48px;
`;

export const InputContainer = styled.div`
  flex-basis: 40%;
  position: relative;
`;

export const IconSearch = styled.span`
  position: absolute;
  left: 16px;
  top: 12px;
`;

export const SortContainer = styled.section`
  padding-left: 32px;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  display: flex;
  align-items: center;
`

export const Filters = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`

export const FilterSelect = styled.select`
  border-radius: 22px;
  background-color: ${GALLERY};
  border: none;
  height: 36px;
  padding-left: 40px;
  width: 490px;
  margin-bottom: 23px;
  opacity: .5;
  font-family: "Lato";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};

  &:focus {
    outline: none;
  }
`;

export const FilterOptions = styled.section`
  margin-left: 45px;
`
export const FilterOption = styled.option`
  font-family: "Lato";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
`;

export const Selector = styled.select`
  border: 0; 
  outline: 0;
  min-width: 140px;
  display:flex;
  flex: 1;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 2px solid ${DARKESTGREY};
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
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
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  border-radius: 0;
  width: 240px;
  align-items: center;
`
export const DropIcon = styled.img`
  cursor: pointer;
`;
