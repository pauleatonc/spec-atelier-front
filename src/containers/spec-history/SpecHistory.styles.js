import styled from 'styled-components';
import {
  BLACK,
  BLACK_OPACITY_DARK,
  BOULDER,
  CONCRETE,
  CONCRETE_OPACITY,
  DUSTY_GRAY_RGB,
  MEDIA_QUERY_MEDIUM_MAX,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_SMALL_MAX,
  MERCURY,
  MINE_SHAFT,
  PUERTO_RICO,
  PUERTO_RICO_OPACITY,
  SILVER,
  WHITE,
} from '../../config/constants/styled-vars';

export const ContainerTable = styled.div`
  border: solid 1px ${MERCURY};
  background-color: ${WHITE};
  height: fit-content;
  width: 65%;
  min-height: 630px;
`;

export const HistoryChangeManagementContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 20px;
  div:first-child {
    text-align: right;
  }
  div:last-child {
    text-align: left;
  }
  section:last-child {
    display: none;
  }
`;

export const Item = styled.div`
  color: ${({ active }) => (active ? PUERTO_RICO : BOULDER)};
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemText = styled.span`
  height: 17px;
  font-size: 16px;
  font-weight: bold;
  line-height: 0.9;
  border-bottom: ${({ active }) => active && `solid 2px ${PUERTO_RICO}`};
`;

export const Separator = styled.section`
  width: 2px;
  height: 16px;
  margin: 4px 32px 0;
  border: solid 1px rgba(${DUSTY_GRAY_RGB}, 0.32);
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
`;

export const SearchFilterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 95%;
  margin-top: 5px;
  ${MEDIA_QUERY_SMALL} {
    justify-content: center;
  }
`;

export const SearchContainer = styled.section`
  width: 237px;
`;

export const FilterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 1px;
  color: ${MINE_SHAFT};
  width: 237px;
  font-size: 12px;
  ${MEDIA_QUERY_SMALL} {
    margin-top: 8px;
  }
`;

export const Label = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 4px 0 12px;
`;

export const NameOption = styled.option`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  max-height: 43px;
`;

export const ContentDate = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterSelectBox = styled.div`
  position: relative;
  width: 237px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0px 9px;
  height: 38px;
  box-shadow: 0 0 4px 0 rgba(${BLACK}, 0.25);
  border-radius: 5px;
  :hover {
    background-color: ${CONCRETE};
  }
  ${MEDIA_QUERY_SMALL} {
    flex: 1;
    max-width: 100%;
  }
`;

export const ContentTable = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 12px;
  width: 100%;
  color: ${BLACK_OPACITY_DARK};
`;

export const Table = styled.table`
  width: 95%;
  background-color: ${WHITE};
  margin: 33px 0 57px 0;
  text-align: left;
`;

export const Thead = styled.thead`
  font-weight: 900;
  font-size: 14px;
	height: 32px;
  background-color: ${CONCRETE};
  tr{
    border-bottom: solid 4.5px ${WHITE};
    th:first-child {
      padding-left: 36px;
    }
`;

export const Tbody = styled.tbody`
  tr {
    border-color: ${WHITE};
    border-width: 2.5px 0;
    border-style: solid;
    :hover {
      background-color: ${PUERTO_RICO_OPACITY};
    }
  }
`;

export const Th = styled.th`
  padding-left: 8px;
  vertical-align: middle;
`;

export const Td = styled.td`
  color: ${BOULDER};
  height: 43px;
  vertical-align: middle;
  padding: 0 8px;
  background-color: ${CONCRETE_OPACITY};
`;

export const ActionText = styled.div`
  max-height: 43px;
  padding-left: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 530px;
  ${MEDIA_QUERY_SMALL} {
    width: 200px;
  }
  ${MEDIA_QUERY_SMALL_MAX} {
    width: 280px;
  }
  ${MEDIA_QUERY_MEDIUM_MAX} {
    width: 480px;
  }
`;

export const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PaginationContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  bottom: 70px;
  position: absolute;
  width: 65%;
  margin-bottom: 49px;
  align-items: center;
  justify-content: center;
`;

export const GoBackFollowingButton = styled.i`
  color: ${({ disabled }) => (disabled ? SILVER : PUERTO_RICO)};
  font-size: 12px;
  cursor: pointer;
  margin: 0 8px;
`;

export const UlPagination = styled.ul`
  list-style: none;
  color: ${BOULDER};
`;

export const LiPagination = styled.div`
  display: inline-flex;
  width: 20px;
  height: 22px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  background-color: ${({ active }) => (active ? PUERTO_RICO_OPACITY : WHITE)};
  :hover {
    background-color: ${PUERTO_RICO_OPACITY};
  }
`;

export const SectionName = styled.section`
  padding-left: 11px;
`;
