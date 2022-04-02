import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Stollar from "../../components/stollar";

import StollarData from "../../assests/json/stol_id.json";
import { SET_STOL } from "../../redux/actions";

import "./stol.css";

const Stol = () => {
  const dispatch = useDispatch();
  const stol = StollarData.stollar;
  useEffect(() => {
    dispatch(SET_STOL(0));
  }, [dispatch])
  
  return (
    <div className="stol">
      {stol.map((item, index) => (
        <Stollar item={item} key={index} />
      ))}
    </div>
  );
};

export default Stol;
