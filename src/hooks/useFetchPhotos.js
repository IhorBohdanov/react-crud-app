import { useEffect, useState } from 'react';
import { getPhotos } from '../api';
import { message } from 'antd';

export const useFetchPhotos = (id) => {
  let [photos, setPhotos] = useState({});

  useEffect(() => {
    getPhotos(id)
      .then((res) => {
        setPhotos(res.data)
      })
      .catch((error) => {
        message.error({
          content: 'Fail to fetch photos'
        })
      })
  }, [])

  return [photos, setPhotos]
}

