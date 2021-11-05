import { SHOW_LOADER, HIDE_LOADER } from './types'

const initialState = {
  loaderVisible: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loaderVisible: true }
    case HIDE_LOADER:
        return { ...state, loaderVisible: false }
    default: return state
  }
}