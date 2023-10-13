import React from "react";
import "./social.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="social-main">
      <div className="section-title">
        <h1>Follow Us On Social Media</h1>
        <p>
          Follow GamingCrafetrs To Keep Up With Latest Builds and Technology
          Trends In The World
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="__blank">
            <BiLogoFacebook size={30} color="white" />
          </a>
          <a href="https://www.youtube.com/" target="__blank">
            <AiFillYoutube size={30} color="white" />
          </a>
          <a href="https://www.instagram.com/" target="__blank">
            <AiFillInstagram size={30} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
