import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

const Card = ({ children, className = '', animate = true }: CardProps) => {
  const baseClasses = 'bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm';

  if (!animate) {
    return (
      <div className={`${baseClasses} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;