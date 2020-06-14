import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyProjects } from '../projects-list/ProjectsList.actions';
import { SearchBar, Select } from '../../components/SpecComponents';
import {
  Container,
  SortContainer,
  FilterSortText,
} from './ProjectsFilters.styles';

const minLengthSearch = 3;

const ProjectsFilters = () => {
  const dispatch = useDispatch();
  const { sortFilters, params, projects } = useSelector(state => state.projectsList);
  const [keyword, setKeywords] = useState(params.keywords || ''); 

  
  const onChangeParams = ({ target: { name, value } }) => {
    setKeywords(value);
    dispatch(getMyProjects({
      ...params,
      [name]: value.length >= minLengthSearch ? value : '',
    }));
  };

  const onChangeSort = value => dispatch(getMyProjects({ ...params, sort: value }));
  
  if (!projects.length && !params.keyword) return null;
  
  return (
    <Container>
      <SearchBar
        name="keyword"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={keyword}
        onChange={onChangeParams}
      />
      <SortContainer>
        <FilterSortText>
          Ver por:
        </FilterSortText>
        <Select
          name="sort"
          type="underline"
          options={sortFilters}
          placeholder=""
          value={params.sort}
          onChange={onChangeSort}
        />
      </SortContainer>
    </Container>
  );
};

export default ProjectsFilters;