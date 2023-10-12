import React from "react";
import Home from "./home/Home";
import Trending from "../components/trending/Trending";
import Motherboard from "./motherboard/Motherboard";
import Processor from "./processor/Processor";
import Rams from "./rams/Rams";
import SSD from "./ssd/SSD";
import OurBrands from "./our-brands/OurBrands";
import Reviews from "./reviews/Reviews";
import SocialMedia from "./social/SocialMedia";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import "./packet.css";

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
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <SocialMedia />
      <div style={{ height: "3px", backgroundColor: "#a6a4a1" }}></div>
      <footer>
        <h2>
          Develop By <span style={{ color: "red" }}>Abdul Rehman</span>
        </h2>
        <div>
          <a href="https://www.facebook.com/arehman9091/">
            <BiLogoFacebook color="white" size={25} />
          </a>
          <a href="https://www.instagram.com/abdulrehmanzaid/">
            <BiLogoInstagram color="white" size={25} />
          </a>
          <a href="https://github.com/AbdulRehmanAtcha">
            <BiLogoGithub color="white" size={25} />
          </a>
          <a href="https://www.linkedin.com/in/abdul-rehman-1b8a69230/">
            <BiLogoLinkedin color="white" size={25} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Packet;
