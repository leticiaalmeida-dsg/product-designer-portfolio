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
      className="bg-[#080808] text-white min-h-screen py-48 px-[10%] pb-20"
    >
      <div className="container mx-auto w-[80%]">
        <div className="hero_wrapper flex flex-col items-center gap-12">
          <div className="text-center w-full">
            <div className="w-full mx-auto mb-16">
              <h1 className="text-[8rem] md:text-[6rem] lg:text-[7rem] font-normal leading-[0.8] tracking-tight">
                {/* LET'S MAKE YOUR display wrapper */}
                <div
                  className="flex items-center justify-center gap-4 mb-4 w-full"
                  style={{
                    transform: `translateX(${getLeftTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-[2.5rem] h-[2.5rem] relative z-10 flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="#080808"/>
                    </svg>
                  </div>
                  <span>LET'S MAKE YOUR</span>
                </div>

                {/* IDEAS COME TRUE display wrapper */}
                <div
                  className="flex items-center justify-center gap-4 w-full"
                  style={{
                    transform: `translateX(${getRightTransform()}%)`,
                    willChange: 'transform'
                  }}
                >
                  <div className="w-[2.5rem] h-[2.5rem] relative z-10 flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M62.9648 1.03516V57.5283H54.3877V15.6768L52.6201 17.4443L7.52832 62.5352L1.46387 56.4707L46.5508 11.3799L48.3184 9.6123H6.47168V1.03516H62.9648Z" fill="var(--pink-dark-bg)" stroke="var(--pink-dark-bg)" strokeWidth="2.07093"/>
                    </svg>
                  </div>
                  <span className="block">IDEAS COME TRUE</span>
                </div>
              </h1>
            </div>

            <div className="subtext-wrapper space-y-2">
              <p className="text-lg md:text-xl font-normal tracking-wide">I'M A DIGITAL PRODUCT DESIGNER</p>
              <p className="text-lg md:text-xl font-normal tracking-wide">BUILDING WITH SPARK, INTENT AND PURPOSE</p>
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
    </section>
  );
}
