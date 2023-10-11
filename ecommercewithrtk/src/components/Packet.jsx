import React from "react";
import Home from "./home/Home";
import Trending from "../components/trending/Trending";
import Motherboard from "./motherboard/Motherboard";
import Processor from "./processor/Processor";

const Packet = () => {
  return (
    <div>
      <Home />
      <Trending />
      <Motherboard />
      <Processor />
    </div>
  );
};

export default Packet;
