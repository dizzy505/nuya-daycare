import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  color = 'bg-pastel-pink/50'
}) => {
  const { colorMode } = useThemeStore();
  const isPastel = colorMode === 'pastel';

  return (
    <div className={`rounded-lg shadow-lg p-6 text-center ${
      isPastel ? color : 'bg-white'
    }`}>
      <Icon className={`w-12 h-12 mx-auto mb-4 ${
        isPastel ? 'text-pastel-purple' : 'text-blue-600'
      }`} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};