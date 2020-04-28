import {
  SELECTED_ITEM,
} from './NavbarLogin.actions';

const items = [
  { id: 'us', label: 'Nosotros', to: '/us' },
  { id: 'products', label: 'Productos', to: '/products' },
  { id: 'brands', label: 'Marcas', to: '/brands' },
];

export const initialState = {
  items,
  selectedItem: items[0],
};

const NavbarLoginReducer = (state = initialState, action) => {
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

export default NavbarLoginReducer;