import Home from './views/pages/Home';
import Albums from './views/pages/Albums';
import CreateAlbum from './views/pages/CreateAlbum';
import EditAlbum from './views/pages/EditAlbum';
import SingleAlbum from './views/pages/SingleAlbum';
import Page404 from './views/pages/Page404';
import { Route, Switch } from 'react-router-dom';
import { useAlbums } from './hooks';
import AppLayout from './views/components/AppLayout';


function App() {
  let {albums, deleteAlbum } = useAlbums();

  return (
    <div className="App">
      <AppLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/albums" exact>
            <Albums albums={albums} onAlbumDelete={deleteAlbum}/>
            {/* handleDelete={handleDelete} */}
          </Route>
          <Route path="/albums/:id" exact>
            <SingleAlbum />
          </Route>
          <Route path="/create-album" exsact>
            <CreateAlbum />
            {/* handleCreate={handleCreate} */}
          </Route>
          <Route path="/edit-album/:id" exsact>
            <EditAlbum />
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