import React from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css';
import "./components/detail.css"
import "./components/checkout.css"

import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import Detail from "./components/Detail"
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {
  if (window.location.pathname==="/"){
    window.location.href="/home"
  }
  return (
   <Routes>

    <Route path="/home" element={<Homepage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/catalog" element={<Catalog></Catalog>} />
    <Route path="/detail" element={<Detail></Detail>} />
    <Route path="/checkout" element={<Checkout></Checkout>} />
    <Route path="/cart" element={<Cart></Cart>} />


   </Routes>

  );
}

export default App;
