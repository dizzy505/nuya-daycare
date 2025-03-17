import React from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-theme-navbar text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nuya Kids Care</h3>
            <p className="text-white">
              Keep Children's Happiness
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/6285104505052" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-200 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+62 851-0450-5052</span>
              </a>
              <a 
                href="https://www.instagram.com/nuyakidscare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-200 transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span>@nuyakidscare</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/QPFA6egBd5iakCi78" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-200 transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2" />
                <span>Gg.Remaja 1, RT.03/RW.12 No.B7</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <div className="space-y-2">
              <p>Senin - Jumat: 07:00 - 17:00</p>
              <p>Sabtu - Minggu: Tutup</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-200 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Nuya Kids Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};