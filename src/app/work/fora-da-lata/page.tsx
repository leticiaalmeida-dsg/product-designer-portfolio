'use client';

import ProjectLayout from '@/app/components/ProjectLayout';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForaDaLata() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iphone1Ref = useRef<HTMLDivElement>(null);
  const iphone2Ref = useRef<HTMLDivElement>(null);
  const iphone3Ref = useRef<HTMLDivElement>(null);

  // Instagram posts refs
  const postsWrapperRef = useRef<HTMLDivElement>(null);
  const post1Ref = useRef<HTMLDivElement>(null);
  const post2Ref = useRef<HTMLDivElement>(null);
  const post3Ref = useRef<HTMLDivElement>(null);

  // Section parallax refs
  const marketingRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Handle iPhones animation
      if (wrapperRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const wrapperHeight = wrapperRef.current.offsetHeight;
        const scrollStart = wrapperRect.top - viewportHeight;
        const scrollEnd = wrapperRect.top + wrapperHeight;
        
        let progress = (0 - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.min(Math.max(progress, 0), 1);
        progress = progress * progress;

        if (iphone1Ref.current) {
          iphone1Ref.current.style.transform = `translateY(${(1 - progress) * 120}px)`;
        }
        if (iphone2Ref.current) {
          iphone2Ref.current.style.transform = `translateY(${(1 - progress) * 180}px)`;
        }
        if (iphone3Ref.current) {
          iphone3Ref.current.style.transform = `translateY(${(1 - progress) * 240}px)`;
        }
      }

      // Handle section parallax
      if (marketingRef.current && outcomesRef.current) {
        const viewportHeight = window.innerHeight;
        const marketingRect = marketingRef.current.getBoundingClientRect();
        const outcomesRect = outcomesRef.current.getBoundingClientRect();
        
        // Calculate progress for marketing section (moving up)
        let marketingProgress = (viewportHeight - marketingRect.top) / (viewportHeight + marketingRect.height);
        marketingProgress = Math.min(Math.max(marketingProgress, 0), 1);
        
        // Calculate progress for outcomes section (moving down)
        let outcomesProgress = (viewportHeight - outcomesRect.top) / (viewportHeight + outcomesRect.height);
        outcomesProgress = Math.min(Math.max(outcomesProgress, 0), 1);
        
        // Apply transforms
        marketingRef.current.style.transform = `translateY(${-outcomesProgress * 120}px)`;
        outcomesRef.current.style.transform = `translateY(${(1 - outcomesProgress) * 180}px)`;
      }

      // Handle Instagram posts animation
      if (postsWrapperRef.current) {
        const postsRect = postsWrapperRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const postsHeight = postsWrapperRef.current.offsetHeight;
        const scrollStart = postsRect.top - viewportHeight;
        const scrollEnd = postsRect.top + postsHeight;
        
        let progress = (0 - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.min(Math.max(progress, 0), 1);
        progress = progress * progress;

        if (post1Ref.current) {
          post1Ref.current.style.transform = `translateY(${(1 - progress) * 120}px)`;
        }
        if (post2Ref.current) {
          post2Ref.current.style.transform = `translateY(${(1 - progress) * 180}px)`;
        }
        if (post3Ref.current) {
          post3Ref.current.style.transform = `translateY(${(1 - progress) * 240}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <ProjectLayout
      title="Fora da Lata"
      category="DIGITAL PRODUCTS FOR OPEN INNOVATION PROGRAM"
      coverImage="/images/fora-da-lata_card.jpg"
      client="SUVINIL/BASF"
      year="2021"
      contributions={[
        "IDEATION AND MARKETING STRATEGY",
        "WIREFRAMING AND VALIDATION",
        "DESIGN",
        "WORDPRESS DEVELOPMENT"
      ]}
    >
      <div className="px-[10%] pt-48 pb-24">
        <div className="container mx-auto">
          <div className="flex gap-12">
            {/* Left column - Tags */}
            <div className="w-[35%] text-left">
              <span className="inline-block text-[0.875rem] text-[#E4285C] font-medium tracking-wide uppercase">
                OVERVIEW
              </span>
            </div>

            {/* Right column - Content */}
            <div className="w-[65%]">
              <p className="text-[1.13rem] leading-relaxed text-[#080808] mb-12">
                Fora da Lata is an innovative startup acceleration program launched in collaboration with Suvinil, 
                a leading brand in Brazil&apos;s paint industry, and Liga Ventures, a top corporate accelerator.
              </p>
              <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                Our client aimed to launch a program to attract dynamic, inventive, and forward-thinking startups. 
                Our Liga Venture team&apos;s challenge at Liga Ventures was to create a platform and communication strategy 
                that not only engaged these disruptive ventures but also clearly conveyed the program&apos;s core values 
                of originality, innovation, and creativity.
              </p>
            </div>
          </div>

          <div className="flex gap-12 mt-24">
            {/* Left column - Tags */}
            <div className="w-[35%] text-left">
              <span className="inline-block text-[0.875rem] text-[#E4285C] font-medium tracking-wide uppercase">
                ROLE
              </span>
            </div>

            {/* Right column - Content */}
            <div className="w-[65%]">
              <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                I was responsible for creating the visual identity (excluding the logo), designing the website, 
                and developing social media assets. I also played a key role in shaping the marketing strategy 
                and overseeing the execution of campaigns. This work involved close collaboration with a small team, 
                which included one designer and a marketing analyst. I was deeply engaged in every stage of the 
                design process, striving to ensure a cohesive brand presence and impactful engagement throughout 
                the project.
              </p>
            </div>
          </div>

          {/* Grid Gallery Section */}
          <div className="mt-24">
            <div className="grid grid-cols-2 h-[90vh] gap-4">
              {/* Left Column - Video spanning two rows */}
              <div className="row-span-2 relative overflow-hidden">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/videos/Fora-da-Lata_Grid_Video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Top Right Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src="/images/Grid_image-02_Fora-da-Lata.jpg"
                  alt="Project mockup 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src="/images/Grid_image-03_Fora-da-Lata.jpg"
                  alt="Project mockup 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Challenge Section */}
      <div className="bg-[#F8F2FC] mt-24">
        <div className="px-[10%] py-48">
          <div className="container mx-auto">
            {/* Text Content */}
            <div className="flex gap-12 mb-24">
              {/* Left column - Tag */}
              <div className="w-[35%] text-left">
                <span className="inline-block text-[0.875rem] text-[#E4285C] font-medium tracking-wide uppercase">
                  THE CHALLENGE
                </span>
              </div>

              {/* Right column - Content */}
              <div className="w-[65%]">
                <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                  To attract bold, innovative startups, we crafted a vibrant 
                  identity that captured the program&apos;s energy and vision. 
                  Working closely with Liga Ventures and Suvinil, we uncovered 
                  key challenges, built personas, and shaped a youthful, colorful 
                  voice that spoke directly to the target audience — all while 
                  staying true to the brand&apos;s core values.
                </p>
              </div>
            </div>

            {/* Images Section */}
            <div className="tablet-wrapper flex justify-center w-full">
              <div className="tablet relative w-[35.26912vw] pt-[48.89248vw]">
                <Image 
                  src="/images/Scroll-section_Fora-da-Lata_01.png"
                  alt="Fora da Lata tablet view"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* iPhones Section */}
            <div ref={wrapperRef} className="iphones-wrapper flex justify-between items-start w-full relative mt-24">
              {/* iPhone 1 */}
              <div ref={iphone1Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_Fora-da-Lata_02.png"
                  alt="Fora da Lata mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              {/* iPhone 2 */}
              <div ref={iphone2Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_Fora-da-Lata_03.png"
                  alt="Fora da Lata mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              {/* iPhone 3 */}
              <div ref={iphone3Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_Fora-da-Lata_04.png"
                  alt="Fora da Lata mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10%] py-48">
        <div className="container mx-auto">
          {/* Video Section */}
          <div className="video-wrapper relative w-full pt-[58.61%] overflow-hidden">
            <video 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%+24px)] h-full object-cover scale-[1.02]"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/videos/Website_Fora-da-Lata-vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Marketing Campaign Section */}
      <div ref={marketingRef} className="bg-[#F8F2FC] px-[10%] pt-48 pb-72 transition-transform duration-[50ms] ease-linear will-change-transform">
        <div className="container mx-auto">
          <div className="flex gap-12">
            {/* Left column - Tags */}
            <div className="w-[35%] text-left">
              <span className="inline-block text-[0.875rem] text-[#E4285C] font-medium tracking-wide uppercase">
                THE MARKETING CAMPAIGN
              </span>
            </div>

            {/* Right column - Content */}
            <div className="w-[65%]">
              <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                In the marketing campaign, our goal was to raise awareness and boost subscriber numbers. 
                We used a mix of organic and paid traffic to highlight the program&apos;s unique value, showcase 
                success stories, and create urgency for the subscription page. We also engaged candidates 
                directly and built credibility through testimonials and partnerships.
              </p>
            </div>
          </div>

          {/* Instagram Posts Section */}
          <div ref={postsWrapperRef} className="posts-wrapper flex justify-between items-start w-full relative mt-4">
            {/* Post 1 */}
            <div ref={post1Ref} className="post is-1 relative w-[30%] pt-[37.75%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(120px)' }}>
              <Image 
                src="/images/Social_Fora-01.jpg"
                alt="Fora da Lata Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Post 2 */}
            <div ref={post2Ref} className="post is-2 relative w-[30%] pt-[37.75%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(180px)' }}>
              <Image 
                src="/images/Social_Fora-02.jpg"
                alt="Fora da Lata Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Post 3 */}
            <div ref={post3Ref} className="post is-3 relative w-[30%] pt-[37.75%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(240px)' }}>
              <Image 
                src="/images/Social_Fora-03.jpg"
                alt="Fora da Lata Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes Section */}
      <div ref={outcomesRef} className="px-[10%] pb-64 transition-transform duration-[50ms] ease-linear will-change-transform">
        <div className="container mx-auto">
          <div className="flex gap-12">
            {/* Left column - Tags */}
            <div className="w-[35%] text-left">
              <span className="inline-block text-[0.875rem] text-[#E4285C] font-medium tracking-wide uppercase">
                THE OUTCOMES
              </span>
            </div>

            {/* Right column - Content */}
            <div className="w-[65%]">
              <p className="text-[1.13rem] leading-relaxed text-[#080808] mb-16">
                The marketing campaign for the &apos;Fora da Lata&apos; acceleration 
                program was highly successful, exceeding its goal of 
                attracting qualified startups through a strategic approach. 
                The remarkable response led to a strong lineup of innovative 
                candidates, creating a robust database for the selection team 
                to identify the most promising startups.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-8">
                {/* Metric 1 */}
                <div className="text-center">
                  <div className="text-[3.5rem] font-medium text-[#080808] mb-4">+350</div>
                  <div className="text-[1rem] text-[#080808] leading-snug">
                    startups subscribed<br />using our website
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="text-center">
                  <div className="text-[3.5rem] font-medium text-[#080808] mb-4">4</div>
                  <div className="text-[1rem] text-[#080808] leading-snug">
                    startups selected<br />for this edition
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="text-center">
                  <div className="text-[3.5rem] font-medium text-[#080808] mb-4">75%</div>
                  <div className="text-[1rem] text-[#080808] leading-snug">
                    of them became business<br />partners of the company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Section */}
      <div className="bg-[#080808] text-white">
        <div className="container mx-auto px-[10%] pt-48">
          <Link 
            href="/work/edp-challenge" 
            className="next-title-wrapper work-card relative flex flex-col items-center justify-center group"
          >
            {/* Next Tag */}
            <span className="inline-block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-4">
              NEXT PROJECT
            </span>

            {/* Heading */}
            <h2 className="text-[5rem] font-normal leading-[1] uppercase transition-opacity duration-250 group-hover:opacity-70">
              EDP CHALLENGE
            </h2>

            {/* Image Wrapper */}
            <div className="img-wrapper absolute z-[2] bottom-[-6rem] w-[25rem] h-[6.25rem] overflow-hidden transition-[height] duration-250 group-hover:h-[12.5rem]">
              <Image
                src="/images/edp_card.jpg"
                alt="EDP Challenge preview"
                className="w-full h-[12.5rem] object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </ProjectLayout>
  );
}
