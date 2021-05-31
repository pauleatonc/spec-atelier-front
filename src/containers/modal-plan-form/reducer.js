import {
    SHOW_MODAL_STEP_ONE,
    SHOW_MODAL_STEP_TWO,
    HIDE_MODAL_STEP_TWO,
    SHOW_SUCCESS_MODAL,
    HIDE_MODAL,
} from './actions';

const initialState = {
    loading: true,
    stepOne: { show: false },
    stepTwo: { show: false },
    showSuccessModal: true,
    plan_type: 'fixed_plan',
    items_total: 1,
    user_name: '',
    email: '',
    phone: '',
    user_company_name: '',
    message: '',
};

/**
 * plan form reducer.
 */
const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case SHOW_MODAL_STEP_ONE:
            return {
                ...state,
                stepOne: { show: true },
                plan_type: payload.type
            };
        case SHOW_MODAL_STEP_TWO:
            return {
                ...state,
                stepOne: { show: false },
                stepTwo: { show: true },
                items_total: payload.itemsTotal
            };
        case HIDE_MODAL_STEP_TWO:
            return {
                ...state,
                stepOne: { show: true },
                stepTwo: { show: false }
            };
        case SHOW_SUCCESS_MODAL:
            return {
                ...state,
                showSuccessModal: true
            };
        case HIDE_MODAL:
            return {
                ...initialState,
            };
        default: {
            return state;
        }
    }
};

export default reducer;
