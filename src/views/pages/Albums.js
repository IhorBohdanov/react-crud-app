import React from 'react';
import { List } from 'antd';
import AlbumItem from '../components/AlbumItem';

export default function Albums({albums, onAlbumDelete}) {
  return (
    <div>
      {
        albums.length ?
          (
            <List
              dataSource={albums}
              renderItem={item => (
                <AlbumItem item={item} key={item.id} handleDelete={onAlbumDelete}/>
              )}
            />
          )
          : "No data"
      }
    </div>
  )
}
