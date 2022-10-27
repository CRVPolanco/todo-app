import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App';
import './styles/main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <App greetings="Buenas tardes" name={"Saitama Sensei"}/>
)
