import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  ageGroup: string;
  description: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon: Icon, 
  title, 
  ageGroup, 
  description 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{ageGroup}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};