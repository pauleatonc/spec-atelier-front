import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderedProjectsAction } from '../projects-list/ProjectsList.actions';
import { SearchBar } from '../../components/SpecComponents';
import {
  Container,
  SortContainer,
  Selector,
} from './ProjectsFilters.styles';

import { cleanObject } from '../../config/store/helpers';

const ProjectsFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.projectsFilters);

  const [params, setParams] = useState({ searchText: '', sort: filters[0].value });

  const handleSearchChange = ({ target: { name, value } }) => {
    setParams({ ...params, [name]: value });
    // Quitar IF cuando el searchText sea cambiado a parametro en el backend. 
    return;
    if (value.length > 3) {
      dispatch(getOrderedProjectsAction(cleanObject({ ...params, searchText: value })));
    }
  };

  return (
    <Container>
      <SearchBar
        name="searchText"
        justifyContent="flex-start"
        maxWidth="432px"
        placeholder="Buscar"
        value={params.searchText}
        onChange={handleSearchChange}
      />
      <SortContainer>
        <span>
          &nbsp;Ver por:&nbsp;
        </span>
        <Selector
          name="sort"
          onChange={handleSearchChange}
        >
          {filters.map(f => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </Selector>
      </SortContainer>
    </Container>
  );
};

export default ProjectsFilters;