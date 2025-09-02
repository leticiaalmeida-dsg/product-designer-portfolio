'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisScript() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      //direction: 'vertical',
      // gestureDirection: 'vertical',
      //smooth: true,
      //smoothTouch: false,
      touchMultiplier: 2,
    });

    // Set up RAF
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return null;
}