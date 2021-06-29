import styled from 'styled-components';
import { COLOR_MINE_SHAFT, MEDIA_QUERY_SMALL } from '../../config/constants/styled-vars';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 8px 0 16px;

  ${MEDIA_QUERY_SMALL} {
    margin: 0 8px;
    padding: 0;
  }
`;

export const Content = styled.div`
  padding: 16px;
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(7, max-content);
  justify-items: center;

  ${MEDIA_QUERY_SMALL} {
    overflow-x: scroll;
  }
`;

export const Loading = styled.span`
  align-items: center;
  color: ${COLOR_MINE_SHAFT};
  display: inline-flex;
  font-family: Lato;
  font-size: 16px;
  height: 34px;
`;

export const Text = styled.span`
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    display: block;
  }
`;

export const DropdownContent = styled.section`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  &:hover {
    display: block;
  }
`;
