import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTasks(searchId){

  const {data, saveItem, loading, error, sincronize, reSincronize} = useLocalStorage('TASKS_V1', []);

  const [searchState, setSearchState] = React.useState(searchId ?? '');
  const [specialSearch, setSpecialSearch] = React.useState('');

  const finalizedTasks = data.filter(element => !!element.completed).length;
  const allTasks = data.length;

  const uncompletedTasks = data.filter(element => !element.completed);
  const completedTasks = data.filter(element => !!element.completed);

  let filtedTasks = [];

  if(!searchState.length >= 1){
    filtedTasks = data;
  }else{
    filtedTasks = data.filter(element => {
      const elementLow = element.text.toLowerCase();
      const searchLower = searchState.toLowerCase();
      return elementLow.includes(searchLower);
    });
  }

  const setNewId = () => {
    const generateId = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let newId = "";
    for(let i=0; i<16; i++){
      newId += `${generateId.charAt(Math.round(Math.random() * generateId.length))}`;
    }
    return newId;
  }

  const toggleCompleteTask = (id) => {
    const newList = [...data];
    const index = newList.findIndex(element => element.id === id);
    newList[index].completed === true ? newList[index].completed = false : newList[index].completed = true;
    saveItem(newList);
  }
  const deleteTask = (id) =>{
    const newList = [...data];
    const index = newList.findIndex(element => element.id === id);
    newList.splice(index, 1);
    saveItem(newList);
  }
  const createTask = (text) => {
    const newList = [...data];
    newList.push({text: text, completed: false, id: setNewId()});
    saveItem(newList);
  }
  const editTask = (newText, id) => {
    const newList = [...data];
    const index = newList.findIndex(element => element.id === id);
    newList[index].completed === true ? newList[index].completed = false : newList[index].completed = true;
    newList[index].text = newText;
    saveItem(newList);
  }
  const getTask = (id) => {
    const taskIndex = data.findIndex(task => task.id === id);
    return data[taskIndex];
  }


  const states = {
    data,
    searchState,
    loading,
    error,
    sincronize,
    allTasks,
    finalizedTasks,
    completedTasks,
    uncompletedTasks,
    filtedTasks,
    specialSearch,
    getTask,
  }

  const setStates = {
    saveItem,
    createTask,
    editTask,
    setSearchState,
    toggleCompleteTask,
    deleteTask,
    reSincronize,
    setSpecialSearch,
  }

  return ({
    states, setStates
  })

}

export { useTasks };
