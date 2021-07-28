import {takeEvery, put, call} from 'redux-saga/effects'
// import {FETCH_POSTS, REQUEST_POSTS} from './types'
import {hideLoader, showAlert, showLoader} from './actions'
import { getAlbums } from '../api'

export function* sagaWatcher() {
  yield takeEvery(FETCH_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    // yield put(showLoader())
    const payload = yield call(fetchPosts)
    // yield put({ type: FETCH_POSTS, payload })
    // yield put(hideLoader())
  } catch (e) {
    // yield put(showAlert('Что-то пошло не так'))
    // yield put(hideLoader())
  }
}

async function fetchPosts() {
    try {
        const response = await getAlbums()
        return response
    } catch(error) {
        console.log(error)
    }
}