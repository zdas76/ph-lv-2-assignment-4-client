import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Products from "../pages/Products";
import RootLayout from "../components/layout/RootLayout";
import ProdctManagement from "../pages/ProdctManagement";
import ViewsProduct from "../pages/ViewsProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
      index: true,
      element: <App />
      },
      {
      path: "/home",
      element: <App />
      },
      {
      path: "/product",
      element: <Products />
    },
      {
      path: "/product/:id",
      element: <ViewsProduct />
    },
    {
      path: "/productmanage",
      element: <ProdctManagement />,
    
    },
    {
      path: "/about",
      element: <About />
    },
      ]
    },
  
  
]);

export default router;