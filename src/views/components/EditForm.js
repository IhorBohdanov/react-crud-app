import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { message } from 'antd';

export default function EditForm(props) {
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
  } 

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      layout="vertical"
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
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
