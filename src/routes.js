import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}
