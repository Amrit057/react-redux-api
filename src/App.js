import React from "react";
import Home from './home';
import Product from "./product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="product" element={<Product/>} />
    </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App;