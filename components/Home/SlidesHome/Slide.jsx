"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import axios from 'axios';
import { useEffect } from 'react';

export default function Slide() {



    useEffect(() => {

    }, [])

  return (
    <>
      <div className='overflow-hidden w-screen min-h-fit border-none bg-white dark:bg-dark-l'>
        <h1 className='w-[80%] text-center text-3xl sm:text-5xl font-bold text-slate-600 dark:text-white mb-10 border-b-4 pb-2 lg:w-fit mx-auto border-bor-red'>Tenemos a las mejores escorts del Perú</h1>
      <Swiper
      slidesPerView={1}
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-40 rounded-[10px] shadow-md shadow-slate-700 dark:shadow-black sm:w-full"
        breakpoints = {{
            600: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 6
            }
        }}
        loopedSlides={true}
      >
        <SwiperSlide ><img src="/assets/slide1.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide2.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide3.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide4.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide5.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide1.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide2.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide3.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide4.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
