import React from 'react';
import { facilityImages } from '../utils/imageUtils';

const facilities = [
  {
    title: 'Indoor Play Area',
    image: facilityImages.indoorPlay,
    description: 'Area bermain indoor yang aman dan luas dengan mainan serta peralatan yang sesuai usia.',
  },
  {
    title: 'Outdoor Playground',
    image: facilityImages.outdoorPlay,
    description: 'Taman bermain outdoor yang terawat dengan baik dan dilengkapi dengan rangka pendakian.',
  },
  {
    title: 'Taman',
    image: facilityImages.learningCenter,
    description: 'Ruang terbuka hijau yang asri untuk aktivitas outdoor dan pembelajaran tentang alam.',
  },
  {
    title: 'Rest Area',
    image: facilityImages.restArea,
    description: 'Ruang yang tenang dan nyaman untuk waktu tidur siang dan relaksasi.',
  },
];

export const Facilities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Fasilitas Kami</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Tempat kami memiliki fasilitas modern yang dirancang untuk menciptakan lingkungan yang aman, nyaman, dan mendukung perkembangan anak-anak.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-80">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-gray-600 text-lg">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
