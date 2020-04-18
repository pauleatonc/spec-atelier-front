import { combineReducers } from 'redux';
import loginReducer from '../../reducers/login.reducer';
import recoverPasswordReducer from '../../reducers/recover_password.reducer';
import newPasswordReducer from '../../reducers/new_password.reducer';
import projectsReducer from '../../reducers/projects.reducer';
import alertReducer from '../../containers/alert/Alert.reducer';
import specSectionsListReducer from '../../containers/spec-sections-list/SpecSectionsList.reducer';
import specItemsListReducer from '../../containers/spec-items-list/SpecItemsList.reducer';
import specSelectedProductsReducer from '../../containers/spec-selected-products/SpecSelectedProducts.reducer';
import specProductsListReducer from '../../containers/spec-products-list/SpecProductsList.reducer';

export default combineReducers({
	login: loginReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
  projects: projectsReducer,
  alert: alertReducer,
  specSectionsList: specSectionsListReducer,
  specItemsList: specItemsListReducer,
  specSelectedProducts: specSelectedProductsReducer,
  specProductsList: specProductsListReducer,
});
