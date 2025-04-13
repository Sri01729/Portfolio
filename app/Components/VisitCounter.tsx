"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

export default function VisitCounter() {
  const [visits, setVisits] = useState({ total: 0, unique: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch('/api/visits');
        const data = await response.json();
        setVisits(data);
      } catch (error) {
        console.error('Error fetching visit count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisits();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 text-sm text-[#969696]"
    >
      <FaEye className="text-[#fefeff]" />
      <span>
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-[#969696] border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <span className="text-[#fefeff]">{visits.total.toLocaleString()}</span>
        )}
        {" "}visits
      </span>
    </motion.div>
  );
}