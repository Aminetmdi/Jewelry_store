import React from "react";
import Gif from "../assets/gif/spinner.gif";
import "../assets/css/Loader.css";
const Loading = () => {
  return (
    <div className="loadContainer">
      <img src={Gif} alt="spinner" />
      <h1>LOADING..</h1>
    </div>
  );
};

export default Loading;
