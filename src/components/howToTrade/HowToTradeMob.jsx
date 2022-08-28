import React from "react";
import "./HowToTradeMob.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../assets/mob-img-1.png";
import img2 from "../../assets/mob-img-2.png";
import img3 from "../../assets/mob-img-3.png";
import thumbsimg from "../../assets/thumbs.png"
import slide3 from "../../assets/slide-3.png"
import upi from "../../assets/upilogo.svg"

const HowToTradeMob = () => {
  return (
    <div className="crousel-container">
      <div className="title-text">How To Trade</div>
      <div className="background-crousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-1">
              <img className="image-1" src={img1} />
              <div className="slide-1-text">
                Select an event based on your expertise
                <br />
                <br />
                <span>
                  Predict the outcome & TakTik to maximize your earnings
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-1">
              <img className="image-1" src={img2} />
              <div className="slide-1-text">
                Select an event based on your expertise
                <br />
                <br />
                <span>
                  Predict the outcome & TakTik to maximize your earnings
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-1">
              <img className="image-1" src={img3} />
              <div className="slide-1-text">
                Select an event based on your expertise
                <br />
                <br />
                <span>
                  Predict the outcome & TakTik to maximize your earnings
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HowToTradeMob;