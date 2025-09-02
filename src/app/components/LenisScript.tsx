'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

declare global {
  interface Window {
    Lenis: typeof Lenis;
  }
}

export default function LenisScript() {
  useEffect(() => {
    const initializeLenis = () => {
      if (typeof window !== 'undefined' && window.Lenis) {
        const lenis = new window.Lenis({
          lerp: 0.02,
          wheelMultiplier: 1.2,
          gestureOrientation: "vertical",
          //normalizeWheel: true,
          //smoothTouch: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        console.log('Lenis smooth scroll initialized');
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeLenis, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // This component doesn't render anything
  return null;
}