import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

export default function EditForm(props) {
  const history = useHistory()
  let { formModel } = props;
  let { title, setTitle, userId, setUserId, id } = formModel;

  const handleSubmit = async () => {
    const params = {
      title,
      userId
    }
    id && (params.id = id)

    if (!title || !userId ) {
      message.error({ content: 'Please fill out all fields'});
      return;
    }

    await props.handleSubmit(params)
    history.push('/albums');
  } 

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      layout="vertical"
      onFinish={handleSubmit}
    >
      {
        id && (
          <Form.Item
            label="Id"
          >
            <InputNumber value={id} disabled />
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
        <InputNumber min={1} max={10} value={userId} onChange={(e) => setUserId(e)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
