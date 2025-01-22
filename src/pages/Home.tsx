import React from 'react';
import { HomeSlider } from '../components/HomeSlider';
import { LatestEvents } from '../components/LatestEvents';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HomeSlider />
      
      <div className="container mx-auto py-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Selamat Datang Di Nuya Kid's Care
            </h2>
            <div className="prose max-w-none">
              <p className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Kami menyediakan lingkungan yang aman, penuh perhatian, dan edukatif bagi anak-anak untuk belajar, tumbuh, dan berkembang. Tim profesional kami yang berdedikasi berkomitmen untuk mendukung perkembangan individu setiap anak sekaligus menumbuhkan kecintaan terhadap belajar.
              </p>
            </div>
          </div>

          <LatestEvents />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};