
import {  Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

const {  Sider } = Layout;

const items2 = [
  {
    key: 'Add Product',
    label: <NavLink to={'/productmanage/addporduct'}> Add Product</NavLink>
  }
]

export default function ProductMangeLayout() {
  return  <Layout style={{height:'100%'}}>

      <Layout>
        <Sider width={250} style={{  }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0  }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
         
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
}
