import {
  PROJECTS_SORT_FILTER,
} from './ProjectsFilters.actions';

const filters = [
  { id: 'created_at_desc', value: 'created_at_desc', label: 'Creadas desc' },
  { id: 'created_at_asc', value: 'created_at_asc', label: 'Creadas asc' },
  { id: 'updated_at_asc', value: 'updated_at_asc', label: 'Actualizado asc' },
  { id: 'updated_at_desc', value: 'updated_at_desc', label: 'Actualizado desc' },
  { id: 'name_asc', value: 'name_asc', label: 'Nombre asc' },
  { id: 'name_desc', value: 'name_desc', label: 'Nombre desc' },
  { id: 'delivery_date_asc', value: 'delivery_date_asc', label: 'Fecha entrega asc' },
  { id: 'delivery_date_desc', value: 'delivery_date_desc', label: 'Fecha entrega desc' },
];

const initialProjectsFilters = {
  selected: filters[0],
  filters,
  nextPage: null,
  total: 0,
  visibility: false,
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
