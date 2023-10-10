// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./components/home/Home";
// import Trending from "./components/trending/Trending";
import Navbar from "./components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/cardsfolder/Cart";
import Packet from "./components/Packet";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Cart /> */}
      {/* 
      <Home />
      <Trending /> */}
      <Routes>
        <Route path="/" element={<Packet />} />
        <Route path="/products" element={<Packet />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
