import { SET_ALBUMS, DELETE_ALBUM, UPDATE_ALBUM, ADD_ALBUM, SET_TITLE, SET_USER } from './types'

const initialState = {
  albums: [],
  title: '',
  userId: null,
}

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return { ...state, albums: action.payload}
    case DELETE_ALBUM:
      return { ...state, albums: state.albums.filter(album => album.id !== action.payload )}
    case UPDATE_ALBUM:
      return { ...state, albums: state.albums.map(album => album.id === action.payload.id ? action.payload : album)}
    case ADD_ALBUM:
      return { ...state, albums: state.albums.concat(action.payload)}
    case SET_TITLE:
      return { ...state, title: action.payload}
    case SET_USER:
      return { ...state, userId: action.payload}
    default: return state
  }
}