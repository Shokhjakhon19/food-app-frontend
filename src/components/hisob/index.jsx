import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hisob = () => {
  const stol_id = useSelector((s) => s.stol.stol_id);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const [buyurtma, setBuyurtma] = useState([]);
  useEffect(() => {
    getBuyurtma();
  }, []);

  const getBuyurtma = () => {
    if (stol_id !== 0) {
      axios
        .get(`http://localhost:8080/api/stol_${stol_id}`)
        .then((resp) => {
          setBuyurtma(resp.data);
          var tootal = 0;
          var t_foot = buyurtma.map((val) => {
            var data = { ...val, price: val.buyurtma_narxi };
            tootal += Number(data.price);
            return data;
          });
          setPrice(tootal);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Siz stolni tanlamadingiz");
      navigate("/");
    }
  };

  const tayyor = () => {
    if (
      window.confirm(
        "Agar ok ni bossangiz barcha buyurtmalar o'chirib yuboriladi, rozimisiz ?"
      ) == true
    ) {
      axios
        .delete(`http://localhost:8080/api/stol_${stol_id}`)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {});
    }
  };

  return (
    <div>
      <button onClick={() => tayyor()}>{price}</button>
    </div>
  );
};

export default Hisob;
