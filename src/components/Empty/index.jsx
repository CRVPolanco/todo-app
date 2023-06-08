import React from "react";
import '../../styles/Empty.css'

function Empty (){
  return (
    <section className="EmptyContainer">
      <p>There's not tasks to show 😥, </p>
      <p>¡Create your first Task!</p>
    </section>
  );
}

export { Empty };

