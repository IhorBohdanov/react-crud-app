import { useEffect } from 'react';
import { mutateAlbum, postAlbum, fetchAlbum, setUser, setAlbumTitle } from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

export const useAlbum = (id) => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const title = useSelector(state => state.albums.title)
  const userId = useSelector(state => state.albums.userId)

  const createAlbum = (payload) => {
    dispatch(postAlbum(payload))
    history.push('/albums');
  }

  const editAlbum = (album) => {
    dispatch(mutateAlbum(album))
    history.push('/albums');
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