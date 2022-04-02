// ====== admin router =======//

import AdminLayout from "../admin/adminComonents/adminLayout";
import AdminMaxsulotlar from "../admin/adminPages/adminMaxsulotlar";
import AdminCategory from "../admin/adminPages/adminCategory";

// ====== admin router components =======//

import AdminMaxsulotEdit from "../admin/adminComonents/adminMaxsulot/edit and post";

// ====== afitsant router =======//

import Layout from "../components/Layout";
import Home from "../pages/home";
import Maxsulotlar from "../pages/maxsulotlar";
import Stol from "../pages/stol";

// ====== afitsant router components =======//

import MaxsulotAdd from "../components/maxsulot/maxsulot-add";
import Buyurtmalar from "../components/buyurtmalar";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Stol />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/maxsulotlar",
        element: <Maxsulotlar />,
      },
      {
        path: "/maxsulot/add",
        element: <MaxsulotAdd />,
      },
      {
        path: "/buyurtmalar",
        element: <Buyurtmalar />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminMaxsulotlar />,
      },
      {
        path: "/admin/category",
        element: <AdminCategory />,
      },
      {
        path: "/admin/maxsulot/edit",
        element: <AdminMaxsulotEdit />,
      },
    ],
  },
];
