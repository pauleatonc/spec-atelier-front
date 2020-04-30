import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderedProjectsAction } from '../projects-list/ProjectsList.actions';

const ProjectsFilters = () => {
  const { filters } = useSelector(state => state.projectsFilters);
  const dispatch = useDispatch();
  const onSelectFilter = ({ target }) => dispatch(getOrderedProjectsAction(target.value));

  return (
    <div className="projects__inner__header__filters__content">
      <span className="projects__inner__header__filters__content__text">
        Ver por:&nbsp;
      </span>
      <select
        onChange={onSelectFilter}
        className="projects__inner__header__filters__content__select"
      >
        {filters.map(f => (
          <option key={f.value} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectsFilters;