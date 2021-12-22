import onActionCreator from '../../config/store/helpers';
import { downloadSpec, downloadBudged, getNotificationsList, updateNotificationsWatch, acceptNotification, rejectNotification, undoRejectNotification } from '../../services/specs.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

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
export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS';
export const STOP_NOTIFICATIONS = 'STOP_NOTIFICATIONS';
export const UNDO_STOP_NOTIFICATIONS = 'UNDO_STOP_NOTIFICATIONS';

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

export const getNotifications = () => async (dispatch, getState) => {
	const { auth } = getState();
	try {
		const response = await getNotificationsList(auth.user?.id);
		dispatch(onActionCreator(GET_NOTIFICATIONS, response));
		return response;
	} catch (error) {
		return dispatch(onActionCreator(GET_NOTIFICATIONS_ERROR, {
			error: true,
		}));
	}
}


export const watchNotifications = (body) => async (dispatch) => {
	updateNotificationsWatch(body).then((response) => {
		dispatch(onActionCreator(WATCH_NOTIFICATIONS, response));
	}, (error) => {
		dispatch(onActionCreator(WATCH_NOTIFICATIONS_ERROR, {
			error
		}))
	})
}

export const accepthNotificationsAC = (body) => async (dispatch) => {
	dispatch(onActionCreator(ACCEPT_NOTIFICATION));	
	return acceptNotification(body).then((response) => {
		const dataResp = response.resp;
		if(response.codeStatus !== 401 && response.codeStatus !== 404 && response.codeStatus !== 500 && response.codeStatus !== 200){
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
		if(response.codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Not session found' }),
			);
		}
		if(response.codeStatus === 403){
			dataResp.then((data) => {
				dispatch(
					onShowAlertSuccess({ message: data.error}),
				);
			})
		}
		if(response.codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Not found' }),
			);
		}
		if(response.codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Internal server' }),
			);
		}
		if(response.codeStatus === 200){
			dispatch(onActionCreator(NOTIFICATION_SUCCESS, response));
			return response;
		}
	}, (error) => {
		dispatch(
			onShowAlertSuccess({ message: 'Error al aceptar proyecto.' }),
		);
		dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
			error
		}))
	})
}

export const rejectNotifications = (body) => async (dispatch) => {
	dispatch(onActionCreator(REJECT_NOTIFICATION));
	return rejectNotification(body).then((response) => {
		const dataResp = response.resp;
		if(response.codeStatus === 304){
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
		if(response.codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Not session found' }),
			);
		}
		if(response.codeStatus === 403){
			dataResp.then((data) => {
				dispatch(
					onShowAlertSuccess({ message: data.error}),
				);
			})
		}
		if(response.codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Not found' }),
			);
		}
		if(response.codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Internal server' }),
			);
		}
		if(response.codeStatus === 200){
			dispatch(onActionCreator(NOTIFICATION_SUCCESS, response));
			return response;
		}
	}, (error) => {
		dispatch(
			onShowAlertSuccess({ message: 'Error al rechazar proyecto.' }),
		);
		dispatch(onActionCreator(REJECT_NOTIFICATION_ERROR, {
			error
		}))
		return "ff";
	})
}

export const undoRejectNotifications = (body) => async (dispatch) => {
	dispatch(onActionCreator(UNDO_REJECT_NOTIFICATION));
	return undoRejectNotification(body).then((response) => {
		const dataResp = response.resp;
		if(response.codeStatus === 304){
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
		if(response.codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Not session found' }),
			);
		}
		if(response.codeStatus === 403){
			dataResp.then((data) => {
				dispatch(
					onShowAlertSuccess({ message: data.error}),
				);
			})
		}
		if(response.codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Not found' }),
			);
		}
		if(response.codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Internal server' }),
			);
		}
		if(response.codeStatus === 200){
			dispatch(onActionCreator(NOTIFICATION_SUCCESS, response));
			return response;
		}
	}, (error) => {
		dispatch(
			onShowAlertSuccess({ message: 'Error al deshacer proyecto.' }),
		);
		dispatch(onActionCreator(UNDO_REJECT_NOTIFICATION_ERROR, {
			error
		}))
	})
}

export const stopGetNotifications = () => async (dispatch) => {
	dispatch(onActionCreator(STOP_NOTIFICATIONS));
}

export const undoStopGetNotifications = () => async (dispatch) => {
	dispatch(onActionCreator(UNDO_STOP_NOTIFICATIONS));
}


export const accepthNotificationsAC2 = (body) => async (dispatch) => {
	acceptNotification(body).then((response) => {
		const dataResp = response.resp;
		if(response.codeStatus === 304){
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
		if(response.codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Not session found' }),
			);
		}
		if(response.codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Not found' }),
			);
		}
		if(response.codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Internal server' }),
			);
		}
		if(response.codeStatus === 200){
			dataResp.then((data) => {
				dispatch(
					onShowAlertSuccess({ message: data.message }),
				);
			})
			dispatch(onActionCreator(NOTIFICATION_SUCCESS, response));
		}
	}, (error) => {
	  dispatch(
		onShowAlertSuccess({ message: 'Error al aceptar proyecto.' }),
	  );
	  dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
		error
	  }))
	})
  }
  
  export const rejectNotificationsAC = (body) => async (dispatch) => {
	rejectNotification(body).then((response) => {
	  const dataResp = response.resp;
	  	if(response.codeStatus === 304){
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
	  if(response.codeStatus === 401){
			  dispatch(
				  onShowAlertSuccess({ message: 'Not session found' }),
			  );
		  }
		  if(response.codeStatus === 404){
			  dispatch(
				  onShowAlertSuccess({ message: 'Not found' }),
			  );
		  }
	  if(response.codeStatus === 500){
			  dispatch(
				  onShowAlertSuccess({ message: 'Internal server' }),
			  );
		  }
		  if(response.codeStatus === 200){
		dataResp.then((data) => {
		  dispatch(
			onShowAlertSuccess({ message: data.message }),
		  );
		})
		dispatch(onActionCreator(NOTIFICATION_SUCCESS, response));
		  }
	}, (error) => {
	  dispatch(
		onShowAlertSuccess({ message: 'Error al rechazar proyecto.' }),
	  );
	  dispatch(onActionCreator(REJECT_NOTIFICATION_ERROR, {
		error
	  }))
	})
  }
