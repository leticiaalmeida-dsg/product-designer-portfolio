'use client';

import ProjectLayout from '@/app/components/ProjectLayout';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Project metadata for ordering and listing
export const projectMetadata = {
  id: 1,
  title: 'EDP Challenge',
  category: 'INNOVATION CHALLENGE',
  year: 2021,
  featured: true,
  slug: 'edp-challenge'
};

export default function EDPChallenge() {
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
      title="EDP Challenge"
      category="INNOVATION CHALLENGE"
      coverImage="/images/edp_card.jpg"
      client="EDP"
      year="2021"
      contributions={[
        "IDEATION AND STRATEGY",
        "WIREFRAMING AND VALIDATION",
        "UI DESIGN",
        "Marketing Campaign"
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
              The EDP Transformation Challenge, launched by EDP Brazil in 2021 in partnership with Liga
              Ventures, aims to tackle key challenges in the energy sector. This initiative allows startups to
              connect directly with one of the world&apos;s largest energy companies, enabling them to
              rapidly develop solutions and co-create new business opportunities, regardless of their 
              prior experience in the industry.
              </p>
              <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                Our team was tasked with creating a digital platform that would effectively 
                communicate the program&apos;s objectives, facilitate participant engagement, and 
                showcase the innovative potential of the energy sector.
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
                As lead product designer, I managed the entire UX/UI process, from research and wireframes
                to final handoff. I created interactive prototypes and validated key flows with users,
                ensuring the experience aligned with business goals and user needs. Collaborating with
                stakeholders, I maintained brand consistency while delivering an intuitive platform.
                This resulted in a seamless experience that effectively converted interest into quality
                startup applications.
              </p>
            </div>
          </div>

        </div>
              </div>

      {/* Marquee Section - Full Width */}
      <div className="marquee-wrapper" style={{ width: '100vw', height: '30rem', position: 'relative', overflow: 'hidden', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', position: 'absolute', overflow: 'visible', gap: '1.5rem' }}>
          <div className="marquee-imgs_collection" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_01.jpg"
                alt="EDP Challenge Marquee 1"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_02.jpg"
                alt="EDP Challenge Marquee 2"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_03.jpg"
                alt="EDP Challenge Marquee 3"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_04.jpg"
                alt="EDP Challenge Marquee 4"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_05.jpg"
                alt="EDP Challenge Marquee 5"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="marquee-imgs_collection" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_01.jpg"
                alt="EDP Challenge Marquee 1"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_02.jpg"
                alt="EDP Challenge Marquee 2"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee_03.jpg"
                alt="EDP Challenge Marquee 3"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
                <Image 
                src="/images/Marquee_04.jpg"
                alt="EDP Challenge Marquee 4"
                className="absolute inset-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
                <Image 
                src="/images/Marquee_05.jpg"
                alt="EDP Challenge Marquee 5"
                className="absolute inset-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="bg-[#FFFFFF] mt-24">
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
                <p className="text-[1.13rem] leading-relaxed text-[#080808] mb-6">
                  The challenge was all about attracting bold startups to reimagine the customer journey
                  in EDP Brasil&apos;s hydroelectric services. To bring that to life visually, I leaned into
                  dynamic imagery — teams in motion, expressive gestures, bold diagonals — all to evoke
                  action, energy, and collaboration.
                </p>
                <p className="text-[1.13rem] leading-relaxed text-[#080808]">
                  I also wove in EDP&apos;s core brand elements — the four natural forces (sun, water, wind,
                  and earth) — to ground the concept in something familiar, while still pushing for a
                  fresh, high-impact look. The result? A visual language that felt alive, modern, and
                  ready to spark real innovation.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="video-wrapper relative w-full pt-[58.61%] overflow-hidden">
              <video
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%+24px)] h-full object-cover scale-[1.02]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/Video_EDP.mp4" type="video/mp4" />
              </video>
            </div>

            {/* iPhones Section */}
            <div ref={wrapperRef} className="iphones-wrapper flex justify-between items-start w-full relative mt-24">
              {/* iPhone 1 */}
              <div ref={iphone1Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_EDP_01.png"
                  alt="EDP Challenge mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>

              {/* iPhone 2 */}
              <div ref={iphone2Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_EDP_02.png"
                  alt="EDP Challenge mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>

              {/* iPhone 3 */}
              <div ref={iphone3Ref} className="iphone relative w-[24%] pt-[48.92%] transition-all duration-[50ms] ease-linear will-change-transform">
                <Image 
                  src="/images/Scroll-section_EDP_03.png"
                  alt="EDP Challenge mobile interface"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Campaign Section */}
      <div ref={marketingRef} className="bg-[#F3F7FF] px-[10%] pt-48 pb-72 transition-transform duration-[50ms] ease-linear will-change-transform">
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
                We crafted a sharp, targeted marketing strategy to reach the right startups over a focused 45-day campaign. Our content plan combined real success stories, clear messaging around program benefits, and a spotlight on EDP&apos;s bold commitment to innovation in the energy sector. The campaign ran across Instagram, Facebook, LinkedIn, and email — reaching over 30,000 people and generating strong engagement. It led to 200+ qualified subscribers and over 60 completed applications, helping connect EDP with some of Brazil&apos;s most promising energy-focused startups.
              </p>
            </div>
          </div>

          {/* Instagram Posts Section */}
          <div ref={postsWrapperRef} className="posts-wrapper flex justify-between items-start w-full relative mt-4">
            {/* Post 1 */}
            <div ref={post1Ref} className="post is-1 relative w-[30%] pt-[45.85%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(120px)' }}>
              <Image 
                src="/images/Social_EDP-01.jpg"
                alt="EDP Challenge Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Post 2 */}
            <div ref={post2Ref} className="post is-2 relative w-[30%] pt-[45.85%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(180px)' }}>
              <Image 
                src="/images/Social_EDP-02.jpg"
                alt="EDP Challenge Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            {/* Post 3 */}
            <div ref={post3Ref} className="post is-3 relative w-[30%] pt-[45.85%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white rounded-2xl overflow-hidden shadow-lg" style={{ transform: 'translateY(240px)' }}>
              <Image 
                src="/images/Social_EDP-03.jpg"
                alt="EDP Challenge Instagram post"
                className="absolute top-0 left-0 w-full h-full object-cover"
                width={1000}
                height={1000}
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
                The EDP Challenge platform successfully attracted a diverse range of innovative 
                solutions in the energy sector. The user-friendly interface and clear 
                communication of program requirements led to high-quality submissions and 
                positive feedback from both participants and stakeholders.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Metric 1 */}
                <div className="text-center">
                  <div className="text-[3.5rem] font-medium text-[#080808] mb-4">+200</div>
                  <div className="text-[1rem] text-[#080808] leading-snug">
                    qualified startups subscribed<br />through the platform
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="text-center">
                  <div className="text-[3.5rem] font-medium text-[#080808] mb-4">4</div>
                  <div className="text-[1rem] text-[#080808] leading-snug">
                    finalists selected<br />for the program
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
            href="/work/sem-parar" 
            className="next-title-wrapper work-card relative flex flex-col items-center justify-center group"
          >
            {/* Next Tag */}
            <span className="inline-block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-4">
              NEXT PROJECT
            </span>

            {/* Heading */}
            <h2 className="text-[5rem] font-normal leading-[1] uppercase transition-opacity duration-250 group-hover:opacity-70">
              SEM PARAR
            </h2>

            {/* Image Wrapper */}
            <div className="img-wrapper absolute z-[2] bottom-[-6rem] w-[25rem] h-[6.25rem] overflow-hidden transition-[height] duration-250 group-hover:h-[12.5rem]">
              <Image
                src="/images/sem-parar_card.jpg"
                alt="Sem Parar preview"
                className="w-full h-[12.5rem] object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </Link>
        </div>
      </div>
    </ProjectLayout>
  );
}