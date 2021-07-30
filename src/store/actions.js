import { LOAD_POSTS, REQUEST_ALBUMS, REMOVE_ALBUM, DELETE_ALBUM } from './types'

// export function createPost(post) {
//   return {
//     type: CREATE_POST,
//     payload: post
//   }
// }

// export function showLoader() {
//   return {
//     type: SHOW_LOADER
//   }
// }

// export function hideLoader() {
//   return {
//     type: HIDE_LOADER
//   }
// }

// export function showAlert(text) {
//   return dispatch => {
//     dispatch({
//       type: SHOW_ALERT,
//       payload: text
//     })

//     setTimeout(() => {
//       dispatch(hideAlert())
//     }, 3000)
//   }
// }

// export function hideAlert() {
//   return {
//     type: HIDE_ALERT
//   }
// }

// export function fetchPosts() {
//   return {
//     type: REQUEST_POSTS
//   }
//   // return async dispatch => {
//   //   try {
//   //     dispatch(showLoader())
//   //     const response = await fetch('ttps://jsonplaceholder.typicode.com/posts?_limit=5')
//   //     const json = await response.json()
//   //     setTimeout(() => {
//   //       dispatch({ type: FETCH_POSTS, payload: json })
//   //       dispatch(hideLoader())
//   //     }, 500)
//   //   } catch (e) {
//   //     dispatch(showAlert('Что-то пошло не так'))
//   //     dispatch(hideLoader())
//   //   }
//   // }
// }

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