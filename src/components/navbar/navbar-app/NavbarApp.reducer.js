import {
  SELECTED_ITEM,
} from './NavbarApp.actions';

const items = [
  { id: 'projects', label: 'Proyectos', to: '/projects' },
  { id: 'products', label: 'Productos', to: '/products' },
  { id: 'colaborations', label: 'Colaboradores', to: '/colaborations' },
];

export const initialState = {
  items,
  selectedItem: items[0],
};

const NavbarAppReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SELECTED_ITEM:
      return {
        ...state,
        selectedItem: payload.item,
      };
    default:
      return state;
  }
};

export default NavbarAppReducer;