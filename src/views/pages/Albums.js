import React from 'react';
import { List } from 'antd';
import AlbumItem from '../components/AlbumItem';


export default function Albums(props) {
  return (
    <div>
      {
        props.albums.length ?
          (
            <List
              dataSource={props.albums}
              renderItem={item => (
                <AlbumItem item={item} key={item.id} handleDelete={props.handleDelete}/>
              )}
            />
          )
          : "No data"
      }
    </div>
  )
}
