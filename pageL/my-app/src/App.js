import "./components/detail.css"
import "./components/checkout.css"

import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Checkout from "./components/Checkout"
import Detail from "./components/Detail"
import {BrowserRouter as Router , Route , Routes } from "react-router-dom"

function App() {
  return ( 
    <>
    <Header></Header>
    <Router>
       <Routes>
        <Route path="/" element={<Catalog></Catalog>} />
        <Route path="/detail" element={<Detail></Detail>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
       </Routes>
    </Router>
    <Footer></Footer>
    </>
   );
}

export default App;