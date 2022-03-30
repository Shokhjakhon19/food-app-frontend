import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "../maxsulot.css";

const MaxsulotAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const stol_id = useSelector((s) => s.stol.stol_id);

  // ==== counter kodi
  const [num, setNum] = useState(1);
  const counter = (value) => {
    if (maxsulot.maxsulot_holati > num && value === "+") {
      setNum(num + 1);
    } else if (num > 1 && value === "-") {
      setNum(num - 1);
    }
  };

  const [maxsulot, setMaxsulot] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/maxsulotlar/${state.maxsulot_id}`)
      .then((resp) => {
        setMaxsulot(resp.data);
      })
      .catch((err) => console.log(err));
  }, [state.maxsulot_id]);

  const submitData = async () => {
    if (maxsulot.maxsulot_holati > 0) {
      const data = {
        buyurtma_nomi: maxsulot.maxsulot_nomi,
        buyurtma_soni: num,
        buyurtma_narxi: maxsulot.maxsulot_narxi * num,
      };
      axios
        .post(`http://localhost:8080/api/stol_${stol_id}`, data)
        .then((resp) => {
          alert("Maxsulot muavaffaqqiyatli qo'shildi.");
          navigate("/home", {
            state: {
              stol_id: stol_id,
            },
          });
        })
        .catch((err) => console.log(err));
    } else {
      window.alert(`${maxsulot.maxsulot_nomi} hozircha mavjud emas`);
    }
  };

  return (
    <div className="maxsulotAdd">
      <div className="d-flex justify-content-center align-items-center">
        <img src={maxsulot.maxsulot_rasmi} alt="" />
        <h1 className="nomi">{maxsulot.maxsulot_nomi}</h1>
      </div>
      {maxsulot.maxsulot_holati > 0 ? (
        <h4 className="mavjudText">Mavjud</h4>
      ) : (
        <h4 className="mavjudEmasText">Mavjud emas</h4>
      )}
      <div className="maxsulotNarxi">
        <h5>Maxsulot narxi: {maxsulot.maxsulot_narxi} so'm</h5>
      </div>
      <div className="addButton">
        <button onClick={() => counter("-")}>-</button>
        <button disabled>{num}</button>
        <button onClick={() => counter("+")}>+</button>
      </div>
      <div className="buyurtmaQilish">
        <button onClick={submitData}>Buyurtma qilish</button>
      </div>
    </div>
  );
};

export default MaxsulotAdd;
