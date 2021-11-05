import React from "react";
import EditForm from '../components/EditForm';
import { useAlbum } from '../../hooks';

function CreateAlbum(props) {
  const { title, userId, setTitle, setUserId, createAlbum } = useAlbum();

  return (
    <div>
      <h2>Create Album</h2>
      <EditForm formModel={{ title, setTitle, userId, setUserId }} handleSubmit={createAlbum}/>
    </div>
  );
}
  
export default CreateAlbum;