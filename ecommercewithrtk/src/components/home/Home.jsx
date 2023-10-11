import React from "react";
import "./home.css";
import Typed from "react-typed";
import pcPic from "../../images/home-pc-img.png";

const Home = () => {
  return (
    <div className="conatiner-fluid home-main">
      <div className="home-content" style={{ color: "white" }}>
        <div className="home-content-left">
          <h1>
            <Typed
              strings={["Play, Shop, Conquer"]}
              typeSpeed={90}
              backSpeed={40}
              loop={false}
              showCursor={false}
            />
          </h1>
          <h1>
            <Typed
              strings={["Your Victory Awaits!"]}
              typeSpeed={90}
              backSpeed={40}
              loop={false}
              startDelay={2500}
              showCursor={false}
            />
          </h1>
        </div>
        <div className="home-content-right">
          <img src={pcPic} alt="PC" />
        </div>
      </div>
    </div>
  );
};

export default Home;
