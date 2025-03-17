import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  ageGroup: string;
  description: string;
  color?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon: Icon, 
  title, 
  ageGroup, 
  description,
  color = 'bg-pastel-yellow/50'
}) => {
  const { colorMode } = useThemeStore();
  const isPastel = colorMode === 'pastel';

  return (
    <div className={`rounded-lg shadow-lg p-6 ${
      isPastel ? color : 'bg-white'
    }`}>
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 mr-3 ${
          isPastel ? 'text-pastel-purple' : 'text-blue-600'
        }`} />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{ageGroup}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};