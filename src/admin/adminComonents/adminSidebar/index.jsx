import React from "react";
import { Link } from "react-router-dom";

import "./adminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="adminSidebar">
      <div className="d-grid justify-content-center">
        <h4>Side bar</h4>
      </div>
      <div className="sidebarLink pt-4">
        <Link to="/admin">Maxsulotlar</Link>
        <Link to="/admin/category">Category</Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
