import Footers from "../Footer/Footer";
import { Layout, Menu } from "antd";

import { NavLink, Outlet } from "react-router-dom";
import Drower from "./Drower";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../redux/hooks";

const { Header, Content, Footer } = Layout;

export const items1 = [
  {
    key: "Home",
    label: <NavLink to={"/home"}>Home</NavLink>,
  },
  {
    key: "Products",
    label: <NavLink to={"/product"}>Products</NavLink>,
  },
  {
    key: "Product Management",
    label: <NavLink to={"/productmanage"}>Product Management</NavLink>,
  },
  {
    key: "About",
    label: <NavLink to={"/about"}>About</NavLink>,
  },
];

// navberItemsGenerator();

export default function RootLayout() {
  const state = useAppSelector((state) => state.carts.carts);
  console.log(state);

  return (
    <Layout style={{}}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo">
          <NavLink
            to="/"
            style={{
              color: "white",
              padding: "5px 30px",
              fontSize: "25px",
            }}
          >
            <img src="icons/Logo.png" alt="Logo" width={90} />
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          className="hidden md:flex md:flex-1 justify-center text-xl "
        />
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="flex flex-col">
            <NavLink to="/cart">
              <div className="bg-red-500 text-white flex justify-center items-center rounded-full h-6">
                {state.length}
              </div>
              <ShoppingCart className="text-white font-bold" />
            </NavLink>
          </div>
          <div className="md:hidden mt-4 cursor-pointer">
            <Drower />
          </div>
        </div>
      </Header>
      <Layout>
        <Layout>
          <Content className="container mx-auto min-h-dvh">
            <Outlet />
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "13px",
          }}
        >
          <Footers />
        </Footer>
      </Layout>
    </Layout>
  );
}
