import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
