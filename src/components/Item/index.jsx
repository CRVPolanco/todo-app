import React from "react";

function Item({text, completed, toggleCompletedTask, deleteTask, editTask}){

  return(
    <li className="Item">
      <span className={`${completed && 'CompletedTask'} ${!completed && 'UncompletedTask'}`}></span>
      <p className={`${completed && 'LineThrough'} ${!completed && 'NotLineThrough' }`}>{text}</p>
      <div className="ButtonsCompletedOrDelete">

        <button className={`${completed && 'UncompletedButton'} ${!completed && 'CompletedButton'}`} onClick={toggleCompletedTask} title="Complete/Uncomplete"></button>

        <button className="EditButton" onClick={editTask}></button>

        <button className="RemoveButton" onClick={deleteTask} title="Delete task"></button>

      </div>
    </li>
  )

}

export { Item };
