import React  from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";

import client1 from "../../../Assets/img/client1.svg";
import client2 from "../../../Assets/img/client2.svg";
import client3 from "../../../Assets/img/client3.svg";

export default function Slider() {
  return (
    <>
      <div className="poplesaydiv">
        <h1>What people are saying</h1>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client1} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>Athziri</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client2} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>Felex</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client3} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>John</p>
            </div>
          </div>
        </SwiperSlide>


                <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client1} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>Athziri</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client2} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>Felex</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="clientreviewdiv">
            <div>
              <img src={client3} alt="" />
            </div>

            <div>
              <h3>
                ar deal. Anyone looking to get a car should just use it.
                #lifesaver”
              </h3>
              <p>John</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
