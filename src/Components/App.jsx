import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditPage } from "./EditPage";
import { HomePage } from "./HomePage";
import { NewTodo } from "./NewTask";
import { NotFound } from "./NotFound";

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new/" element={<NewTodo />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/search/s=:searchId" element={<HomePage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export { App };
