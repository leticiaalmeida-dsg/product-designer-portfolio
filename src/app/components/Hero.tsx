'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mark as client-side and set initial scroll
    setIsClient(true);
    setScrollY(window.scrollY);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate animation progress based on scroll (Webflow style)
  const getAnimationProgress = () => {
    // If not client-side yet, return 1 (centered position)
    if (!isClient) return 1;
    
    const heroWrapper = heroRef.current;
    if (!heroWrapper) return 1; // Start centered when ref not ready

    const rect = heroWrapper.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // 0% when element is fully visible (bottom of element reaches bottom of viewport)
    const startPoint = elementTop + elementHeight - windowHeight;
    // 100% when element starts exiting (top of element reaches top of viewport)
    const endPoint = elementTop;
    const totalDistance = startPoint - endPoint; // Note: reversed because we're going backwards
    
    const currentProgress = (startPoint - scrollY) / totalDistance;
    
    // Clamp progress between 0 and 1
    return Math.max(0, Math.min(1, currentProgress));
  };

  const progress = getAnimationProgress();

  // Calculate position transforms based on Webflow settings
  const getProductTransform = () => {
    // starts at x: 15%, ends at x: -15%
    const startX = 20;
    const endX = -20;
    return startX + (endX - startX) * progress;
  };

  const getDesignerTransform = () => {
    // starts at x: -15%, ends at x: 15%
    const startX = -12;
    const endX = 12;
    return startX + (endX - startX) * progress;
  };

  return (
    <section
      ref={heroRef}
      className="bg-[#080808] text-white py-24 md:py-36 lg:py-40 xl:py-44"
    >
      {/* Section Container - pure horizontal alignment */}
      <div className="container">
        <div className="w-full">
          <div className="center-vertical-layout">
          {/* Text Content */}
          <div className="text-center w-full">
            {/* Display Wrapper - 80% of section container */}
            <div className="w-full mb-16">
              <h1 className="display text-[8vw] md:text-[9vw] lg:text-[10vw] xl:text-[12vw] font-normal leading-[0.8] tracking-tight">
                {/* PRODUCT display wrapper */}
                <div
                  className="flex items-center justify-center gap-4 mb-4"
                  style={{
                    transform: `translateX(${getProductTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                                      <svg
                    width="24"
                    height="24"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 inline-block"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="var(--background)"/>
                  </svg>
                  <span>PRODUCT</span>
                </div>

                {/* DESIGNER display wrapper */}
                <div
                  className="flex items-center justify-center gap-4"
                  style={{
                    transform: `translateX(${getDesignerTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 relative z-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path d="M62.9648 1.03516V57.5283H54.3877V15.6768L52.6201 17.4443L7.52832 62.5352L1.46387 56.4707L46.5508 11.3799L48.3184 9.6123H6.47168V1.03516H62.9648Z" fill="var(--pink-dark-bg)" stroke="var(--pink-dark-bg)" strokeWidth="2.07093"/>
                    </svg>
                  </div>
                  <span className="block">DESIGNER</span>
                </div>
              </h1>
            </div>

                          {/* Subtext */}
              <div className="subtext-wrapper space-y-2">
                <p className="text-sm md:text-base lg:text-lg font-normal tracking-wide">BUILDING BRANDS WITH PURPOSE</p>
                <p className="text-sm md:text-base lg:text-lg font-normal tracking-wide">PRODUCTS AND EXPERIENCES</p>
              </div>
          </div>

          {/* Hero Image */}
          <div className="home-hero_image w-full h-[45vw] max-h-[45vw] flex justify-center">
            <Image
              src="/images/home-hero_photo.jpg"
              alt="MacBook mockup showcasing design work"
              className="home-hero_photo w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
