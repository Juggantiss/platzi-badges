import React from "react";

import "./styles/NotFound.css";
import Logo404 from "../images/404.svg";

function NotFound() {
  return (
    <div className="Page-container">
      <img src={Logo404} alt="Imagen de error 404" />
      <h1>No es lo que buscabas...</h1>
    </div>
  );
}

export default NotFound;
