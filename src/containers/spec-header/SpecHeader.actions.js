import onActionCreator from '../../config/store/helpers';
import { downloadSpec, downloadBudged, getNotificationsList, updateNotificationsWatch, acceptNotification, rejectNotification, undoRejectNotification } from '../../services/specs.service';

export const LOADING_SPEC_DOWNLOAD = 'LOADING_SPEC_DOWNLOAD';
export const DOWNLOAD_URL_SUCCESS = 'DOWNLOAD_URL_SUCCESS';
export const DOWNLOAD_URL_ERROR = 'DOWNLOAD_URL_ERROR';
export const CLEAN_DOWNLOAD = 'CLEAN_DOWNLOAD';
export const LOADING_BUDGET_DOWNLOAD = 'LOADING_BUDGET_DOWNLOAD';
export const DOWNLOAD_BUDGET_SUCCESS = 'DOWNLOAD_BUDGET_SUCCESS';
export const DOWNLOAD_BUDGET_ERROR = 'DOWNLOAD_BUDGET_ERROR';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const GET_NOTIFICATIONS_ERROR = 'GET_NOTIFICATIONS_ERROR';
export const INITIAL_NOTI = 'INITIAL_NOTI';
export const INITIAL_NOTI_ERROR = 'INITIAL_NOTI_ERROR';
export const WATCH_NOTIFICATIONS = 'WATCH_NOTIFICATIONS';
export const WATCH_NOTIFICATIONS_ERROR = 'WATCH_NOTIFICATIONS_ERROR';
export const ACCEPT_NOTIFICATION = 'ACCEPT_NOTIFICATION';
export const ACCEPT_NOTIFICATION_ERROR = 'ACCEPT_NOTIFICATION_ERROR';
export const REJECT_NOTIFICATION = 'REJECT_NOTIFICATION';
export const REJECT_NOTIFICATION_ERROR = 'REJECT_NOTIFICATION_ERROR';
export const UNDO_REJECT_NOTIFICATION = 'UNDO_REJECT_NOTIFICATION';
export const UNDO_REJECT_NOTIFICATION_ERROR = 'UNDO_REJECT_NOTIFICATION_ERROR';

const startDownload = (file, fileName) => {
	const url = window.URL.createObjectURL(file);
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', fileName);
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
};

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
	dispatch(onActionCreator(LOADING_BUDGET_DOWNLOAD));
	downloadBudged({ specID, userID: auth.user?.id }).then(
		(response) => {
			startDownload(response, 'presupuesto.xls');
			return dispatch(onActionCreator(DOWNLOAD_BUDGET_SUCCESS));
		},
		(error) => {
			console.error(error);
			return dispatch(
				onActionCreator(DOWNLOAD_BUDGET_ERROR, {
					error: true,
					nativeError: error,
				}),
			);
		},
	);
};

export const getNotifications = () => async (dispatch,getState) =>  {
	const { auth } = getState();
	try {
		const response = await getNotificationsList(auth.user?.id);
		dispatch(onActionCreator(GET_NOTIFICATIONS, response));
		return data;
	  } catch (error) {
		return dispatch(onActionCreator(GET_NOTIFICATIONS_ERROR, {
		  error: true,
		}));
	  }
} 

export const initialNotiId = () => async (dispatch,getState) =>  {
	const { auth } = getState();
	try {
		const response = await getNotificationsList(auth.user?.id);
		dispatch(onActionCreator(GET_NOTIFICATIONS, response));
		const data = Object.values(response).map((item,i) => Object.assign({}, Object.values(response), { id: item.id })) // object to array data
		return dispatch(onActionCreator(INITIAL_NOTI, data));
	  } catch (error) {
		return dispatch(onActionCreator(INITIAL_NOTI_ERROR, {
		  error: true,
		}));
	  }
} 

export const watchNotifications = (body) => async (dispatch) =>  {
	try {
		const response = await updateNotificationsWatch(body);
		return dispatch(onActionCreator(WATCH_NOTIFICATIONS, response));
	} catch (error) {
		return dispatch(onActionCreator(WATCH_NOTIFICATIONS_ERROR, {
			error: true,
		}));
	}
} 

export const accepthNotificationsAC = (body) => async (dispatch) =>  {
	try {
		const response = await acceptNotification(body);
		return dispatch(onActionCreator(ACCEPT_NOTIFICATION, response));
	} catch (error) {
		return dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
			error: true,
		}));
	}
} 

export const rejectNotifications = (body) => async (dispatch) =>  {
	try {
		const response = await rejectNotification(body);
		return dispatch(onActionCreator(REJECT_NOTIFICATION, response));
	} catch (error) {
		return dispatch(onActionCreator(REJECT_NOTIFICATION_ERROR, {
			error: true,
		}));
	}
} 

export const undoRejectNotifications = (body) => async (dispatch) =>  {
	try {
		const response = await undoRejectNotification(body);
		return dispatch(onActionCreator(UNDO_REJECT_NOTIFICATION, response));
	} catch (error) {
		return dispatch(onActionCreator(UNDO_REJECT_NOTIFICATION_ERROR, {
			error: true,
		}));
	}
} 

