import React from "react";
import "./trending.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Trending = () => {
  return (
    <div>
      <div className="section-title">
        <h1>Trending Products</h1>
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
          modules={[Pagination]}
          controller={false}
          className="mySwiper"
        >
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Dazzler-1-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Aviator-Bora-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Cruch-Front-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2023/03/ZESTRO-Extreme-PC-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Punk-Front-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            {" "}
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Lian-Li-O11-Dynamic-1-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
          <div className="slide">
            <SwiperSlide>
              <h1>Slide 1</h1>
              <img
                src="https://zestrogaming.com/wp-content/uploads/2022/11/Thunder-Lancer-Case-11-618x618.png"
                alt=""
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
