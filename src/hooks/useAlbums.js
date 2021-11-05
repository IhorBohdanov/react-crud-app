import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestAlbums, removeAlbum } from '../store/actions'

export const useAlbums = () => {
  const dispatch = useDispatch()
  const albums = useSelector(state => state.albums.albums)

  const deleteAlbum = (id) => {
    dispatch(removeAlbum(id))
  }

  useEffect(() => {
    dispatch(requestAlbums())
  }, [])

  return { albums, deleteAlbum }
}