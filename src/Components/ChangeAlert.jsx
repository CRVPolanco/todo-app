import React from "react";
import { useStorageListener } from "./useStorageListener";
import '../styles/ChangeAlert.css';

function ChangeAlert({ reSincronize }){

  const { show, toggleShow } = useStorageListener(reSincronize);

  if(show){
    return (
    <div className="ChangeAlert--Container">
      <div className="ChangeAlert--Subcontainer">
        <p>Hubo cambios, es necesario recargar la página, perdón por las molestias</p>
        <button onClick={() => toggleShow(false)}>¡ Recargar página :) !</button>
      </div>
    </div>
    )
  }else{
    return null;
  }
}

export { ChangeAlert };
