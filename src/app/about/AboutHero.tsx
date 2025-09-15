'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function AboutHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

  const getAnimationProgress = () => {
    if (!isClient) return 1;
    
    const heroWrapper = heroRef.current;
    if (!heroWrapper) return 1;

    const rect = heroWrapper.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    const startPoint = elementTop + elementHeight - windowHeight;
    const endPoint = elementTop;
    const totalDistance = startPoint - endPoint;
    
    const currentProgress = (startPoint - scrollY) / totalDistance;
    
    return Math.max(0, Math.min(1, currentProgress));
  };

  const progress = getAnimationProgress();

  const getLeftTransform = () => {
    const startX = 22;
    const endX = -22;
    return startX + (endX - startX) * progress;
  };

  const getRightTransform = () => {
    const startX = -15;
    const endX = 15;
    return startX + (endX - startX) * progress;
  };

  return (
    <section
      ref={heroRef}
      className="bg-[#080808] text-white min-h-screen py-24 md:py-36 lg:py-40 xl:py-44 pb-20 md:pb-28 lg:pb-32 xl:pb-36"
    >
      <div className="container">
        <div className="w-full">
          <div className="center-vertical-layout">
          <div className="text-center w-full">
            <div className="w-full mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-[5rem] xl:text-[5rem] font-normal leading-[0.8] tracking-tight">
                {/* LET'S MAKE YOUR display wrapper */}
                <div
                  className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4 mb-4 w-full"
                  style={{
                    transform: `translateX(${getLeftTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative z-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-full h-full"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="#080808"/>
                    </svg>
                  </div>
                  <span>LET&apos;S MAKE YOUR</span>
                </div>

                {/* IDEAS COME TRUE display wrapper */}
                <div
                  className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-4 w-full"
                  style={{
                    transform: `translateX(${getRightTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative z-10 flex items-center justify-center">
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
                  <span className="block">IDEAS COME TRUE</span>
                </div>
              </h1>
            </div>

            <div className="subtext-wrapper space-y-2">
              <p className="text-sm md:text-base lg:text-lg font-normal tracking-wide">I&apos;M A DIGITAL PRODUCT DESIGNER</p>
              <p className="text-sm md:text-base lg:text-lg font-normal tracking-wide">BUILDING WITH SPARK, INTENT AND PURPOSE</p>
            </div>
          </div>

          {/* About Hero Image */}
          <div className="about-hero_image w-full h-[56.25%] flex justify-center">
            <Image
              src="/images/about-hero_img.jpg"
              alt="About hero image showcasing design work"
              className="about-hero_photo w-full h-full object-cover"
              width={1600}
              height={900}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
