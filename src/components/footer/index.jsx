import React from "react";

import { BsHouse, BsShopWindow, BsList } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const stol_id = useSelector((s) => s.stol.stol_id);

  const home = () => {
    if (stol_id != 0) {
      navigate("/home");
    } else {
      navigate("/");
      window.alert("Maxsulotlarni ko'rish uchun stolni tanlashingiz kerak");
    }
  };
  const stol = () => {
    navigate("/");
  };
  const buyurtmalar = () => {
    if (stol_id != 0) {
      navigate("/buyurtmalar");
    } else {
      navigate("/");
      window.alert("Buyurtmalarni ko'rish uchun stolni tanlashingiz kerak");
    }
  };

  return (
    <div className="footer">
      <button onClick={() => stol()}>
        <BsList />
      </button>
      <button onClick={() => home()}>
        <BsHouse />
      </button>
      <button onClick={() => buyurtmalar()}>
        <BsShopWindow />
      </button>
    </div>
  );
};

export default Footer;
