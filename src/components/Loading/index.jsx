import React from "react";
import '../../styles/Loading.css';

function Loading(){

  return(
    <div className="ContainerAnim">
      <div className="AnimContainer">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Shadow Shadow1"></div>
        <div className="Shadow Shadow2"></div>
        <div className="Shadow Shadow3"></div>
      </div>
    </div>
  )
}

export { Loading };
