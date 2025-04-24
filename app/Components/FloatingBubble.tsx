import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingBubbleProps {
  children: ReactNode;
  delay?: number;
}

const FloatingBubble = ({ children, delay = 0 }: FloatingBubbleProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default FloatingBubble;