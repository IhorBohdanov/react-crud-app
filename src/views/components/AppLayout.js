import React from 'react'
import { Layout, Menu, Spin } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout(props) {
  const loaderVisible = useSelector(state => state.app.loaderVisible)
  return (
    <Layout>
      <Router>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="/">
              <Link to="/">
                Home
                </Link>
            </Menu.Item>
            <Menu.Item key="/albums">
              <Link to="/albums">
                Albums
                </Link>
            </Menu.Item>
            <Menu.Item key="/create-album">
              <Link to="/create-album">
                Create album
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <Spin spinning={loaderVisible}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {props.children}
              </div>
            </Spin>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    </Layout>
  )
}
