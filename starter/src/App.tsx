import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SearchResult from "./pages/search-result";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResult />} />
    </Routes>
  );
};

export default App;
