'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[var(--pink-dark-bg)] ml-4"
  >
    <mask id="path-1-about-dedicated" fill="white">
      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
    </mask>
    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
    <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-dedicated)"/>
  </svg>
);

const SplitText = ({ text, className }: { text: string, className: string }) => {
  const words = text.split(' ').filter(word => word.length > 0);
  
  return (
    <p className={className}>
      <span className="words-container inline">
        {words.map((word, index) => (
          <span key={index} className="word-reveal inline-block opacity-0 translate-y-[50px] mr-[8px]">
            {word}
          </span>
        ))}
      </span>
    </p>
  );
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wordElements = sectionRef.current.querySelectorAll('.word-reveal');
    
    gsap.to(wordElements, {
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.02,
        from: "start"
      },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 0.5
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#080808] text-white py-20 px-[10%]">
      <div className="container mx-auto">
        <div className="space-y-20">
          {/* About Section */}
          <div className="about flex justify-between items-start">
            {/* Left Side - ABOUT */}
            <div className="w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  WHAT I DO
                </h2>
              </div>
            </div>

            {/* Right Side - Large Paragraph */}
            <div className="w-[65%] flex items-start gap-6">
              <div className="w-[5rem] shrink-0"></div>
              <SplitText
                text="I design strategies, digital products, brands, and visual systems that connect — across web, mobile, and marketing. From research to UI and handoff, I love working end-to-end."
                className="text-[2rem] font-medium leading-[1.5] text-white"
              />
            </div>
          </div>

          {/* About Section Duplicate */}
          <div className="about flex justify-between items-start">
            {/* Left Side - ABOUT */}
            <div className="w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  HOW I DO IT
                </h2>
              </div>
            </div>

            {/* Right Side - Large Paragraph */}
            <div className="w-[65%] flex items-start gap-6">
              <div className="w-[5rem] shrink-0"></div>
              <SplitText
                text="I design strategies, digital products, brands, and visual systems that connect — across web, mobile, and marketing. From research to UI and handoff, I love working end-to-end."
                className="text-[2rem] font-medium leading-[1.5] text-white"
              />
            </div>
          </div>

          {/* What I Do Section */}
          <div className="what-i-do flex justify-between items-start">
            {/* Left Side - WHAT I DO */}
            <div className="w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  EXPERTISE
                </h2>
              </div>
            </div>

            {/* Right Side - Skills Tags */}
            <div className="w-[65%] flex items-start gap-6">
              <div className="w-[5rem] shrink-0"></div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <SplitText text="ART DIRECTION" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                  <ArrowIcon />
                </div>

                <div className="flex items-center">
                  <SplitText text="BRANDING" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                  <ArrowIcon />
                </div>

                <div className="flex items-center">
                  <SplitText text="PRODUCT STRATEGY" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                  <ArrowIcon />
                </div>

                <div className="flex items-center">
                  <SplitText text="UX & UI DESIGN" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                  <ArrowIcon />
                </div>

                <div className="flex items-center">
                  <SplitText text="INTERACTION DESIGN" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                  <ArrowIcon />
                </div>

                <div className="flex items-center">
                  <SplitText text="FRONTEND DEV" className="text-[2rem] font-normal text-white uppercase tracking-wide" />
                </div>
              </div>
            </div>
          </div>

          {/* Who I Am Section */}
          <div className="about flex justify-between items-start">
            {/* Left Side - WHO I AM */}
            <div className="w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  WHO I AM
                </h2>
              </div>
            </div>

            {/* Right Side - Profile and Description */}
            <div className="w-[65%] flex items-start gap-6">
              <img
                src="/images/me.png"
                alt="Profile picture"
                className="w-[5rem] h-[5rem] rounded-full object-cover"
              />
              <SplitText
                text="I'm a big fan of swimming, especially in open water! I love learning new things and enjoying movies in my free time. When I'm not busy designing, you can often find me scuba diving, learning French and Italian, or preparing for my next 6 km swim challenge. It keeps life exciting!"
                className="text-[2rem] font-medium leading-[1.5] text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
