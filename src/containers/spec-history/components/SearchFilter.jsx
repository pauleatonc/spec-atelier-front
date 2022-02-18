import React from 'react'
import SelectorRelative from '../../../components/basics/SelectorRelative';
import { SearchBar } from '../../../components/SpecComponents';
import IconUser from '../../../components/IconUser';
import { ICON_ARROW_DOWN } from '../../../assets/Images';
import { ContentUser, NameSection } from '../../../components/basics/SelectorRelative.styles';
import {
  FilterContainer,
  FilterSelectBox,
  Label,
  NameOption,
  SearchContainer,
  SearchFiltersContainer,
  SearchFiltersContent
} from '../SpecHistory.styles';

const SearchFilter = ({
  keyword,
  onChangeParams,
  authors,
  onChangeAuthor,
  author
}) => {
  const getOptionRenderInput = () => {
    if (author.id === 'allAuthors')
      return <NameOption>{author.name}</NameOption>

    return (
      <ContentUser>
        <IconUser user={author} size='28' />
        <NameSection>{author.name}</NameSection>
      </ContentUser>
    )
  };

  return (
    <SearchFiltersContainer>
      <SearchFiltersContent>
        <SearchContainer>
          <SearchBar
            name='keyword'
            justifyContent='flex-start'
            maxWidth='237px'
            placeholder='Buscar'
            value={keyword}
            onChange={onChangeParams}
          />
        </SearchContainer>
        <FilterContainer>
          <Label>Filtras por autor</Label>
          <SelectorRelative
            name='author'
            maxWidth='237px'
            maxHeight='152px'
            options={authors}
            onChange={onChangeAuthor}
            author={author}
            backgroundPuertoRico
            renderInput={
              <FilterSelectBox>
                {getOptionRenderInput()}
                <img alt='Filtrar por autor' src={ICON_ARROW_DOWN} />
              </FilterSelectBox>
            }
          />
        </FilterContainer>
      </SearchFiltersContent>
    </SearchFiltersContainer>
  );
};

export default SearchFilter;
