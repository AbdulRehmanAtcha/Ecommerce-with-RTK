import React from "react";
import Home from "./home/Home";
import Trending from "../components/trending/Trending";
import Motherboard from "./motherboard/Motherboard";
import Processor from "./processor/Processor";
import Rams from "./rams/Rams";
import SSD from "./ssd/SSD";
import OurBrands from "./our-brands/OurBrands";
import Reviews from "./reviews/Reviews";

const Packet = () => {
  return (
    <div>
      <Home />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <OurBrands />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <Trending />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <Motherboard />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <Processor />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <Rams />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <SSD />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <Reviews />
    </div>
  );
};

export default Packet;
