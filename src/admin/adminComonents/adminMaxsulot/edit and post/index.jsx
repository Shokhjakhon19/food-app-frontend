import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MaxsulotEditAndPost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [nomi, setNomi] = useState("");
  const [rasmi, setRasmi] = useState(undefined);
  const [holati, setHolati] = useState("");
  const [narxi, setNarxi] = useState("");
  const [turi, setTuri] = useState("");
  useEffect(() => {
    if (state) {
      axios
        .get(`http://localhost:8080/api/maxsulotlar/${state}`)
        .then((resp) => {
          setNomi(resp.data.maxsulot_nomi);
          setRasmi(resp.data.maxsulot_rasmi);
          setHolati(resp.data.maxsulot_holati);
          setNarxi(resp.data.maxsulot_narxi);
          setTuri(resp.data.maxsulot_turi);
        })
        .catch((err) => console.log(err));
    }
  }, [state]);

  const submitData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("maxsulot_nomi", nomi);
    formData.append("file", rasmi);
    formData.append("maxsulot_holati", holati);
    formData.append("maxsulot_narxi", narxi);
    formData.append("maxsulot_turi", turi);

    if (state) {
      axios
        .put(`http://localhost:8080/api/maxsulotlar/${state}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/admin", { replace: true });
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:8080/api/maxsulotlar", formData)
        .then((resp) => {
          alert("Product successfully Created!!!");
          navigate("/admin", { replace: true });
        })
        .catch((err) => console.log(err));
    }
  };

  function useDisplayImage() {
    const [result, setResult] = React.useState("");
    function uploader(e) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        console.log(result);
      });
      reader.readAsDataURL(imageFile);
    }
    return { result, uploader };
  }
  const { result, uploader } = useDisplayImage();

  return (
    <div>
      <div className="d-grid justify-content-center mt-5">
        <h2>{state ? "Maxsulotni o'zgaritish" : "Maxsulot qo'shish"}</h2>
      </div>
      <form className="form d-flex flex-column">
        {/* <label htmlFor="Nomi">Maxsulot nomi</label> */}
        <input
          type="text"
          name="Nomi"
          value={nomi}
          placeholder="Maxsulot nomi"
          onChange={(e) => setNomi(e.target.value)}
          required
        />
        <label htmlFor="Rasmi">Maxsulot rasmi</label>
        <input
          type="file"
          name="Rasmi"
          onChange={(e) => {
            setRasmi(e.target.files[0]);
            uploader(e);
          }}
          required
        />
        <img src={result} alt="Maxsulot rasmi tanlanmagan" />
        {/* <label htmlFor="Holati">Maxsulot soni</label> */}
        <input
          type="number"
          name="Holati"
          value={holati}
          step="1"
          min="0"
          placeholder="Maxsulot soni"
          onChange={(e) => setHolati(e.target.value)}
          required
        />
        {/* <label htmlFor="Narxi">Maxsulot narxi</label> */}
        <input
          type="number"
          name="Narxi"
          value={narxi}
          placeholder="Maxsulot narxi"
          onChange={(e) => setNarxi(e.target.value)}
          required
        />
        {/* <label htmlFor="Turi">Maxsulot turi</label> */}
        <select
          name="Turi"
          value={turi}
          onChange={(e) => setTuri(e.target.value)}
          className="bg-dark"
          required
        >
          <option disabled selected>
            Maxsulot turini kiriting
          </option>
          <option value="suyuq">Suyuq taom</option>
          <option value="quyuq">Quyuq taom</option>
          <option value="salat">Salat</option>
          <option value="shirinlik">Shirinlik</option>
          <option value="ichimlik">Ichimlik</option>
          <option value="fastfood">FastFood</option>
        </select>
        <button onClick={submitData}>
          {state ? "Maxsulotni yangilash" : "Maxsulotni qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default MaxsulotEditAndPost;
