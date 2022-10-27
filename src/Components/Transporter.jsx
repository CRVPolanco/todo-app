import React from "react";
import ReactDOM from "react-dom";

function Transporter({children}){

  const modal = document.getElementById('modal');

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    modal,
  )
}
export { Transporter };
