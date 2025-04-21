'use client';

import { useState, useEffect } from 'react';

const SplineModel = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // We'll load the Spline runtime dynamically in the browser
    const loadSpline = async () => {
      try {
        const runtime = await import('@splinetool/runtime');

        // Create a canvas element
        const canvas = document.getElementById('spline-canvas') as HTMLCanvasElement;

        if (canvas) {
          // Load the scene
          const spline = new runtime.Application(canvas);
          await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode');
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Failed to load Spline scene:", error);
      }
    };

    loadSpline();

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <canvas id="spline-canvas" className="w-full h-full"></canvas>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-white">Loading 3D model...</div>
        </div>
      )}
    </div>
  );
};

export default SplineModel;