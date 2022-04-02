import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlinePlus,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import "../adminMaxsulot.css";

const MaxsulotView = () => {
  const navigate = useNavigate();
  const navigateButton = (id) => {
    navigate("/admin/maxsulot/edit", { state: id });
  };

  const [maxsulot, setMaxsulot] = useState([]);
  useEffect(() => {
    getMaxsulotlar();
  }, []);
  const getMaxsulotlar = () => {
    axios
      .get("http://localhost:8080/api/maxsulotlar")
      .then((resp) => {
        setMaxsulot(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const maxsulotDelete = (id) => {
    if (
      window.confirm(
        `Siz rostan ham maxsulotni o'chirib yubormoqchimisiz ?`
      ) === true
    ) {
      axios
        .delete(`http://localhost:8080/api/maxsulotlar/${id}`)
        .then((res) => {
          getMaxsulotlar();
        })
        .catch((err) => {});
    }
  };
  return (
    <div className="adminMaxsulotlar text-center">
      <div className="d-flex justify-content-around align-items-center">
        <h4>{maxsulot.length} ta maxsulot</h4>
        <h1 className="pb-3">Sizdagi Maxsulotlar</h1>
        <button className="adButton" onClick={() => navigateButton()}>
          Maxsulot qo'shish <HiOutlinePlus />
        </button>
      </div>
      <div className="maxsulotNavbar">
        <div>
          <h3>Maxsulot rasmi</h3>
        </div>
        <div>
          <h3>Maxsulot Nomi</h3>
        </div>
        <div>
          <h3>Maxsulot soni</h3>
        </div>
        <div>
          <h3>Maxsulot narxi</h3>
        </div>
        <div>
          <h3>Maxsulot turi</h3>
        </div>
        <div>
          <h3>Boshqarish</h3>
        </div>
      </div>
      <div className="maxsulotlarView">
        {maxsulot.map((item) => (
          <div className="adminMaxsulot">
            <div>
              <img src={item.maxsulot_rasmi} alt="" />
            </div>
            <div>
              <h3>{item.maxsulot_nomi}</h3>
            </div>
            <div>
              <h3>{item.maxsulot_holati} dona</h3>
            </div>
            <div>
              <h3>{item.maxsulot_narxi} so'm</h3>
            </div>
            <div>
              <h3>{item.maxsulot_turi}</h3>
            </div>
            <div>
              <button onClick={() => navigateButton(item.id)}>
                <HiOutlinePencilAlt />
              </button>
              <button onClick={() => maxsulotDelete(item.id)}>
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaxsulotView;
