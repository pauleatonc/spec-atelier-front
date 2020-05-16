import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderedProjectsAction } from '../projects-list/ProjectsList.actions';
import { Input } from '../../components/SpecComponents';
import {
  Container,
  InputContainer,
  IconSearch,
  SortContainer,
} from './ProjectsFilters.styles';

const ProjectsFilters = () => {
  const [search, setSearch] = useState('');
  const { filters } = useSelector(state => state.projectsFilters);
  const dispatch = useDispatch();
  const onSelectFilter = ({ target }) => dispatch(getOrderedProjectsAction({
    ...filters,
    [target.name]: target.value,
  }));
  return (
    <Container>
      <InputContainer >
        <IconSearch />
        <Input value={search} onChange={onSelectFilter} />
      </InputContainer>
      <SortContainer>
        <span>
          Ver por:&nbsp;
        </span>
        <select
          onChange={onSelectFilter}
        >
          {filters.map(f => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </SortContainer>
    </Container>
  );
};

export default ProjectsFilters;