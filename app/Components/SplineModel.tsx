'use client';

import { useState, useEffect, useRef } from 'react';

const SplineModel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // We'll load the Spline runtime dynamically in the browser
    const loadSpline = async () => {
      try {
        const runtime = await import('@splinetool/runtime');

        if (canvasRef.current) {
          // Load the scene
          const spline = new runtime.Application(canvasRef.current);
          await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode');
          setIsLoaded(true);

          // If mobile, adjust the camera or scale
          if (isMobile) {
            // Set a smaller scale or adjust camera distance for mobile
            setTimeout(() => {
              try {
                // Try to scale the scene or move the camera for better mobile view
                if (spline.setZoom) {
                  spline.setZoom(0.8); // Zoom out a bit
                }
              } catch (e) {
                console.log("Could not adjust camera for mobile:", e);
              }
            }, 500);
          }

          // Handle watermark hiding with a more robust approach
          const hideWatermark = () => {
            // Target watermark links directly
            const watermarks = document.querySelectorAll('a[href="https://spline.design"]');
            watermarks.forEach(watermark => {
              if (watermark.parentElement) {
                watermark.parentElement.style.display = 'none';
                watermark.parentElement.style.opacity = '0';
                watermark.parentElement.style.visibility = 'hidden';
              }
            });

            // Also target the watermark container
            const watermarkContainers = document.querySelectorAll('.spline-watermark');
            watermarkContainers.forEach(container => {
              (container as HTMLElement).style.display = 'none';
            });
          };

          // Initial hide
          hideWatermark();

          // Also set an interval to catch any dynamically added watermarks
          const intervalId = setInterval(hideWatermark, 500);

          // Cleanup interval on component unmount
          return () => clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Failed to load Spline scene:", error);
      }
    };

    loadSpline();
  }, [isMobile]);

  // Handle responsive resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[350px] md:h-[80vh] relative overflow-hidden mt-0 md:mt-16"
    >
      <style jsx global>{`
        /* Hide Spline watermark */
        a[href="https://spline.design"],
        a[href="https://spline.design"] + div,
        .spline-watermark,
        div[style*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          height: 0 !important;
          position: absolute !important;
          z-index: -9999 !important;
        }

        /* Ensure canvas is responsive */
        #spline-canvas {
          width: 100% !important;
          height: 100% !important;
          touch-action: pan-y;
          outline: none;
        }

        /* Mobile-specific styling */
        @media (max-width: 767px) {
          #spline-canvas {
            transform: scale(0.85) translateY(-8%);
            transform-origin: center center;
          }
        }
      `}</style>
      <canvas ref={canvasRef} id="spline-canvas" className="w-full h-full"></canvas>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-white">Loading 3D model...</div>
        </div>
      )}
      {/* Black div to cover watermark - shown on all screens */}
      <div className="absolute left-3/4 bottom-5 md:bottom-14 bg-black h-10 w-1/4 z-10" />
    </div>
  );
};

export default SplineModel;