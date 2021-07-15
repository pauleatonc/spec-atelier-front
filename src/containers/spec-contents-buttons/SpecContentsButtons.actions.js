

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const requestFile = (option) => (dispatch) => {
  //dispatch({ type: FETCH_POSTS_REQUEST })

  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(posts => {
      dispatch({
        option: option,
        type: FETCH_POSTS_SUCCESS,
        payload: {
          posts
        }
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_POSTS_ERROR,
        error: error.toString()
      })
    })

}