import onActionCreator from '../../config/store/helpers';
import { downloadSpec, downloadBudged } from '../../services/specs.service';

export const LOADING_SPEC_DOWNLOAD = 'LOADING_SPEC_DOWNLOAD';
export const DOWNLOAD_URL_SUCCESS = 'DOWNLOAD_URL_SUCCESS';
export const DOWNLOAD_URL_ERROR = 'DOWNLOAD_URL_ERROR';
export const CLEAN_DOWNLOAD = 'CLEAN_DOWNLOAD';
export const LOADING_BUDGET_DOCUMENT = 'LOADING_BUDGET_DOCUMENT';
export const DOWNLOAD_BUDGET_SUCCESS = 'DOWNLOAD_BUDGET_SUCCESS';
export const DOWNLOAD_BUDGET_ERROR = 'DOWNLOAD_BUDGET_ERROR';

export const downloadSpecDocument = ({ specID }) => async (
	dispatch,
	getState,
) => {
	dispatch(onActionCreator(LOADING_SPEC_DOWNLOAD));

	try {
		const { auth } = getState();
		const { url } = await downloadSpec({ specID, userID: auth.user?.id });
		return dispatch(onActionCreator(DOWNLOAD_URL_SUCCESS, { url }));
	} catch (error) {
		return dispatch(
			onActionCreator(DOWNLOAD_URL_ERROR, { error: true, nativeError: error }),
		);
	}
};

export const cleanDownload = () => (dispatch) =>
	dispatch(onActionCreator(CLEAN_DOWNLOAD));

export const downloadBudgetDocument = ({ specID }) => (dispatch, getState) => {
	const { auth } = getState();
	dispatch(onActionCreator(LOADING_BUDGET_DOCUMENT));
	downloadBudged({ specID, userID: auth.user?.id }).then(
		(response) => {
			return dispatch(
				onActionCreator(DOWNLOAD_BUDGET_SUCCESS, { budgetDocument: response }),
			);
		},
		(error) => {
			console.log(error);
			return dispatch(
				onActionCreator(DOWNLOAD_BUDGET_ERROR, {
					error: true,
					nativeError: error,
				}),
			);
		},
	);
};
