'use client';

import { useEffect, useState, useRef } from 'react';

export default function ProjectFooter() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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
    if (!isClient) return 0;
    
    const footerWrapper = footerRef.current;
    if (!footerWrapper) return 0;

    const rect = footerWrapper.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    //const elementHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // Start animation when footer comes into view
    const startPoint = elementTop - windowHeight;
    // End animation when footer is fully in view
    const endPoint = elementTop - (windowHeight * 0.5);
    const totalDistance = endPoint - startPoint;
    
    const currentProgress = Math.max(0, Math.min(1, (scrollY - startPoint) / totalDistance));
    return currentProgress;
  };

  const progress = getAnimationProgress();

  const getLetsWorkTransform = () => {
    const startX = 0;
    const endX = -6; // Reduced from -12 to -6
    return startX + (endX - startX) * progress;
  };

  const getTogetherTransform = () => {
    const startX = 0;
    const endX = 6; // Reduced from 12 to 6
    return startX + (endX - startX) * progress;
  };

  return (
    <footer ref={footerRef} className="bg-[#080808] text-white px-[10%] pt-16 pb-12">
      <div className="container mx-auto">
        {/* Main footer content - flexbox space-between */}
        <div className="flex justify-between items-start mb-16">
          {/* Left side - Let's work together */}
          <div className="flex-1">
            <div 
              style={{
                transform: `translateX(${getLetsWorkTransform()}%)`,
                willChange: 'transform',
                transition: 'transform 0.3s ease'
              }}
            >
              <h2 className="text-[2rem] font-normal leading-[1]">LET&apos;S WORK</h2>
            </div>
            <div 
              className="flex items-center gap-4 mt-4"
              style={{
                transform: `translateX(${getTogetherTransform()}%)`,
                willChange: 'transform',
                transition: 'transform 0.3s ease'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--pink-dark-bg)]"
              >
                <mask id="path-1-footer" fill="white">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                </mask>
                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-footer)"/>
              </svg>
              <h2 className="text-[2rem] font-normal leading-[1]">TOGETHER</h2>
            </div>
          </div>

          {/* Right side - Contact and social */}
          <div className="flex-1 text-right">
            {/* Contact CTA */}
            <div className="mb-12">
              <p className="text-[0.875rem] text-[var(--pink-dark-bg)] tracking-wide inline-block">DROP ME A LINE</p>
              <div className="mt-4">
                <a href="mailto:hello@leticiaalmeida.design" className="text-[1rem] font-normal hover:text-[var(--pink-dark-bg)] transition-colors block">hello@leticiaalmeida.design</a>
              </div>
              <div className="mt-2">
                <a href="tel:+5511998986124" className="text-[1rem] font-normal text-gray-300 hover:text-white transition-colors block">+55 (11) 99898-6124</a>
              </div>
            </div>

            {/* Socials */}
            <div className="mb-12">
              <div className="flex items-center justify-end gap-6">
                <a href="#" className="text-white hover:text-[var(--pink-dark-bg)] transition-colors">Linkedin</a>
                <a href="#" className="text-white hover:text-[var(--pink-dark-bg)] transition-colors">Instagram</a>
              </div>
            </div>

            {/* Bottom note */}
            <div className="text-sm text-gray-400">
              <p>Coded by me</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}