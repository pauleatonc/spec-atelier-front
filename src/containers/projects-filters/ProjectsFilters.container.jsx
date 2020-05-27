import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyProjects } from '../projects-list/ProjectsList.actions';
import { SearchBar, Select } from '../../components/SpecComponents';
import {
  Container,
  SortContainer,
  FilterSortText,
} from './ProjectsFilters.styles';

const ProjectsFilters = () => {
  const dispatch = useDispatch();
  const { sortFilters, params, projects } = useSelector(state => state.projectsList);

  const getProjects = params => dispatch(getMyProjects(params));

  const onChangeParams = ({ target: { name, value } }) => getProjects({
    ...params,
    [name]: value,
  });

  const onChangeSort = value => getProjects({ ...params, sort: value });
  
  if (!projects.length) return null;

  return (
    <Container>
      <SearchBar
        name="keyword"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={params.keyword || ''}
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