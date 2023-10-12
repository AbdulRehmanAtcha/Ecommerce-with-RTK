import React, { useEffect } from "react";
import "./review.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import Aos from "aos";

const Reviews = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="reviews-main">
      <div className="section-title">
        <h1>CUTOMER'S Reviews</h1>
      </div>
      <hr style={{ color: "white" }} />
      <br />
      <div className="review-cards">
        <div data-aos="fade-right">
          <BiSolidQuoteAltRight color="red" fontSize={"100px"} />
          <p>
            Fantastic computer store! They have an excellent range of products,
            knowledgeable staff, and competitive prices. I'm a happy customer.
          </p>
          <span>
            {[0, 1, 2, 3, 4].map((eachIter, index) => (
              <AiTwotoneStar color="red" key={index} />
            ))}
          </span>
          <h2>Muhammad Yahya</h2>
        </div>
        <div data-aos="fade-up">
          <BiSolidQuoteAltRight color="red" fontSize={"100px"} />
          <p>
            Impressive selection of computers and accessories. Knowledgeable
            staff provided great guidance. Found everything I needed here.
          </p>
          <span>
            {[0, 1, 2, 3, 4].map((eachIter, index) => (
              <AiTwotoneStar color="red" key={index} />
            ))}
          </span>
          <h2>Syed Umair</h2>
        </div>
        <div data-aos="fade-left">
          <BiSolidQuoteAltRight color="red" fontSize={"100px"} />
          <p>
            This computer store is a hidden gem. Not only did they help me pick
            the perfect PC, but their after-sales service is outstanding
          </p>
          <span>
            {[0, 1, 2, 3, 4].map((eachIter, index) => (
              <AiTwotoneStar color="red" key={index} />
            ))}
          </span>
          <h2>Shaheer Ahmed</h2>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
