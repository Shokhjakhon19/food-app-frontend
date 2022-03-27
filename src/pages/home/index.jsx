import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/category")
      .then((resp) => {
        setCategory(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchCategory = (item) => {
    navigate("/maxsulotlar", {
      state: {
        turi: item,
      },
    });
  };
  return (
    <div className="home">
      {category.map((item, idx) => (
        <div
          className="categories d-flex justify-content-center align-items-center"
          key={idx}
          onClick={() => fetchCategory(item)}
        >
          <h1>{item.toUpperCase()}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
