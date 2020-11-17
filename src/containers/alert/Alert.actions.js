export const HIDE_ALERT_SUCCESS = 'HIDE_ALERT_SUCCESS';
export const SHOW_ALERT_SUCCESS = 'SHOW_ALERT_SUCCESS';
export const onHideAlertSuccess = () => ({ type: HIDE_ALERT_SUCCESS });
export const onShowAlertSuccess = payload => ({ payload, type: SHOW_ALERT_SUCCESS });
