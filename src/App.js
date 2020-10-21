import React, {useState} from 'react';
import './App.less'

// components

import { Layout, Menu, Breadcrumb, Modal } from 'antd';
import { AreaChartOutlined, BlockOutlined, BranchesOutlined, DatabaseOutlined} from '@ant-design/icons';

import { Teams } from './components/Teams';



const {SubMenu} = Menu;
const { Header, Content, Sider} = Layout;

// modal functions


function App() {
  // place hooks

  const [introOpen, setIntroOpen] = useState(false);

  return (
    <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Resources</Menu.Item>
            <Menu.Item key="3" onClick={()=> setIntroOpen(!introOpen)}>FAQ</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<AreaChartOutlined />} title="Overview">
                <Menu.Item key="1">Map</Menu.Item>
                <Menu.Item key="2">Tables</Menu.Item>
          
              </SubMenu>
              <SubMenu key="sub2" icon={<BlockOutlined />} title="Project Planner">
                <Menu.Item key="10">Project Title 1</Menu.Item>
                <Menu.Item key="11">Project Title 2</Menu.Item>
                <Menu.Item key="12">Project Title 3</Menu.Item>
                <Menu.Item key="13">Project Title 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<BranchesOutlined />} title="Decision Tree">
                <Menu.Item key="20">Graphs</Menu.Item>
                <Menu.Item key="21">Gantt</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<DatabaseOutlined />} title="Resources">
                <Menu.Item key="30">Service Data</Menu.Item>
                <Menu.Item key="31">Project Models</Menu.Item>
                <Menu.Item key="32">Regions</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
          <Modal
          title="FAQ"
          visible={introOpen}
          cancelButtonProps={{ style: { display: "none" } }}
          onOk={() => setIntroOpen(false)}
          okText="Thanks!"
          closable={false}
          >
            <h1>Welcome to Optris</h1>
            <p>A service analysis and delivery visualization application. </p>
            <h2>Our Mission</h2>

          </Modal>
      </Layout>
      );
}

export default App;
