import React from "react";
import { TaskForm } from "./TaskForm";
import { useTasks } from "./useTasks";

function NewTodo(){

  const { setStates } = useTasks();
  const { createTask } = setStates;

  return(
    <div className="NewTaskBackground">
      <TaskForm
        // defaultText="Write your new task!"
        renderText="Create new task!"
        submitText="Create now!"
        submitEvent={(newTask) => createTask(newTask)}
      />
    </div>
  )
}

export { NewTodo };
