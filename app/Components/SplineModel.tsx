'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SplineModel = ({ liteMode = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const splineInstance = useRef<any>(null);
  const [shouldReposition, setShouldReposition] = useState(false);
  const pathname = usePathname();

  // Force scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Check if component is in viewport using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldReposition(true);
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
    // Check if we're on mobile or tablet or if it's a lite mode view
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 1280 ||
                         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Properly position the model
  const positionModel = () => {
    if (!canvasRef.current || !isVisible || liteMode) return;

    try {
      // Desktop positioning only - we now only use the 3D model on desktop
      // Adjusted translateX and scale for better overlap with static image position
      canvasRef.current.style.transform = 'translateX(5%) scale(1.1) !important';
    } catch (error) {
      console.error("Error positioning model:", error);
    }
  };

  // Add scroll event listener to handle positioning issues when scrolling
  useEffect(() => {
    if (!isVisible || liteMode || isMobile) return;

    const handleScroll = () => {
      if (document.documentElement.scrollTop < 500) {
        setShouldReposition(true);
      }
    };

    // Apply positioning immediately and on scroll
    positionModel();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, liteMode, isMobile, isLoaded]);

  // Apply positioning when needed
  useEffect(() => {
    if (shouldReposition && !isMobile && !liteMode) {
      positionModel();
      setShouldReposition(false);
    }
  }, [shouldReposition, isMobile, liteMode]);

  useEffect(() => {
    // Only load Spline when visible, not in lite mode, and not on mobile
    if (!isVisible || liteMode || isMobile) return;

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
            // Desktop quality settings
            const qualitySettings = { quality: 'medium', environmentIntensity: 0.5 };

            // Load with appropriate quality configuration
            await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode', qualitySettings);

            // Set initial camera and position
            setTimeout(() => {
              positionModel();
              setIsLoaded(true);
            }, 100);

          } catch (e) {
            // Fallback to normal loading
            await spline.load('https://prod.spline.design/QOd9c9MBmZdqaJKm/scene.splinecode');
            positionModel();
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
    if (!isVisible || liteMode || isMobile) return;

    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        // Ensure canvas dimensions match container
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;

        // Apply positioning after resize
        setTimeout(positionModel, 100);
      }
    };

    // Initial resize
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isVisible, liteMode, isMobile]);

  // Determine if we should show static image (mobile or lite mode)
  const shouldShowStaticImage = isMobile || liteMode;

  return (
    <>
      {/* This empty div fixes the scroll position issue with Spline on mobile devices */}
      <div id="spline-scroll-anchor" />
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
        ) : shouldShowStaticImage ? (
          // Static image for mobile/tablet or lite mode
          <div className="w-full h-full relative hardware-accelerated flex items-center justify-center xl:justify-end">
            <div className="relative w-[130%] h-[130%] mx-auto xl:-right-[15%] -top-[40px] xl:-top-[60px]">
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
          // 3D model for desktop only
          <>
            <canvas
              ref={canvasRef}
              id="spline-canvas"
              className="w-full h-full hardware-accelerated"
            />
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
    </>
  );
};

export default SplineModel;