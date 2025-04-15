"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VisitCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndIncrementCount = async () => {
      try {
        // First, get the current count
        const response = await fetch('/api/visits');
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          setIsLoading(false);
          return;
        }

        setCount(data.count);

        // Then, increment the count
        const incrementResponse = await fetch('/api/visits', {
          method: 'POST',
        });

        const incrementData = await incrementResponse.json();

        if (incrementData.error) {
          setError(incrementData.error);
        } else {
          setCount(incrementData.count);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching visit count:', err);
        setError('Failed to load visit count');
        setIsLoading(false);
      }
    };

    fetchAndIncrementCount();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-sm text-[#969696] flex items-center gap-2"
    >
      <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
      <span>
        {isLoading
          ? 'Loading visits...'
          : error
            ? 'Visit counter unavailable'
            : `Global Visits: ${count.toLocaleString()}`}
      </span>
    </motion.div>
  );
};

export default VisitCounter;