import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyProjects } from '../projects-list/ProjectsList.actions';
import { SearchBar } from '../../components/SpecComponents';
import {
  Container,
  SortContainer,
  FilterSortText,
  DropIcon,
} from './ProjectsFilters.styles';
import SelectorRelative from '../../components/basics/SelectorRelative';
import dropArrowSource from '../../assets/images/icons/drop-arrow.svg';

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
        <SelectorRelative
          name="sort"
          type="underline"
          maxHeight="180px"
          options={sortFilters}
          placeholder=""
          value={params.sort.id}
          onChange={onChangeSort}
          renderInput={(
            <FilterSortText>
              <div>
                Ver por:
              </div>
              <div>
                {params.sort.label}
              </div>
              <DropIcon alt="" src={dropArrowSource} />
            </FilterSortText>
          )}
        />
      </SortContainer>
    </Container>
  );
};

export default ProjectsFilters;
