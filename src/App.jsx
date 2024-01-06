import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Workshops from "./routes/workshops";
import Home from "./routes/home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
