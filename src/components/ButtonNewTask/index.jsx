import React from "react";
import '../../styles/NewTask_And_Modal.css'

function ButtonNewTask({ onClick }){

  return(
    <button className="ButtonNewTask" onClick={onClick}>+</button>
  )
}

export { ButtonNewTask };
