import React from 'react';
import Slider from 'react-slick';
import { eventImages } from '../utils/imageUtils';

const events = [
  {
    id: 1,
    image: eventImages.mothersDay,
    title: 'Hari Ibu'
  },
  {
    id: 2,
    image: eventImages.teachersDay,
    title: 'Hari Guru'
  },
  {
    id: 3,
    image: eventImages.outingClass,
    title: 'Outing Class'
  }
];

export const LatestEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};