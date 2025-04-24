import React from 'react';
import { FloatingDock } from "@/components/ui/floating-dock";

interface CategoryDockProps {
  title: string;
  items: Array<{
    title: string;
    icon: React.ReactNode;
    href: string;
  }>;
}

const CategoryDock: React.FC<CategoryDockProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-[#fefeff]">{title}</h3>
      <div className="flex items-center justify-start w-full">
        <FloatingDock
          items={items}
          desktopClassName="bg-black/40 border border-white/10 backdrop-blur-sm"
          mobileClassName="relative"
        />
      </div>
    </div>
  );
};

export default CategoryDock;