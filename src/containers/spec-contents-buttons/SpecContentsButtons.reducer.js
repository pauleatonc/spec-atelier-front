import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './SpecContentsButtons.actions'

const specDocumentState = {
blocks: [],
loading: false,
project: {},
option: 'F',
posts: {}
};

const dataSectionsReducer = (state = specDocumentState, { payload, type, option }) => {
    switch (type) {
        case FETCH_POSTS_REQUEST:
            return {
            ...state,
            option: option
            }

        case FETCH_POSTS_SUCCESS:
            return {
            ...state,
            isFetching: false,
            option: option,
            posts: payload.posts
            }

        case FETCH_POSTS_ERROR:
            return {
            ...state,
            isFetching: false,
            option: option,
            error: payload.error
            }

        default:
            return state
    }
};
export default dataSectionsReducer;