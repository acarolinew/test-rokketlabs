import { FETCH_POSTS, FETCH_POSTS_BY_TAG } from '../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../api'
import { urlBase } from '../api/urls'

export const fetchPosts = createAction(FETCH_POSTS, apiGet(`${urlBase}post`))

export const fetchPostsByTag = createAction(FETCH_POSTS_BY_TAG, (tagTitle) => apiGet(`${urlBase}tag/${tagTitle}/post`)())