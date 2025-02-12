import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  children?: React.ReactNode;
}

export default function Slider({ children }: SliderProps) {

  return (
    <Swiper
      navigation
      modules={[Navigation]}
      slidesPerView={2}
      spaceBetween={20} 
      centerInsufficientSlides={true} 
      breakpoints={{
        480: {
          slidesPerView: 1.2, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 2, 
        },
      }}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
