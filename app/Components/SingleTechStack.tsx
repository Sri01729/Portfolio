import React from 'react';
import { IconType } from 'react-icons';

interface TechItem {
  name: string;
  icon: IconType;
  color?: string;
}

interface SingleTechStackProps {
  title: string;
  items: TechItem[];
}

const SingleTechStack: React.FC<SingleTechStackProps> = ({ title, items }) => {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {React.createElement(tech.icon, {
                size: 32,
                color: tech.color || '#fff',
                className: 'transition-transform group-hover:scale-110'
              })}
            </div>
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleTechStack;
