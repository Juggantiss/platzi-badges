import React from "react";
import "./styles/PageError.css";

function PageError(props) {
  const { message } = props.error;
  return <div className="PageError">❌{message}⌛️</div>;
}

export default PageError;
