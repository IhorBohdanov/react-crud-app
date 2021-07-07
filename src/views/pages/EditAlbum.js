import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Form, Input, Button, InputNumber } from "antd";


function EditAlbum(props) {
  const { id } = useParams();
  let [title, setTitle] = useState("");
  let [userId, setUserId] = useState(null);

  useEffect(() => {
    const getAlbum = async () => {
      const res = await api.get(`${id}`);
      console.log(res);
      setTitle(res.data.title);
      setUserId(res.data.userId);
    };

    getAlbum();
  }, []);

  const handleSubmit = () => {
    props.handleEdit({
      id,
      title,
      userId
    })
  } 

  return (
    <div>
      <h2>Edit Album</h2>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Id"
        >
          <InputNumber value={id} disabled/>
        </Form.Item>

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

export default EditAlbum;
