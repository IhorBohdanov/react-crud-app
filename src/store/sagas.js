import {takeEvery, put, call} from 'redux-saga/effects'
import { REQUEST_ALBUMS, SET_ALBUMS, DELETE_ALBUM, REMOVE_ALBUM, } from './types'
import { getAlbums, deleteAlbum } from '../api'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_ALBUMS, requestAlbums);
  yield takeEvery(REMOVE_ALBUM, removeAlbum);
}

function* requestAlbums() {
  try {
    // yield put(showLoader())
    const payload = yield call(fetchAlbums)
    yield put({ type: SET_ALBUMS, payload: payload.data })
    // yield put(hideLoader())
  } catch (e) {
    // yield put(showAlert('Что-то пошло не так'))
    // yield put(hideLoader())
  }
}

function* removeAlbum({payload}) {
  console.log('from saga: ', payload)
  try {
    // yield put(showLoader())
    const res = yield call(requestDeleteAlbum, payload)
    // yield put(hideLoader())
    yield put({ type: DELETE_ALBUM, payload: payload })
  } catch (e) {
    // yield put(showAlert('Что-то пошло не так'))
    // yield put(hideLoader())
  }
}

async function requestDeleteAlbum(id) {
  console.log('from function: ', id)
  try {
    const response = await deleteAlbum(id)
    return response
  } catch(error) {
    console.log(error)
  }
}

async function fetchAlbums() {
    try {
        const response = await getAlbums()
        return response
    } catch(error) {
        console.log(error)
    }
}