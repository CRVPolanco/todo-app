import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/ModalContainer.css'

function TaskForm(props){

  const [value, setValue] = React.useState(props.defaultText ?? '');
  const navigate = useNavigate();

  const closeWindow = () => {
    navigate('/');
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(value);
    navigate('/');
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return(
    <div className="NewTaskContainer">
      <div className="TextAndTitle">
        <button type="button" className="CloseInteraction" onClick={closeWindow}>X</button>
        <p>{props.renderText}</p>
        <textarea placeholder="Something you need to do" value={value} onChange={onChange}></textarea>
      </div>
      <div className="AddContainer">
        <button className="CreateNewTaskButton" onClick={onSubmit}>{props.submitText}</button>
      </div>
    </div>
  )
}

export { TaskForm }
