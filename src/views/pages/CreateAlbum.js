import React, { useState } from "react";
import EditForm from '../components/EditForm';

function CreateAlbum(props) {
  let [title, setTitle] = useState("");
  let [userId, setUserId] = useState(1);

  const handleSubmit = async (payload) => {
    await props.handleCreate(payload)
  }

  return (
    <div>
      <h2>Create Album</h2>
      <EditForm formModel={{ title, setTitle, userId, setUserId }} handleSubmit={handleSubmit}/>
    </div>
  );
}
  
export default CreateAlbum;