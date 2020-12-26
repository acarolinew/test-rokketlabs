import { handleActions } from 'redux-actions'
import { FETCH_POSTS, FETCH_POSTS_BY_TAG } from '../constants'

export const posts = handleActions({
  [FETCH_POSTS]: (state, action) => action.payload,
  [FETCH_POSTS_BY_TAG]: (state, action) => action.payload,
}, null)