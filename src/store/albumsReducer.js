import {FETCH_ALBUMS} from './types'

const initialState = {
  albums: [],
  fetchedPosts: []
}

// Pure Functions
export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return { ...state, albums: state.albums.concat([action.payload]) }
    // case FETCH_POSTS:
    //   return { ...state, fetchedPosts: action.payload }
    default: return state
  }
}