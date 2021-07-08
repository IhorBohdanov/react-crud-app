import { useEffect, useState } from 'react';
import { getAlbum } from '../api';
import { message } from 'antd';

export const useFetchAlbum = (id) => {
  let [title, setTitle] = useState('')
  let [userId, setUserId] = useState('')


  useEffect(() => {
    getAlbum(id)
      .then((res) => {
        const album = res.data;
        setTitle(album.title);
        setUserId(album.userId);
      })
      .catch((error) => {
        message.error({
          content: 'Fail to fetch album'
        })
      })
  }, [])

  return { title, userId, setTitle, setUserId }
}

export default useFetchAlbum