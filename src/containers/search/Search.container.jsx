import React from 'react';
import SearchBar from 'components/filters/SearchBar';
import { Container, SearchContaienr, ButtonFilter } from './Search.styles';

const Search = ({ keyword, onChangeParams, placeholder, onClickFilter }) => {
  return (
    <Container>
      <SearchContaienr>
        <SearchBar
          name="keyword"
          justifyContent="center"
          maxWidth="432px"
          placeholder={placeholder}
          value={keyword}
          onChange={onChangeParams}
        />
        <ButtonFilter rol="button" onClick={() => onClickFilter()}>
          <i className="fas fa-filter" />
        </ButtonFilter>
      </SearchContaienr>
    </Container>
  );
};

export default Search;
