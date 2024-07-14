import Footers from '../Footer/Footer';
import { Layout, Menu } from 'antd';

import { NavLink, Outlet } from 'react-router-dom';



const { Header, Content, Footer } = Layout;

const items1 = [
  {
    key:"Home",
    label: <NavLink to={'/home'}>Home</NavLink>
  },
  
  {
    key: 'Products',
    label: <NavLink to={'/product'}>Products</NavLink>
  },
  {
    key: "Product Management",
    label: <NavLink to={'/productmanage'}>Product Management</NavLink>
  },
  {
    key: "About",
    label: <NavLink to={'/about'}>About</NavLink>
  }
  ]

// navberItemsGenerator();


export default function RootLayout() {
  return (
   <Layout style={{}}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent:'space-around' }}>
        <div className="demo-logo">
          <h1 style={{marginRight:'20px', padding: '10px, 5px', }}><NavLink to="/" style={{color:'white', padding:'5px 30px' }}>SFEA</NavLink> </h1>
        </div>
        <div>
          <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0, fontSize:'18px' }}
        />
        </div>
        <div>
          <h1 style={{color: 'white'}}>icon</h1>
        </div>
      </Header>
      <Layout>
        
        <Layout style={{ padding: '0 24px 24px', width:"90%", border: '2px solid green', margin: '0px auto' }}>
         
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              height:'95vh'
            }}
          >
            <Outlet />
          </Content>
          
        </Layout>
          <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', fontSize: '13px' }}>
            <Footers />
          </Footer>
      </Layout>
    </Layout>
  )
}
