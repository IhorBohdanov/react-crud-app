import { REQUEST_ALBUMS, REMOVE_ALBUM, DELETE_ALBUM, MUTATE_ALBUM, UPDATE_ALBUM, HIDE_LOADER, SHOW_LOADER, POST_ALBUM, SET_USER, SET_TITLE, FETCH_ALBUM } from './types'

export function requestAlbums() {
  return {
    type: REQUEST_ALBUMS
  }
}

export function removeAlbum(id) {
    return {
      type: REMOVE_ALBUM,
      payload: id
    }
}

export function deleteAlbum(id) {
    return {
      type: DELETE_ALBUM,
      payload: id
    }
}

export function mutateAlbum(album) {
  return {
    type: MUTATE_ALBUM,
    payload: album
  }
}

export function updateAlbum(album) {
  return {
    type: UPDATE_ALBUM,
    payload: album
  }
}

export function postAlbum(album) {
  return {
    type: POST_ALBUM,
    payload: album
  }
}

export function fetchAlbum(id) {
  return {
    type: FETCH_ALBUM,
    payload: id
  }
}

export function setAlbumTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}

export function setUser(userId) {
  return {
    type: SET_USER,
    payload: userId
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

