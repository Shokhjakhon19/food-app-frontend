import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./buyurtmalar.css";

import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Buyurtmalar = () => {
  const stol_id = useSelector((s) => s.stol.stol_id);
  const navigate = useNavigate();

  const [buyurtma, setBuyurtma] = useState([]);
  useEffect(() => {
    getBuyurtma();
  }, []);

  const getBuyurtma = () => {
    axios
      .get(`http://localhost:8080/api/stol_${stol_id}`)
      .then((resp) => {
        setBuyurtma(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteBuyurtma = (id) => {
    if (window.confirm(`Siz rostan ham buyurtmani o'chirib yubormoqchimisiz ?`) === true) {
      axios
        .delete(`http://localhost:8080/api/stol_${stol_id}/${id}`)
        .then((res) => {
          getBuyurtma();
        })
        .catch((err) => {});
    }
  };

  const hisoblash = () => {
    if (
      window.confirm(
        "Agar ok ni bossangiz barcha buyurtmalar o'chirib yuboriladi, rozimisiz ?"
      ) === true
    ) {
      axios
        .delete(`http://localhost:8080/api/stol_${stol_id}`)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {});
    }
  };

  var umumiy = 0;
  buyurtma.forEach((element) => {
    umumiy += Number(element.buyurtma_narxi);
  });
  console.log(umumiy);

  return (
    <>
      {buyurtma.length > 0 ? (
        <div className="container_fluid d-inline text-center">
          <h4>{stol_id} - stol dagi buyurtmalar</h4>
          <table className="buyurtmaTable">
            <tr>
              <th>№</th>
              <th>Buyurtma nomi</th>
              <th>Soni</th>
              <th>Narxi</th>
              <th>bekor qilish</th>
            </tr>
            {buyurtma.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.buyurtma_nomi}</td>
                <td>{item.buyurtma_soni}</td>
                <td>{item.buyurtma_narxi} so'm</td>
                <td>
                  <button onClick={() => deleteBuyurtma(item.id)}>
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <h3 className="mt-5">Umumiy summa: {umumiy} so'm</h3>
          <div className="d-flex justify-content-center hisoblash">
            <button className="mt-5" onClick={() => hisoblash()}>
              To'landi
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center text-center">
          <h1>{stol_id} - stolda hozir hech qanday buyurtma mavjud emas</h1>
        </div>
      )}
    </>
  );
};

export default Buyurtmalar;
