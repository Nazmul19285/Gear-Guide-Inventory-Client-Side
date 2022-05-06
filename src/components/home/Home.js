import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import slider_1 from '../../images/slider-1.jpg';
import slider_2 from '../../images/slider-2.jpg';
import slider_3 from '../../images/slider-3.jpg';


const Home = () => {
    return (
        <div>
            <div>
            <Swiper
                pagination={{
                type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full' src={slider_1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider_2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider_3} alt="" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Home;