import React from 'react';
import { Users, Clock, Sparkles } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Staf Ahli',
      description: 'Guru kami yang berkualifikasi dan berpengalaman memberikan perawatan terbaik untuk anak-anak Anda.',
      color: 'bg-theme-card-blue'
    },
    {
      icon: Clock,
      title: 'Jam Fleksibel',
      description: 'Kami buka dari pagi hingga sore, menyediakan tempat yang aman dan nyaman bagi anak untuk belajar dan berkembang.',
      color: 'bg-theme-card-blue'
    },
    {
      icon: Sparkles,
      title: 'Program Terstruktur',
      description: 'Program pembelajaran yang terstruktur dan terarah untuk mengoptimalkan tumbuh kembang anak.',
      color: 'bg-theme-card-blue'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary-900">Tentang Nuya Kids Care</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-primary-800 text-center max-w-3xl mx-auto">
          Didirikan pada tahun 2019, Nuya Kids Care telah memberikan layanan pengasuhan anak yang luar biasa. Kami berkomitmen menciptakan lingkungan yang mendukung di mana anak-anak dapat belajar, berkembang, dan tumbuh dengan baik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className={`rounded-lg shadow-lg p-6 text-center ${feature.color}`}>
            <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary-700" />
            <h3 className="text-xl font-semibold mb-2 text-primary-900">{feature.title}</h3>
            <p className="text-primary-800">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-theme-card-purple rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-primary-900">Misi Kami</h2>
        <p className="text-primary-800">
          Nuya Kids Care menyediakan layanan Daycare dan PAUD dengan berbagai kegiatan edukatif untuk anak dan orang tua, fokus pada pengembangan kecerdasan, motorik, dan sensorik di masa keemasan (Golden Age). Dengan lingkungan yang aman, nyaman, tenaga profesional, pola gizi seimbang, serta komunikasi intensif dengan orang tua, kami mendukung tumbuh kembang anak secara optimal.
        </p>
      </div>
    </div>
  );
};