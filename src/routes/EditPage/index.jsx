import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TaskForm } from "../../components/TaskForm";
import { useTasks } from "../../hooks/useTasks";

function EditPage(){

  const location = useLocation();

  const { id } = useParams();
  console.log(id);

  const { states, setStates } = useTasks();
  const { editTask } = setStates;
  const { loading, getTask } = states;


  let taskText;

  if(location.state?.element){
    taskText = location.state.element.text;
  }else if(loading){
    return(
      <p>Loading...</p>
    )
  }else{
    const task = getTask(id);
    taskText = task.text;
  }

  return(
    <div className="NewTaskBackground">
      <TaskForm
        renderText="Edit your Task"
        submitText="Edit"
        defaultText={taskText}
        submitEvent={(newText) => editTask(newText, id)}
      />
    </div>
  )
}

export { EditPage };
