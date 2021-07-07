import React from 'react';
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
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
                <AlbumItem item={item} key={item.id}/>
              )}
            />
          )
          : "No data"
      }
    </div>
  )
}
