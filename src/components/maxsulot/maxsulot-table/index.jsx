import React from "react";
import { useNavigate } from "react-router-dom";

import "../maxsulot.css";

const MaxsulotTable = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/maxsulot/add", {
      state: {
        maxsulot_id: id,
      },
    });
  };
  return (
    <>
      {item.holati > 0 ? (
        <div
          className="maxsulotTable d-flex justify-content-center align-items-center mavjud"
          onClick={() => handleClick(item.id)}
        >
          <h1>{item.nomi}</h1>
        </div>
      ) : (
        <div
          className="maxsulotTable d-flex justify-content-center align-items-center mavjudEmas"
          onClick={() => handleClick(item.id)}
        >
          <h1>{item.nomi}</h1>
        </div>
      )}
    </>
  );
};

export default MaxsulotTable;
