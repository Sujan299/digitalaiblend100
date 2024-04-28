'use client'
import React, { useRef,useEffect, useState } from 'react';
import Img from '../../../public/quote.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className={`my-8`}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper`}
      >
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
        <SwiperSlide><Image src={Img} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
