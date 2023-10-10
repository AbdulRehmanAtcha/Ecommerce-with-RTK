import React from "react";
import "./home.css";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="container-fluid home-main">
      <Typed
        strings={[
          "Level Up Your Gaming Experience",
          "Your Ultimate PC Playground!",
        ]}
        typeSpeed={100}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Home;
