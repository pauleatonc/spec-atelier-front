import { GET_PRODUCTS_BY_ITEM_SUCCESS, SELECT_MENU, SELECT_SECTION_ITEM } from '@Configurations/constants';

const projectSpecificationState = {
  productsBreadcrumbsLabels: ['Secciones', 'Partidas'],
  productsCollection: [],
  productsFilters: [
    { label: 'Todos', tag: 'all' },
    { label: 'Recientes', tag: 'latest' },
    { label: 'Más usados', tag: 'most_used' },
    { label: 'Marcas', tag: 'brands' },
    { label: 'Tipo de proyecto', tag: 'project_type' },
    { label: 'Mis especificaciones', tag: 'my_specifications' },
    { label: 'Otros usuarios', tag: 'other_users' },
    { label: 'Recintos', tag: 'enclosures' },
  ],
  productsNextPage: 0,
  productsTotal: 0,
  selectedMenu: null,
  selectedSectionItemID: null,
};

/**
 * The projectSpecification's reducer.
 */
const projectSpecificationReducer = (state = projectSpecificationState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_BY_ITEM_SUCCESS: {
      return {
        ...state,
        productsCollection: payload.products,
        productsNextPage: payload.nextPage,
        productsTotal: payload.total,
      };
    }
    case SELECT_MENU: {
      return { ...projectSpecificationState, selectedMenu: payload.menu };
    }
    case SELECT_SECTION_ITEM: {
      const {
        productsBreadcrumbsLabels,
        productsCollection,
        productsNextPage,
        productsTotal,
      } = projectSpecificationState;
      const updatedBreadcrumbsLabels = productsBreadcrumbsLabels.concat(payload.itemName);

      return {
        ...state,
        productsCollection,
        productsNextPage,
        productsTotal,
        selectedSectionItemID: payload.itemID,
        productsBreadcrumbsLabels: updatedBreadcrumbsLabels,
      }
    }
    default: {
      return state;
    }
  }
};

export default projectSpecificationReducer;
