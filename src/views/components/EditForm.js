import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button, InputNumber } from "antd";
import { useFetchAlbum } from '../../hooks';

export default function EditForm(props) {
  let [title, setTitle] = useState('');
  let [userId, setUserId] = useState('');


  const handleSubmit = () => {
    const params = {
      title,
      userId
    }

    props.album?.id && (params.id = props.album.id)
    
    props.handleSubmit(params)
  } 

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      layout="vertical"
      onFinish={handleSubmit}
    >
      {
        !!props.album?.id && (
          <Form.Item
            label="Id"
          >
            <InputNumber value={props.album.id} disabled />
          </Form.Item>
        ) 
      }
      
      <Form.Item
        label="Title"
      >
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="User Id"
      >
        <InputNumber value={userId} onChange={(e) => setUserId(e)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
