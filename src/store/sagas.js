import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_ALBUMS, SET_ALBUMS, DELETE_ALBUM, REMOVE_ALBUM, MUTATE_ALBUM, UPDATE_ALBUM, POST_ALBUM, ADD_ALBUM, FETCH_ALBUM, SET_TITLE, SET_USER } from './types';
import { getAlbums, deleteAlbum, updateAlbum, createAlbum, getAlbum } from '../api';
import { showLoader, hideLoader } from './actions';
import { message } from 'antd';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_ALBUMS, requestAlbums);
  yield takeEvery(REMOVE_ALBUM, removeAlbum);
  yield takeEvery(MUTATE_ALBUM, mutateAlbum);
  yield takeEvery(POST_ALBUM, postAlbum)
  yield takeEvery(FETCH_ALBUM, fetchAlbum)
}

function* requestAlbums() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchAlbums)
    yield put({ type: SET_ALBUMS, payload: payload.data })
    yield put(hideLoader())
  } catch (error) {
    yield call(showError, 'Fail to download albums')
    yield put(hideLoader())
  }
}

function* removeAlbum({ payload }) {
  try {
    yield put(showLoader())
    yield call(requestDeleteAlbum, payload)
    yield put({ type: DELETE_ALBUM, payload: payload })
    yield call(showSuccess, 'Album successfuly removed')
    yield put(hideLoader())
  } catch (error) {
    yield call(showError, 'Fail to remove album')
    yield put(hideLoader())
  }
}

function* mutateAlbum({ payload }) {
  try {
    yield put(showLoader())
    const res = yield call(requestEditAlbum, payload)
    yield put({ type: UPDATE_ALBUM, payload: res })
    yield call(showSuccess, 'Album successfuly updated')
    yield put(hideLoader())
  } catch (error) {
    yield call(showError, 'Fail to remove album')
    yield put(hideLoader())
  }
}

function* postAlbum({ payload }) {
  try {
    yield put(showLoader())
    const res = yield call(addAlbum, payload)
    yield put({ type: ADD_ALBUM, payload: res })
    yield call(showSuccess, 'Album successfuly created')
    yield put(hideLoader())
  } catch (error) {
    yield call(showError, 'Fail to create album')
    yield put(hideLoader())
  }
}

function* fetchAlbum({ payload }) {
  try {
    yield put(showLoader())
    const res = yield call(loadAlbum, payload)
    console.log(res)
    yield put({ type: SET_TITLE, payload: res.title })
    yield put({ type: SET_USER, payload: res.userId })
    yield put(hideLoader())
  } catch (error) {
    yield call(showError, 'Fail to download album')
    yield put(hideLoader())
  }
}


async function requestDeleteAlbum(id) {
  try {
    await deleteAlbum(id)
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function requestEditAlbum(payload) {
  console.log('from function: ', payload)
  try {
    const response = await updateAlbum(payload)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function fetchAlbums() {
  try {
    const response = await getAlbums()
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function addAlbum(album) {
  try {
    const response = await createAlbum(album)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function loadAlbum(id) {
  try {
    const response = await getAlbum(id)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

//app
function showError(msg) {
  message.error({
    content: msg
  })
}

function showSuccess(msg) {
  message.success({
    content: msg
  })
}