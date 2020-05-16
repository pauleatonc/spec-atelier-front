import styled from 'styled-components';
import React from 'react';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px 0 48px;
`;

export const InputContainer = styled.div`
  flex-basis: 40%;
`;

const iconSearch = () =>  <i className="fas fa-search" />;

export const IconSearch = styled(iconSearch)`
  position: absolute;
  left: 50px;
`;

export const SortContainer = styled.section`
  padding-left: 32px;
  flex-basis: 60%;
`

export const Filters = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`

export const FilterSelect = styled.select`
  border-radius: 22px;
  background-color: #eeeeee;
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
  color: #212121;

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
  color: #212121;
`;