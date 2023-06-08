import React from "react"
import '../../styles/Title.css';

function Title({allTasks, finalizedTasks, loading}){

  return(
    <section className="SectionTitleContainer">
      <h1>Task to do!</h1>
      <h2 className={`TasksTitle ${!!loading && 'TasksTitle--loading'}`}>¡You have completed {finalizedTasks} task of {allTasks}!</h2>
    </section>
  )
}

export { Title }
