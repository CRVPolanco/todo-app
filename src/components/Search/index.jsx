import React from "react";
import '../../styles/Search.css';
import { useNavigate } from 'react-router-dom';

function Search({searchState, setSearchState, loading}){

  const navigate = useNavigate();
  let text = "";

  const searchEvent = (event) => {
    text += event.target.value;
    setSearchState(event.target.value);
    navigate(`/search/s= ${text}`);
  }

  return(
    <div className="SearchAndFilterContainer">
      <div className="SearchContainer">
        <label>Search your tasks</label>
        <input
        type="text"
        onChange={searchEvent}
        placeholder="Tasks"
        value={searchState ?? ''}
        disabled={loading}/>
      </div>
    </div>
  )
}

export { Search }
