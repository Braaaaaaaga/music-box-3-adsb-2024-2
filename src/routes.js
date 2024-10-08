import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Musicas from "./pages/Musicas/Musicas";
import NotFound from "./pages/NotFound/NotFound";
import Adicionar from "./pages/Adicionar/Adicionar";

function Rotas() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/adicionar" element={<Adicionar />} />
        </Routes>
      </BrowserRouter>
  );
}
export default Rotas;
