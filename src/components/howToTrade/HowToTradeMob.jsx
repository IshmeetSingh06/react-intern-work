import React from "react";
import "./HowToTradeMob.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../assets/matchimg.png";
import img2 from "../../assets/mob-img-2.png";
import img3 from "../../assets/mob-img-3.png";


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
              <img className="image-1" src={img1} alt="" />
              <div className="slide-1-text">
                Select an event based on your expertise
                <br />
                <span>
                  Predict the outcome & TakTik to maximize your earnings
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-1">
              <img className="image-1" src={img2} alt="" />
              <div className="slide-1-text">
                Purchase the shares of predicted outcome
                <br />
                <span>
                  Click the option and set the Quantity,Price and Swipe right to Buy
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-1">
              <img className="image-1" src={img3} alt="" />
              <div className="slide-1-text">
                Awaits results, Earn & Withdraw profits
                <br />
                <span>
                  If your option is correct after the settlement period, your
                  earning will be added to your wallet
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
