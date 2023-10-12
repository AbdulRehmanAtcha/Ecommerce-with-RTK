import Navbar from "./components/navbar/Navbar";

import Signin from "./components/forms/Signin";

import SignUp from "./components/forms/SignUp";

import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./components/cardsfolder/Cart";
import Packet from "./components/Packet";
import Modal2 from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { isLogin } = useSelector((data) => data.name);
  return (
    <div className="App">
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/modal" ? null : (
        <Navbar />
      )}
      {isLogin === false ? (
        <Routes>
          <Route path="/" element={<Packet />} />
          <Route path="/home" element={<Packet />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/modal" element={<Modal2 />} />
          <Route path="*" element={<Packet />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Packet />} />
          <Route path="/home" element={<Packet />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/modal" element={<Modal2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Packet />} />
        </Routes>
      )}
      {/* <Packet />
      <OurBrands />
      <Reviews /> */}
    </div>
  );
}

export default App;
