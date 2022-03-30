import Layout from "../components/Layout";
import Home from "../pages/home";
import Maxsulotlar from "../pages/maxsulotlar";
import Stol from "../pages/stol";

// ====== components =======//

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
      }
    ],
  },
];
