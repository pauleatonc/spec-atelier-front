

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const sendData = (id) => (dispatch) => {
  //dispatch({ type: FETCH_POSTS_REQUEST })

  dispatch({
    id: id,
    type: FETCH_POSTS_SUCCESS,
    payload: {
      id
    }
  })

}