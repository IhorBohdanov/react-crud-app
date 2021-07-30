import React from 'react';
import { List } from 'antd';
import AlbumItem from '../components/AlbumItem';
import { useFetchAlbums } from '../../hooks';


export default function Albums(props) {
  let {albums, deleteAlbum} = useFetchAlbums();

  return (
    <div>
      {
        albums.length ?
          (
            <List
              dataSource={albums}
              renderItem={item => (
                <AlbumItem item={item} key={item.id} handleDelete={deleteAlbum}/>
              )}
            />
          )
          : "No data"
      }
    </div>
  )
}
