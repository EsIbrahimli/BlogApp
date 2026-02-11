import { Layout, Menu, theme, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { Router } from '../../Router/Router';
import React from 'react'

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: Router.Home,
    label: <Link to={Router.Home}>Home</Link>,
  },
  {
    key: Router.About,
    label: <Link to={Router.About}>About</Link>,
  },
  {
    key: Router.Blogs,
    label: <Link to={Router.Blogs}>Blog</Link>,
  },
  {
    key: Router.Contact,
    label: <Link to={Router.Contact}>Contact</Link>,
  },
];


const Layouts = ({ children }) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          backgroundColor: '#2275b0',
        }}
      >
        <Flex align="center" justify="space-between" style={{ width: '100%' }}>
          <div
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              marginRight: 24,
              cursor: 'pointer',
              flex: 1
            }}
          >
            Blog App
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0, backgroundColor: '#2275b0' }}
          />
          <Link
            to={Router.CreateBlog}
            style={{
              color: '#fff',
              padding: '0px 12px',
              fontSize: 16,
              cursor: 'pointer',
              textAlign: 'right',
            }}
          >
            Create New Blog
          </Link>

        </Flex>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 'calc(100vh - 134px)',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Powered by React ©{new Date().getFullYear()} • Created by Esmer Ibrahimli
      </Footer>
    </Layout>
  )
}

export default Layouts