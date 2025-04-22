'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SplineModel = ({ liteMode = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if component is in viewport using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect once visible to prevent re-triggering
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    // Only load Spline on desktop, when visible, and not in lite mode
    if (isMobile || !isVisible || liteMode) return;

    // We'll load the Spline runtime dynamically in the browser
    const loadSpline = async () => {
      try {
        const runtime = await import('@splinetool/runtime');

        if (canvasRef.current) {
          // Load the scene
          const spline = new runtime.Application(canvasRef.current);

          // Try to adjust quality for better performance
          try {
            // Access spline configuration if available
            if (spline.load) {
              // Load with lower quality configuration if possible
              await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode', {
                quality: 'low',
                environmentIntensity: 0.5,
              });
              setIsLoaded(true);
            } else {
              await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode');
              setIsLoaded(true);
            }
          } catch (e) {
            // Fallback to normal loading
            await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode');
            setIsLoaded(true);
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
  }, [isMobile, isVisible, liteMode]);

  // Handle responsive resizing for canvas
  useEffect(() => {
    if (isMobile || !isVisible || liteMode) return; // Skip for mobile or lite mode

    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, isVisible, liteMode]);

  const shouldShowStaticImage = isMobile || liteMode;

  return (
    <div
      ref={containerRef}
      className="w-full h-[350px] md:h-[80vh] relative overflow-hidden mt-0 md:mt-16 hardware-accelerated"
    >
      {/* Global styles - consolidated into one style tag */}
      <style jsx global>{`
        /* Hardware acceleration */
        .hardware-accelerated {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

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
          transform: translateX(15%) scale(1.2) !important; /* Shift and scale the 3D model */
        }
      `}</style>

      {!isVisible ? (
        // Loading placeholder
        <div className="w-full h-full flex items-center justify-center bg-black/5">
          <div className="text-white/50">Loading...</div>
        </div>
      ) : shouldShowStaticImage ? (
        // Static image for mobile or lite mode
        <div className="w-full h-full relative hardware-accelerated flex items-center justify-center md:justify-end">
          <div className="relative w-[130%] h-[130%] mx-auto md:-right-[10%] -top-[40px] md:-top-[80px]">
            <Image
              src="/spline-robot.png"
              alt="AI Robot"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                transform: 'scale(1.8)'
              }}
              className="md:[object-position:80%_center]"
              priority
              loading="eager"
            />
          </div>
        </div>
      ) : (
        // 3D model for desktop
        <>
          <canvas ref={canvasRef} id="spline-canvas" className="w-full h-full hardware-accelerated"></canvas>
          {!isLoaded && isVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-white">Loading 3D model...</div>
            </div>
          )}
          {/* Black div to cover watermark - shown on desktop */}
          <div className="absolute left-3/4 bottom-14 bg-black h-10 w-1/4 z-10" />
        </>
      )}
    </div>
  );
};

export default SplineModel;