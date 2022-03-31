import React from 'react';
import SelectorRelative from '../../../components/basics/SelectorRelative';
import { SearchBar } from '../../../components/SpecComponents';
import IconUser from '../../../components/IconUser';
import { ICON_ARROW_DOWN } from '../../../assets/Images';
import {
  ContentUser,
  NameSection,
} from '../../../components/basics/SelectorRelative.styles';
import {
  FilterContainer,
  FilterSelectBox,
  Label,
  NameOption,
  SearchContainer,
  SearchFilterContainer,
  SearchFilterContent,
} from '../SpecHistory.styles';

const SearchFilter = ({
  keyword,
  onChangeParams,
  authors,
  onChangeAuthor,
  author,
}) => {
  const filterText = 'Filtrar por autor';
  const getOptionRenderInput = () => {
    if (author.id === 'allAuthors')
      return <NameOption>{author.name}</NameOption>;
    return (
      <ContentUser>
        <IconUser user={author} size="28" zIndex="0" />
        <NameSection>{author.name}</NameSection>
      </ContentUser>
    );
  };

  return (
    <SearchFilterContainer>
      <SearchFilterContent>
        <SearchContainer>
          <SearchBar
            name="keyword"
            justifyContent="flex-start"
            maxWidth="237px"
            placeholder="Buscar"
            value={keyword}
            onChange={onChangeParams}
          />
        </SearchContainer>
        <FilterContainer>
          <Label>{filterText}</Label>
          <SelectorRelative
            name="author"
            maxWidth="237px"
            maxHeight="152px"
            options={authors}
            onChange={onChangeAuthor}
            author={author}
            backgroundPuertoRico
            renderInput={
              <FilterSelectBox>
                {getOptionRenderInput()}
                <img alt={filterText} src={ICON_ARROW_DOWN} />
              </FilterSelectBox>
            }
          />
        </FilterContainer>
      </SearchFilterContent>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
