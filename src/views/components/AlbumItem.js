import React from 'react';
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function AlbumItem(props) {
  const item = props.item;
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar size={40}>{item.id}</Avatar>}
        title={<Link to={`/albums/${item.id}`}>{item.title}</Link>}
      />
      <div>
        <Link to={`/edit-album/${item.id}`}>
          <Button type="link">
            Edit
          </Button>
        </Link>
        <Button type="primary" danger onClick={() => props.handleDelete(item.id)}>
          Delete
        </Button>
      </div>
    </List.Item>
  )
}
