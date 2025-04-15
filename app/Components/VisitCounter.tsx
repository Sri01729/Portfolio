"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // First get the current count
        const response = await fetch('/api/visits');
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setCount(data.count);

        // Then increment it
        await fetch('/api/visits', { method: 'POST' });
      } catch (err) {
        setError('Failed to fetch visit count');
        console.error('Error fetching visit count:', err);
      }
    };

    fetchCount();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xs text-[#969696]"
    >
      {error ? (
        <span>Error loading visit count</span>
      ) : count === null ? (
        <span>Loading...</span>
      ) : (
        <span>Visits: {count.toLocaleString()}</span>
      )}
    </motion.div>
  );
}