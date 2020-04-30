import { combineReducers } from 'redux';
import loginReducer from '../../reducers/login.reducer';
import recoverPasswordReducer from '../../reducers/recover_password.reducer';
import newPasswordReducer from '../../reducers/new_password.reducer';
import projectsReducer from '../../reducers/projects.reducer';
import alertReducer from '../../containers/alert/Alert.reducer';
import specProductsSectionsReducer from '../../containers/spec-products-sections/SpecProductsSections.reducer';
import specProductsItemsReducer from '../../containers/spec-products-items/SpecProductsItems.reducer';
import specProductsReducer from '../../containers/spec-products/SpecProducts.reducer';
import specModalPorductReducer from '../../containers/spec-modal-product/SpecModalProduct.reducer';
import specModalReducer from '../../components/modal/modal.reducer';
import specCreateProductReducer from '../../containers/spec-create-product/SpecCreateProduct.reducer';
import authReducer from '../../containers/auth/auth.reducer';
import projectsFiltersReducer from '../../containers/projects-filters/ProjectsFilters.reducer';
import projectsListReducer from '../../containers/projects-list/ProjectsList.reducer';

export default combineReducers({
  auth: authReducer,
	login: loginReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
  projects: projectsReducer,
  projectsFilters: projectsFiltersReducer,
  projectsList: projectsListReducer,
  alert: alertReducer,
  specProductsSections: specProductsSectionsReducer,
  specProductsItems: specProductsItemsReducer,
  specProducts: specProductsReducer,
  specModalPorduct: specModalPorductReducer,
  specModal: specModalReducer,
  specCreateProduct: specCreateProductReducer,
});
