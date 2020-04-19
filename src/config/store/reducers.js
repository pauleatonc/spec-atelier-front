import { combineReducers } from 'redux';
import loginReducer from '../../reducers/login.reducer';
import recoverPasswordReducer from '../../reducers/recover_password.reducer';
import newPasswordReducer from '../../reducers/new_password.reducer';
import projectsReducer from '../../reducers/projects.reducer';
import alertReducer from '../../containers/alert/Alert.reducer';
import specProductsSectionsReducer from '../../containers/spec-products-sections/SpecProductsSections.reducer';
import specProductsItemsReducer from '../../containers/spec-products-items/SpecProductsItems.reducer';
import specDocumentPreviewReducer from '../../containers/spec-document-preview/SpecDocumentPreview.reducer';
import specProductsReducer from '../../containers/spec-products/SpecProducts.reducer';

export default combineReducers({
	login: loginReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
  projects: projectsReducer,
  alert: alertReducer,
  specProductsSections: specProductsSectionsReducer,
  specProductsItems: specProductsItemsReducer,
  specDocumentPreview: specDocumentPreviewReducer,
  specProducts: specProductsReducer,
});
