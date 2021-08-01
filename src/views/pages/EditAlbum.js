import React from "react";
import { useParams } from "react-router-dom";
import { useAlbum } from '../../hooks';
import EditForm from '../components/EditForm';


function EditAlbum() {
  const { id } = useParams();  
  let  { title, userId, setTitle, setUserId, editAlbum } = useAlbum(id);

  const handleSubmit = async () => {
    await editAlbum({ id: +id, title, userId })
  } 

  return (
    <div>
      <h2>Edit Album</h2>
      <EditForm formModel={{ title, setTitle, userId, setUserId, id }} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default EditAlbum;
