import React, { useEffect } from "react";
import "./brands.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OurBrands = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
    });
  }, []);
  return (
    <div className="brands-main">
      <div className="section-title">
        <h2>WE WORK WITH ONLY THE BEST BRANDS</h2>
      </div>
      <div className="brands-back">
        <div className="container brands-back-image"></div>
      </div>
      <div className="our-features">
        <div className="features-card" data-aos="fade-right">
          <h2>Free Shipping</h2>
          <p>
            Free shipping to all areas of Karachi and Hyderabad. Currently, we
            are not providing free shipping in the rest of Pakistan.
          </p>
        </div>
        <div className="features-card" data-aos="fade-up">
          <h2>24/7 Customer Support</h2>
          <p>
            We provide 24/7 customer support. Our team is available 24/7 to
            answer your queries and solve problems you are facing.
          </p>
        </div>
        <div className="features-card" data-aos="fade-left">
          <h2>Secure Payment</h2>
          <p>
            With the secure payment method, you can safely perform transactions
            and don’t sell or share customer credentials with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
