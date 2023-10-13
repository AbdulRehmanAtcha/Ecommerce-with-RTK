import React from "react";
import "../trending/trending.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { addToCart } from "../../features/mySlice";
import numeral from "numeral";
import { processorProducts } from "../../constants";

const Processor = () => {
  const dispatch = useDispatch();


  const AddToCartHandler = (obj) => {
    dispatch(addToCart(obj));

  };

  return (
    <div>
      <div className="section-title">
        <h1>Processors</h1>
      </div>
      <div className="container-fluid trending-main">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          controller={true}
          autoplay={{
            delay: 3400,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {processorProducts.map((eachcard, index) => (
            <div className="slide" key={eachcard.id}>
              <SwiperSlide>
                <h1>{eachcard.name}</h1>
                <img src={eachcard.imgLink} alt="" />
                <h2>Rs: {numeral(eachcard.price).format("0,0.00")}</h2>
                <button onClick={() => AddToCartHandler(eachcard)}>
                  Add to Cart
                </button>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Processor;
