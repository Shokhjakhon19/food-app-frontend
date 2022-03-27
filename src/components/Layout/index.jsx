import React, { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet, useNavigate } from "react-router-dom";

import "./layout.css";

const Layout = () => {
  const navigate = useNavigate();
  window.onbeforeunload = function () {
    if (window.confirm("Sahifani yangilashni hohlaysizmi ?") == true) {
      navigate("/");
    }
  };

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
