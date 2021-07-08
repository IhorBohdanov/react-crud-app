import React from "react";
import { useParams } from "react-router-dom";
import { useFetchAlbum } from '../../hooks';
import EditForm from '../components/EditForm';


function EditAlbum(props) {
  const { id } = useParams();
  let  { title, userId, setTitle, setUserId } = useFetchAlbum(id);

  const handleSubmit = () => {
    return props.handleEdit({ id, title, userId })
  } 

  return (
    <div>
      <h2>Edit Album</h2>
      <EditForm formModel={{ title, setTitle, userId, setUserId, id }} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default EditAlbum;
