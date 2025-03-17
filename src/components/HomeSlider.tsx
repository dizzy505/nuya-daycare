import React from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../utils/imageUtils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    image: sliderImages.slide1,
    title: 'Learning Through Play',
  },
  {
    id: 2,
    image: sliderImages.slide2,
    title: 'Safe and Nurturing Environment',
  },
  {
    id: 3,
    image: sliderImages.slide3,
    title: 'Professional Care',
  },
];

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};