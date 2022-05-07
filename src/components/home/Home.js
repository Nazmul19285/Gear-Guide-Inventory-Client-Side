import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import slider_1 from '../../images/slider-1.jpg';
import slider_2 from '../../images/slider-2.jpg';
import slider_3 from '../../images/slider-3.jpg';
import useItems from '../../hooks/useItems';
import ShowItems from '../showItem/ShowItems';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [allItems] = useItems();
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate('/inventory');
    }
    return (
        <div>
            <div>
                <Swiper pagination={{ type: "fraction", }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                    <SwiperSlide><img className='w-full' src={slider_1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slider_2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slider_3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='mx-4 mt-4 lg:w-9/12 lg:mx-auto '>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
                    {
                        allItems.slice(0, 6).map(item => <ShowItems key={item._id} item={item}></ShowItems>)
                    }
                </div>
                <div className='my-4 flex justify-end'>
                    <button onClick={navigateToInventory} className='bg-orange-400 py-2 px-6 rounded text-white hover:text-black'>Go to Inventory</button>
                </div>
            </div>
            <div className='bg-red-900 p-20'>
                footer
            </div>
        </div>
    );
};

export default Home;