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
    const startX = 24;
    const endX = -24;
    return startX + (endX - startX) * progress;
  };

  const getDesignerTransform = () => {
    // starts at x: -15%, ends at x: 15%
    const startX = -15;
    const endX = 15;
    return startX + (endX - startX) * progress;
  };

  return (
    <section 
      ref={heroRef}
      className="bg-[#080808] text-white min-h-screen py-48 px-[10%] pb-20"
    >
      {/* Section Container - 80% of page width */}
      <div className="container mx-auto w-[80%]">
        <div className="hero_wrapper flex flex-col items-center gap-12">
          {/* Text Content */}
          <div className="text-center w-full">
            {/* Display Wrapper - 80% of section container */}
            <div className="w-[80%] mx-auto mb-16">
              <h1 className="display text-[15vw] md:text-[12vw] lg:text-[12vw] font-normal leading-[0.8] tracking-tight">
                {/* PRODUCT display wrapper */}
                <div 
                  className="flex items-center justify-center gap-4 mb-4"
                  style={{
                    transform: `translateX(${getProductTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                                      <svg
                    width="48"
                    height="48"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="var(--pink-dark-bg)"/>
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
                  <div className="w-[4rem] h-[4rem] relative z-10 flex items-center justify-center">
                    <svg 
                      width="64" 
                      height="64" 
                      viewBox="0 0 64 64" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
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
                <p className="text-lg md:text-xl font-normal tracking-wide">BUILDING BRANDS WITH PURPOSE</p>
                <p className="text-lg md:text-xl font-normal tracking-wide">PRODUCTS AND EXPERIENCES</p>
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
    </section>
  );
}
