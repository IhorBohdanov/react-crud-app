import React from 'react'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import history from '../../history';

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout(props) {
    return (
        <Layout>
        <Router history={history}>
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
                {props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Router>
      </Layout>
    )
}
