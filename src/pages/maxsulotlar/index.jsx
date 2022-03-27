import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./maxsulotlar.css";

import MaxsulotTable from "../../components/maxsulot/maxsulot-table";

const Maxsulotlar = () => {
  const { state } = useLocation();
  const [maxsulot, setMaxsulot] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get(`http://localhost:8080/api/maxsulotlar/filter?turi=${state.turi}`)
      .then((resp) => {
        const filteredData = resp.data.map((item) => ({
          id: item.id,
          nomi: item.maxsulot_nomi,
          holati: item.maxsulot_holati,
          narxi: item.maxsulot_narxi,
          turi: item.maxsulot_turi,
          rasmi: item.maxsulot_rasmi,
        }));
        setMaxsulot(filteredData);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="maxsulotlar">
      {maxsulot.map((item, index) => (
        <MaxsulotTable item={item} key={index} />
      ))}
    </div>
  );
};

export default Maxsulotlar;
