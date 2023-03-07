import Quizz from "./components/Quizz/Quizz";
import Guess from "./components/guess/Guess";
import React, { useState } from "react";
import Back from "./components/back/Back";
import Home from "./components/home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={[<Quizz />]} />
        <Route path="/guess" element={[<Guess />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
