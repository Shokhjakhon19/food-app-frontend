import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../adminNavbar";
import Sidebar from "../adminSidebar";

import "./adminLayout.css";

const AdminLayout = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="adminLayout">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
