import { useEffect, useState } from 'react';
import { getAlbums } from '../api';
import { message } from 'antd';

export const useFetchAlbums = () => {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
      getAlbums()
        .then((res) => {
          setAlbums(res.data)
        })
        .catch((error) => {
          message.error({
            content: 'Fail to fetch albums'
          })
        })
    }, [])

    return [albums, setAlbums]
}