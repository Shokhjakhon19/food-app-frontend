import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SET_STOL } from "../../redux/actions";

import "./stollar.css";

const Stollar = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    dispatch(SET_STOL(id));
    navigate("/home", {
      state: {
        stol_id: id,
      },
    });
  };
  return (
    <div
      className="stollar d-flex justify-content-center align-items-center"
      onClick={() => handleClick(item.stol_id)}
    >
      <h1>{item.stol_nomi}</h1>
    </div>
  );
};

export default Stollar;
