import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './SpecContentsTable.actions'

const specDataSend = {
blocks: [],
loading: false,
project: {},
posts: {}
};

const bodyDataReducer = (state = specDataSend, { payload, type, id }) => {
    switch (type) {
        case FETCH_POSTS_REQUEST:
            return {
            ...state,
            id: id
            }

        case FETCH_POSTS_SUCCESS:
            return {
            ...state,
            isFetching: false,
            id: id,
            posts: payload.id
            }

        case FETCH_POSTS_ERROR:
            return {
            ...state,
            isFetching: false,
            id: id,
            error: payload.error
            }

        default:
            return state
    }
};
export default bodyDataReducer;