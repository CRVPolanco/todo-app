import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditPage } from "./routes/EditPage";
import { HomePage } from "./routes/Homepage";
import { NewTodo } from "./routes/NewTodo";
import { NotFound } from "./routes/NotFound";

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
