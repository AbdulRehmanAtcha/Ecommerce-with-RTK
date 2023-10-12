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
          <div>
            <BiLogoFacebook size={30} />
          </div>
          <div>
            <AiFillYoutube size={30} />
          </div>
          <div>
            <AiFillInstagram size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
