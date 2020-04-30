import {
  PROJECTS_SORT_FILTER,
} from './ProjectsFilters.actions';

const filters = [
  { value: 'created_at_asc', label: 'Creadas asc' },
  { value: 'created_at_desc', label: 'Creadas desc' },
  { value: 'updated_at_asc', label: 'Actualizado asc' },
  { value: 'updated_at_desc', label: 'Actualizado desc' },
  { value: 'name_asc', label: 'Nombre asc' },
  { value: 'name_desc', label: 'Nombre desc' },
  { value: 'delivery_date_asc', label: 'Fecha entrega asc' },
  { value: 'delivery_date_desc', label: 'Fecha entrega desc' },
];

const initialProjectsFilters = {
  selected: filters[0],
  filters,
  nextPage: null,
  total: 0,
};

/**
 * The projects filters reducer.
 */
const projectsFiltersReducer = (state = initialProjectsFilters, { payload, type }) => {
  switch (type) {
    case PROJECTS_SORT_FILTER:
      return {
        ...state,
        selected: payload.selected,
      };
    default: {
      return state;
    }
  }
};

export default projectsFiltersReducer;
