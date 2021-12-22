import {
	LOADING_SPEC_DOWNLOAD,
	DOWNLOAD_URL_SUCCESS,
	DOWNLOAD_URL_ERROR,
	CLEAN_DOWNLOAD,
	LOADING_BUDGET_DOWNLOAD,
	DOWNLOAD_BUDGET_SUCCESS,
	DOWNLOAD_BUDGET_ERROR,
	GET_NOTIFICATIONS,
	GET_NOTIFICATIONS_ERROR,
	INITIAL_NOTI,
	WATCH_NOTIFICATIONS,
	WATCH_NOTIFICATIONS_ERROR,
	ACCEPT_NOTIFICATION,
	NOTIFICATION_SUCCESS,
	ACCEPT_NOTIFICATION_ERROR,
	REJECT_NOTIFICATION,
	REJECT_NOTIFICATION_ERROR,
	UNDO_REJECT_NOTIFICATION,
	UNDO_REJECT_NOTIFICATION_ERROR,
	STOP_NOTIFICATIONS,
	UNDO_STOP_NOTIFICATIONS
} from './SpecHeader.actions';

const specHeaderState = {
	error: undefined,
	loading: false,
	loadingNoti: false,
	actionGet: true,
	url: '',
	notificationsList: [],
	initialNotifiId: [],
};

/**
 * The spec document header' reducer.
 */
const specDocumentReducer = (state = specHeaderState, { payload, type }) => {
	switch (type) {
		case LOADING_SPEC_DOWNLOAD:
			return { ...state, loading: true, url: '' };
		case DOWNLOAD_URL_SUCCESS:
			return { ...state, loading: false, url: payload.url };
		case DOWNLOAD_URL_ERROR:
			return { ...state, loading: false, url: '' };
		case CLEAN_DOWNLOAD:
			return { ...state, url: '', budgetDocument: null };
		case LOADING_BUDGET_DOWNLOAD:
			return { ...state, loading: true };
		case DOWNLOAD_BUDGET_SUCCESS:
			return { ...state, loading: false };
		case DOWNLOAD_BUDGET_ERROR:
			return { ...state, loading: false };
		case GET_NOTIFICATIONS:
			return { ...state, notificationsList: payload };
		case GET_NOTIFICATIONS_ERROR:
			return { ...state };
		case INITIAL_NOTI:
			return { ...state, initialNotifiId: payload };
		case WATCH_NOTIFICATIONS:
			return { ...state };
		case WATCH_NOTIFICATIONS_ERROR:
			return { ...state, error: 'watch', };
		case ACCEPT_NOTIFICATION:
			return { ...state, loadingNoti: true, };
		case NOTIFICATION_SUCCESS:
			return { ...state, loadingNoti: false, };
		case ACCEPT_NOTIFICATION_ERROR:
			return { ...state, error: 'accept' };
		case REJECT_NOTIFICATION:
			return { ...state, loadingNoti: true };
		case REJECT_NOTIFICATION_ERROR:
			return { ...state, error: 'reject', loadingNoti: false };
		case UNDO_REJECT_NOTIFICATION:
			return { ...state, loadingNoti: true };
		case UNDO_REJECT_NOTIFICATION_ERROR:
			return { ...state, error: 'undo', loadingNoti: false };
		case STOP_NOTIFICATIONS:
			return { ...state, actionGet: false };
		case UNDO_STOP_NOTIFICATIONS:
			return { ...state, actionGet: true };
		default: {
			return state;
		}
	}
};

export default specDocumentReducer;
