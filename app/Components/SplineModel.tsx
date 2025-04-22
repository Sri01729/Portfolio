'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SplineModel = ({ liteMode = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const splineInstance = useRef<any>(null);

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
    // Check if we're on mobile or tablet (for optimization settings only)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add scroll event listener to handle positioning issues when scrolling
  useEffect(() => {
    if (!isVisible || liteMode) return;

    const handleScroll = () => {
      if (splineInstance.current && canvasRef.current) {
        // Reset camera position or apply custom transformations when user scrolls back to this section
        try {
          if (document.documentElement.scrollTop < 500) {
            // Only apply fixes when user is close to the top section
            canvasRef.current.style.transform = isMobile
              ? 'translateX(0) scale(0.9) translateY(10%) !important'
              : 'translateX(15%) scale(1.2) !important';
          }
        } catch (error) {
          console.error("Error adjusting model position on scroll:", error);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, liteMode, isMobile, isLoaded]);

  useEffect(() => {
    // Only load Spline when visible and not in lite mode
    if (!isVisible || liteMode) return;

    // We'll load the Spline runtime dynamically in the browser
    const loadSpline = async () => {
      try {
        const runtime = await import('@splinetool/runtime');

        if (canvasRef.current) {
          // Load the scene
          const spline = new runtime.Application(canvasRef.current);
          splineInstance.current = spline;

          // Try to adjust quality for better performance
          try {
            // Set quality based on device type
            const qualitySettings = isMobile
              ? { quality: 'low', environmentIntensity: 0.3 }
              : { quality: 'medium', environmentIntensity: 0.5 };

            // Load with appropriate quality configuration
            await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode', qualitySettings);

            // Set initial camera and position
            setTimeout(() => {
              if (canvasRef.current) {
                canvasRef.current.style.transform = isMobile
                  ? 'translateX(0) scale(0.9) translateY(10%) !important'
                  : 'translateX(15%) scale(1.2) !important';
              }
              setIsLoaded(true);
            }, 100);

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
  }, [isVisible, liteMode, isMobile]);

  // Handle responsive resizing for canvas
  useEffect(() => {
    if (!isVisible || liteMode) return;

    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        // Ensure canvas dimensions match container
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;

        // Apply the proper transform based on screen size
        canvasRef.current.style.transform = isMobile
          ? 'translateX(0) scale(0.9) translateY(10%) !important'
          : 'translateX(15%) scale(1.2) !important';
      }
    };

    // Initial resize
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isVisible, liteMode, isMobile]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[350px] xl:h-[80vh] relative overflow-hidden mt-0 xl:mt-16 hardware-accelerated"
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

        /* Base canvas styling without transform (will be applied via JS) */
        #spline-canvas {
          width: 100% !important;
          height: 100% !important;
          touch-action: pan-y;
          outline: none;
          transform-origin: center center;
        }
      `}</style>

      {!isVisible ? (
        // Loading placeholder
        <div className="w-full h-full flex items-center justify-center bg-black/5">
          <div className="text-white/50">Loading...</div>
        </div>
      ) : liteMode ? (
        // Static image for lite mode only
        <div className="w-full h-full relative hardware-accelerated flex items-center justify-center xl:justify-end">
          <div className="relative w-[130%] h-[130%] mx-auto xl:-right-[15%] -top-[40px] xl:-top-[70px]">
            <Image
              src="/spline-robot.png"
              alt="AI Robot"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                transform: 'scale(0.7)'
              }}
              className="xl:[object-position:70%_center]"
              priority
              loading="eager"
            />
          </div>
        </div>
      ) : (
        // 3D model for all devices when not in lite mode
        <>
          <canvas ref={canvasRef} id="spline-canvas" className="w-full h-full hardware-accelerated"></canvas>
          {!isLoaded && isVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="text-white">Loading 3D model...</div>
            </div>
          )}
          {/* Black div to cover watermark */}
          <div className="absolute left-3/4 bottom-14 bg-black h-10 w-1/4 z-10" />
        </>
      )}
    </div>
  );
};

export default SplineModel;