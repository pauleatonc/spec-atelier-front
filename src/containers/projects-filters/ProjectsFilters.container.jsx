import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderedProjectsAction } from '../projects-list/ProjectsList.actions';
import { SearchBar, Select } from '../../components/SpecComponents';
import {
  Container,
  SortContainer,
  FilterSortText,
} from './ProjectsFilters.styles';

import { cleanObject } from '../../config/store/helpers';

const ProjectsFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.projectsFilters);

  const [params, setParams] = useState({ searchText: '', sort: filters[0] });

  const onChangeParams = ({ target: { name, value } }) => {
    setParams({ ...params, [name]: value });
    // Quitar IF cuando el searchText sea cambiado a parametro en el backend. 
    return;
    if (value.length > 3) {
      dispatch(getOrderedProjectsAction(cleanObject({ ...params, searchText: value })));
    }
  };
  const onChangeSort = value => setParams({ ...params, sort: value });

  return (
    <Container>
      <SearchBar
        name="searchText"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={params.searchText}
        onChange={onChangeParams}
      />
      <SortContainer>
        <FilterSortText>
          Ver por:
        </FilterSortText>
        <Select
          name="sort"
          type="underline"
          options={filters}
          placeholder=""
          value={params.sort}
          onChange={onChangeSort}
        />
      </SortContainer>
    </Container>
  );
};

export default ProjectsFilters;