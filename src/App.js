import { Layout, Menu } from 'antd';
import Home from './views/pages/Home';
import Albums from './views/pages/Albums';
import CreateAlbum from './views/pages/CreateAlbum';
import SingleAlbum from './views/pages/SingleAlbum';
import Page404 from './views/pages/Page404';
import api from './api';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import Item from 'antd/lib/list/Item';
import { message, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const getAlbums = async () => {
  const res = await api.get()
  return res
}

const deleteAlbum = async (id) => {
  try {
    const res = await api.delete(`${id}`)
    return
  } catch(error) {
    throw error
  }
}

function App() {


  let [albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadAlbums = async () => {
      let res = await getAlbums()
      setAlbums(res.data)
    }
    
    loadAlbums()
  },[])

  const handleDelete = async (id) => {
    try {
      await deleteAlbum(id)
      setAlbums(albums.filter(item => item.id !== id))
      message.success({
        content: 'Album successfuly deleted'
      })
    } catch(error) {
      message.error({
        content: 'Fail to delete album'
      })
    }
  }

  const handleEdit = (id) => {
    console.log('id', id)
  }

  return (
    <div className="App">
      <Layout>
        <Router>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <Link to="/home">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/albums">
                  Albums
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/create-album">
                  Create album
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  <Route path="/home" exact>
                    <Home />
                  </Route>
                  <Route path="/albums" exact>
                    <Albums albums={albums} handleDelete={handleDelete} handleEdit={handleEdit}/>
                  </Route>
                  <Route path="/albums/:id" exact>
                    <SingleAlbum />
                  </Route>
                  <Route path="/create-album" exsact>
                    <CreateAlbum />
                  </Route>
                  <Route path="*">
                    <Page404 />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
