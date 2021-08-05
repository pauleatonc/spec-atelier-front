export const CHANGE_OPTION = 'CHANGE_OPTION';

export const changeOption = (option) => (dispatch) => {
	dispatch({
		type: CHANGE_OPTION,
		payload: {
			option,
		},
	});
};
