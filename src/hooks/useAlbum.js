import { useEffect } from 'react';
import { mutateAlbum, postAlbum, fetchAlbum, setUser, setAlbumTitle } from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export const useAlbum = (id) => {
  const dispatch = useDispatch()
  
  const title = useSelector(state => state.albums.title)
  const userId = useSelector(state => state.albums.userId)

  const createAlbum = (payload) => {
    dispatch(postAlbum(payload))
  }

  const editAlbum = (album) => {
    dispatch(mutateAlbum(album))
  }

  const setUserId = (userId) => {
    dispatch(setUser(userId))
  }

  const setTitle = (title) => {
    dispatch(setAlbumTitle(title))
  }

  useEffect(() => {
    dispatch(setAlbumTitle(''))
    dispatch(setUser(''))

    if (id) {
      dispatch(fetchAlbum(id))
    }
  }, [])

  return { title, userId, setTitle, setUserId, createAlbum, editAlbum }
}