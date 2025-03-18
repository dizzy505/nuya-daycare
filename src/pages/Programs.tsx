import React from 'react';
import { Heart, Book, Palette, Brain, ActivitySquare } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      icon: ActivitySquare,
      title: 'Pemantauan Tumbuh Kembang',
      description: 'Pemantauan tumbuh kembang anak dan pemeriksaan tumbuh kembang secara berkala.',
      color: 'bg-theme-card-pink'
    },
    {
      icon: Book,
      title: 'Pembelajaran Dini',
      description: 'Pembelajaran dasar melalui bermain, dengan fokus pada konsep dasar dan keterampilan sosial.',
      color: 'bg-theme-card-blue'
    },
    {
      icon: Heart,
      title: 'Pendidikan Agama',
      description: 'Mengajarkan nilai-nilai moral dan prinsip-prinsip agama melalui kegiatan yang sesuai dengan usia.',
      color: 'bg-theme-card-green'
    },
    {
      icon: Palette,
      title: 'Seni & Kerajinan',
      description: 'Mengeksplorasi kreativitas dan ekspresi diri melalui berbagai media seni.',
      color: 'bg-theme-card-yellow'
    },
    {
      icon: Brain,
      title: 'Persiapan Pendidikan Selanjutnya',
      description: 'Mempersiapkan anak-anak untuk tahapan pendidikan selanjutnya dengan pengembangan keterampilan yang sesuai.',
      color: 'bg-theme-card-purple'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary-900">Program Kami</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg text-primary-800 text-center max-w-3xl mx-auto">
          Kami menawarkan program yang sesuai dengan usia, dirancang untuk merangsang perkembangan anak Anda melalui pembelajaran berbasis permainan dan aktivitas terstruktur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div key={index} className={`rounded-lg shadow-lg p-6 ${program.color}`}>
            <div className="flex items-center mb-4">
              <program.icon className="w-8 h-8 text-primary-700 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-primary-900">{program.title}</h3>
              </div>
            </div>
            <p className="text-primary-800">{program.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-theme-card-orange rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-primary-900">Jadwal Kegiatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2 text-primary-800">
              <li>07:00 - 08:30 Kedatangan & sarapan</li>
              <li>08:30 - 09:00 Bermain bebas</li>
              <li>09:00 - 09:30 Senam</li>
              <li>09:30 - 09:45 Snack pagi</li>
              <li>09:45 - 10:00 Persiapan belajar</li>
              <li>15:30 - 16:00 Snack sore</li>
              <li>16:00 - 16:30 Mandi sore</li>
              <li>16:30 - 17:00 Bermain bebas dan menunggu penjemputan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
