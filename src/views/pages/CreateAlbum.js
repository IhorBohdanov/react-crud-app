import React, { useState } from "react";
import EditForm from '../components/EditForm';

function CreateAlbum(props) {
  let [title, setTitle] = useState("");
  let [userId, setUserId] = useState(null);

  const handleSubmit = (payload) => {
    props.handleCreate(payload)
  }

  return (
    <div>
      <h2>Create Album</h2>
      <EditForm handleSubmit={handleSubmit}/>
    </div>
  );
}
  
  export default CreateAlbum;