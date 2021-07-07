import React, { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";

function CreateAlbum(props) {
  let [title, setTitle] = useState("");
  let [userId, setUserId] = useState(null);

  const handleSubmit = () => {
    props.handleCreate({
      title,
      userId
    })
  }

  return (
    <div>
      <h2>Create Album</h2>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        layout="vertical"
        onFinish={handleSubmit}
      >

        <Form.Item
          label="Title"
        >
          <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
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
    </div>
  );
}
  
  export default CreateAlbum;