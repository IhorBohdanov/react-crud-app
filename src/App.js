import Home from './views/pages/Home';
import Albums from './views/pages/Albums';
import CreateAlbum from './views/pages/CreateAlbum';
import EditAlbum from './views/pages/EditAlbum';
import SingleAlbum from './views/pages/SingleAlbum';
import Page404 from './views/pages/Page404';
import { deleteAlbum, createAlbum, updateAlbum } from './api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { message } from 'antd';
import { useFetchAlbums } from './hooks';
import AppLayout from './views/components/AppLayout'


function App() {
  let [albums, setAlbums] = useFetchAlbums()

  const handleCreate = async (payload) => {
    try {
      const res = await createAlbum(payload)
      setAlbums([...albums, res.data])
      message.success({
        content: 'Album successfuly created'
      })
    } catch (error) {
      message.error({
        content: 'Fail to create album'
      })
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteAlbum(id)
      setAlbums(albums.filter(item => item.id !== id))
      message.success({
        content: 'Album successfuly deleted'
      })
    } catch (error) {
      message.error({
        content: 'Fail to delete album'
      })
    }
  }

  const handleEdit = async (payload) => {
    try {
      const res = await updateAlbum(payload)
      const index = albums.findIndex(
        album => album.id === res.data.id
      );
      let albumArr = [...albums]
      albumArr.splice(index, 1, res.data)
      setAlbums(albumArr)
      message.success({
        content: 'Album successfuly edited'
      })
    } catch (error) {
      message.error({
        content: 'Fail to delete album'
      })
    }
  }

  return (
    <div className="App">
      <AppLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/albums" exact>
            <Albums albums={albums} handleDelete={handleDelete} />
          </Route>
          <Route path="/albums/:id" exact>
            <SingleAlbum />
          </Route>
          <Route path="/create-album" exsact>
            <CreateAlbum handleCreate={handleCreate} />
          </Route>
          <Route path="/edit-album/:id" exsact>
            <EditAlbum handleEdit={handleEdit} />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </AppLayout>
    </div>
  );
}

export default App;