import { useEffect, useState } from 'react';
import { getAlbums } from '../api';
import { message } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {requestAlbums, removeAlbum} from '../store/actions'

export const useFetchAlbums = () => {
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