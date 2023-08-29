import React from "react";
import { Rings } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Rings color="#00BFFF" height={80} width={200} className="m-5" />

      <p className="text-lg text-center px-2"> {message} </p>
    </div>
  );
};

export default Spinner;
