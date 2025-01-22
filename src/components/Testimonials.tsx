import React from 'react';
import { Star } from 'lucide-react';
import { testimonialImages } from '../utils/imageUtils';

const testimonials = [
  {
    id: 1,
    content: 'Para pengajar sangat perhatian, dan materi pembelajaran telah disusun sesuai dengan standar yang berlaku. Fasilitasnya nyaman dan aman untuk anak-anak.',
    rating: 5
  },
  {
    id: 2,
    content: 'Miss-nya sangat komunikatif dan selalu proaktif memberikan informasi terkini kepada orang tua tentang aktivitas dan perkembangan anak setiap harinya. Membuat orang tua merasa lebih tenang dan terlibat dalam keseharian anak.',
    rating: 5
  },
  {
    id: 3,
    content: 'Program pembelajarannya dirancang dengan menarik, sehingga anak-anak menjadi lebih aktif dalam belajar sambil bermain. Hal ini menciptakan pengalaman yang menyenangkan sekaligus mendidik.',
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold mb-6">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={testimonialImages[`parent${testimonial.id}`]}
              alt="Parent testimonial"
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
            />
            <div className="flex justify-center mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 text-center">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};