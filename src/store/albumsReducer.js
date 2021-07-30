import { SET_ALBUMS, DELETE_ALBUM } from './types'

const initialState = {
  albums: [],
}

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      console.log(action)
      return { ...state, albums: action.payload}
    case DELETE_ALBUM:
      return { ...state, albums: state.albums.filter(album => album.id !== action.payload )}
    default: return state
  }
}