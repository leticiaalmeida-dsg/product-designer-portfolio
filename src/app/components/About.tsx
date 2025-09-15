'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function About() {
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
    <section ref={sectionRef} id="about" className="bg-[#080808] text-white pt-6 md:pt-16 lg:pt-20 xl:pt-24 pb-8 md:pb-20 lg:pb-24 xl:pb-28">
      <div className="container">
        <div className="vertical-layout">
          {/* About Section */}
          <div className="about flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-0">
            {/* Left Side - ABOUT */}
            <div className="w-full md:w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  ABOUT
                </h2>
              </div>
            </div>

            {/* Right Side - Large Paragraph */}
            <div className="w-full md:w-[65%]">
              <div className="space-y-4">
                <SplitText
                  text="I help brands bring products to life in the digital world."
                  className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] text-white"
                />
                <SplitText
                  text="With strategy, design, and storytelling woven together, I shape experiences that feel alive, memorable, and human."
                  className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] text-white"
                />
                <SplitText
                  text="No fluff — only purpose, energy, and a touch of magic."
                  className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] text-white"
                />
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="what-i-do flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-0">
            {/* Left Side - /WHAT I DO */}
            <div className="w-full md:w-[40%]">
              <div className="inline-block">
                <h2 className="text-[0.875rem] font-normal text-[var(--pink-dark-bg)] tracking-wide">
                  WHAT I DO
                </h2>
              </div>
            </div>

            {/* Right Side - Skills Tags */}
            <div className="w-full md:w-[65%]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  ART DIRECTION
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--pink-dark-bg)] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                >
                  <mask id="path-1-about-1" fill="white">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                  </mask>
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                  <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-1)"/>
                </svg>

                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  BRANDING
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--pink-dark-bg)] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                >
                  <mask id="path-1-about-2" fill="white">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                  </mask>
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                  <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-2)"/>
                </svg>

                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  PRODUCT STRATEGY
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--pink-dark-bg)] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                >
                  <mask id="path-1-about-3" fill="white">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                  </mask>
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                  <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-3)"/>
                </svg>

                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  UX&UI
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--pink-dark-bg)] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                >
                  <mask id="path-1-about-4" fill="white">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                  </mask>
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                  <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-4)"/>
                </svg>

                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  INTERACTION DESIGN
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--pink-dark-bg)] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                >
                  <mask id="path-1-about-5" fill="white">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
                  </mask>
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
                  <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="var(--pink-dark-bg)" mask="url(#path-1-about-5)"/>
                </svg>

                <span className="text-lg md:text-xl lg:text-2xl font-normal text-white uppercase tracking-wide">
                  WEBFLOW DEV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
