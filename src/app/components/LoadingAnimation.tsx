'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

declare global {
  interface Window {
    gsap: typeof import('gsap');
  }
}

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [_isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [destinationPage, setDestinationPage] = useState<string>('');
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Get page title based on pathname or destination page
  const getPageTitle = () => {
    const pageToCheck = destinationPage || pathname;
    switch (pageToCheck) {
      case '/':
        return 'HOME';
      case '/work':
        return 'WORK';
      case '/about':
        return 'ABOUT';
      case '/contact':
        return 'CONTACT';
      default:
        // Check if it's a project page (e.g., /work/fora-da-lata)
        if (pageToCheck.startsWith('/work/')) {
          return 'PROJECT';
        }
        return 'HOME';
    }
  };

  // Listen for navigation events to trigger loading animation
  useEffect(() => {
    const handleStartLoading = (event: Event) => {
      const customEvent = event as CustomEvent<{ destination: string }>;
      const destination = customEvent.detail?.destination;
      if (destination) {
        setDestinationPage(destination);
        setIsLoading(true);
        setIsInitialized(false);
      }
    };

    // Listen for custom navigation events
    window.addEventListener('startLoadingAnimation', handleStartLoading);

    return () => {
      window.removeEventListener('startLoadingAnimation', handleStartLoading);
    };
  }, []);

  // Initialize dark backgrounds immediately on mount
  useEffect(() => {
    setIsInitialized(true);
    // Immediate setup for dark backgrounds
    const setupDarkBackgrounds = () => {
      if (containerRef.current) {
        containerRef.current.style.backgroundColor = '#080808';
      }
      if (curtainTopRef.current) {
        curtainTopRef.current.style.backgroundColor = '#080808';
        curtainTopRef.current.style.transform = 'translateY(0)';
      }
      if (curtainBottomRef.current) {
        curtainBottomRef.current.style.backgroundColor = '#080808';
        curtainBottomRef.current.style.transform = 'translateY(0)';
      }
    };

    setupDarkBackgrounds();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      setIsAnimating(true);
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        animateLoading();
      }, 10);
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [pathname]);

  const animateLoading = () => {
    if (!window.gsap) return;

    const { gsap } = window;
    const tl = gsap.timeline();

    // Initial setup - ensure curtains are properly positioned and visible
    gsap.set([curtainTopRef.current, curtainBottomRef.current], {
      y: 0,
      scaleY: 1,
      backgroundColor: '#080808',
    });

    gsap.set(contentRef.current, {
      opacity: 1,
      scale: 1,
    });

    // Add a tiny delay to ensure proper rendering
    tl.set({}, {}, 0.01);

    // Animation sequence
    tl
      // Curtains open from center (top goes up, bottom goes down)
      .to(curtainTopRef.current, {
        y: '-100vh',
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0)
      .to(curtainBottomRef.current, {
        y: '100vh',
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0)
      // Content fades out
      .to(contentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.out',
      }, 1.5)
      // Complete loading after animation
      .call(() => {
        setIsLoading(false);
        setDestinationPage(''); // Clear destination page
      }, [], 2.3);

    return tl;
  };

  if (!isLoading) return null;

  // Don't render until initialized to prevent white flash
  if (!isInitialized) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden"
        style={{
          backgroundColor: '#080808',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
      >
        {/* Loading placeholder with dark background */}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: '#080808',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Top Curtain */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 origin-bottom"
        style={{
          backgroundColor: '#080808',
          top: 0,
          left: 0,
          width: '100%',
          height: '50vh'
        }}
      />

      {/* Bottom Curtain */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 origin-top"
        style={{
          backgroundColor: '#080808',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50vh'
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex items-center justify-center text-center"
      >
        <div className="flex items-center gap-4">
          {/* Pink Arrow */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <mask id="path-1-inside-1_3248_5368" fill="white">
              <path d="M40.014 13.6321L5.64612 48L0 42.3539L34.3638 7.98602H4.07687V0H48V43.9231H40.014V13.6321Z"/>
            </mask>
            <path d="M40.014 13.6321L5.64612 48L0 42.3539L34.3638 7.98602H4.07687V0H48V43.9231H40.014V13.6321Z" fill="#FF76A2"/>
            <path d="M40.014 13.6321H53.3195V-18.4902L30.6056 4.22374L40.014 13.6321ZM5.64612 48L-3.76228 57.4084L5.64613 66.8168L15.0545 57.4084L5.64612 48ZM0 42.3539L-9.40895 32.946L-18.8163 42.3544L-9.4084 51.7623L0 42.3539ZM34.3638 7.98602L43.7728 17.3939L66.4835 -5.31947H34.3638V7.98602ZM4.07687 7.98602H-9.22863V21.2915H4.07687V7.98602ZM4.07687 0V-13.3055H-9.22863V0H4.07687ZM48 0H61.3055V-13.3055H48V0ZM48 43.9231V57.2286H61.3055V43.9231H48ZM40.014 43.9231H26.7085V57.2286H40.014V43.9231ZM40.014 13.6321L30.6056 4.22374L-3.76228 38.5916L5.64612 48L15.0545 57.4084L49.4224 23.0405L40.014 13.6321ZM5.64612 48L15.0545 38.5916L9.4084 32.9455L0 42.3539L-9.4084 51.7623L-3.76228 57.4084L5.64612 48ZM0 42.3539L9.40895 51.7617L43.7728 17.3939L34.3638 7.98602L24.9549 -1.42183L-9.40895 32.946L0 42.3539ZM34.3638 7.98602V-5.31947H4.07687V7.98602V21.2915H34.3638V7.98602ZM4.07687 7.98602H17.3824V0H4.07687H-9.22863V7.98602H4.07687ZM4.07687 0V13.3055H48V0V-13.3055H4.07687V0ZM48 0H34.6945V43.9231H48H61.3055V0H48ZM48 43.9231V30.6176H40.014V43.9231V57.2286H48V43.9231ZM40.014 43.9231H53.3195V13.6321H40.014H26.7085V43.9231H40.014Z" fill="#FF76A2" mask="url(#path-1-inside-1_3248_5368)"/>
          </svg>

          {/* Page Title */}
          <h1 className="text-5xl md:text-7xl text-white tracking-wider font-roobert" style={{ fontFamily: "var(--font-roobert)" }}>
            {getPageTitle()}
          </h1>
        </div>
      </div>
    </div>
  );
}
