'use client';

import ProjectLayout from '@/app/components/ProjectLayout';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Project metadata for ordering and listing
export const projectMetadata = {
  id: 2,
  title: 'Sem Parar Challenge',
  category: 'DIGITAL PRODUCTS FOR URBAN MOBILITY',
  year: 2023,
  featured: true,
  slug: 'sem-parar'
};

export default function SemParar() {
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
      title="Sem Parar Challenge"
      category="DIGITAL PRODUCTS FOR URBAN MOBILITY"
      coverImage="/images/sem-parar_card.jpg"
      client="Sem Parar"
      year="2023"
      contributions={[
        "IDEATION AND MARKETING STRATEGY",
        "WIREFRAMING AND VALIDATION",
        "DESIGN",
        "WORDPRESS DEVELOPMENT"
      ]}
    >
      <div className="pt-48 md:pt-36 lg:pt-40 xl:pt-44 pb-48 md:pb-24 lg:pb-28 xl:pb-32">
        <div className="container">
          <div className="content-layout">
            {/* Left column - Tags */}
            <div className="w-full md:w-[35%] text-left">
              <h2 className="text-[0.875rem] text-[var(--pink-light-bg)] font-medium tracking-wide uppercase">
                OVERVIEW
              </h2>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="text-base md:text-lg leading-relaxed text-[#080808] mb-12">
                The Sem Parar Challenge is a bold Brazilian initiative created by Sem Parar — a leader in urban mobility. More than just a program, it&apos;s a collaborative hub designed to connect innovators from high-potential startups, top universities, and industry-leading companies.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#080808]">
                By sparking cross-sector collaboration, the challenge breaks traditional boundaries and fuels a shared journey toward building the future of urban mobility.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-24">
            {/* Left column - Tags */}
            <div className="w-full md:w-[35%] text-left">
              <h2 className="text-[0.875rem] text-[var(--pink-light-bg)] font-medium tracking-wide uppercase">
                ROLE
              </h2>
            </div>

            {/* Right column - Content */}
            <div className="w-full md:w-[65%]">
              <p className="text-base md:text-lg leading-relaxed text-[#080808]">
                As a freelance digital product designer, I was brought in to extend and apply an existing brand identity across web and social in just 10 days. Beyond creating a cohesive visual system, I designed a website layout optimized for both usability and implementation — carefully adapting it to the technical constraints of their chosen platform. By combining design and development thinking, I helped the team launch a consistent, user-friendly experience under a tight deadline.
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
                src="/images/Marquee-Sem-Parar_01.jpg"
                alt="Marquee Sem Parar 01"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_02.jpg"
                alt="Marquee Sem Parar 02"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_03.jpg"
                alt="Marquee Sem Parar 03"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_04.jpg"
                alt="Marquee Sem Parar 04"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_05.jpg"
                alt="Marquee Sem Parar 05"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="marquee-imgs_collection" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_01.jpg"
                alt="Marquee Sem Parar 01"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_02.jpg"
                alt="Marquee Sem Parar 02"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
              <Image
                src="/images/Marquee-Sem-Parar_03.jpg"
                alt="Marquee Sem Parar 03"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
                <Image
                src="/images/Marquee-Sem-Parar_04.jpg"
                alt="Marquee Sem Parar 04"
                className="absolute inset-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            <div className="marquee-img_wrapper" style={{ width: '30rem', height: '30rem', position: 'relative' }}>
                <Image
                src="/images/Marquee-Sem-Parar_05.jpg"
                alt="Marquee Sem Parar 05"
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
        <div className="pt-48 pb-48">
          <div className="container">
            {/* Text Content */}
            <div className="content-layout mb-24">
              {/* Left column - Tag */}
              <div className="w-full md:w-[35%] text-left">
                <h2 className="text-[0.875rem] text-[var(--pink-light-bg)] font-medium tracking-wide uppercase">
                  THE CHALLENGE
                </h2>
              </div>
              <div className="w-full md:w-[65%]">
                <p className="text-base md:text-lg leading-relaxed text-[#080808]">
                  With two distinct challenges running in parallel, clarity and segmentation were key. I worked from a detailed brief provided by the innovation consultancy leading the initiative, which outlined the target audiences and key messaging goals. Our mission was to spark interest among both high-potential startups and innovation-driven students — ensuring each group felt seen, inspired, and motivated to join. I focused on tailoring the communication to resonate with both profiles while keeping the overall experience cohesive and aligned with the project&apos;s innovation-forward positioning.
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
                <source src="/videos/Sem-Parar_Video_01.mp4" type="video/mp4" />
              </video>
            </div>

            {/* iPhones Section */}
            <div ref={wrapperRef} className="iphones-wrapper flex flex-col md:flex-row w-full relative mt-24 gap-8 md:gap-0">
              {/* iPhone 1 Container */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <div ref={iphone1Ref} className="iphone relative w-[40%] md:w-[80%] pt-[81.53%] md:pt-[163.06%] transition-all duration-[50ms] ease-linear will-change-transform">
                  <Image
                    src="/images/Scroll-section_Sem-Parar_01.png"
                    alt="Sem Parar mobile interface"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* iPhone 2 Container */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <div ref={iphone2Ref} className="iphone relative w-[40%] md:w-[80%] pt-[81.53%] md:pt-[163.06%] transition-all duration-[50ms] ease-linear will-change-transform">
                  <Image
                    src="/images/Scroll-section_Sem-Parar_02.png"
                    alt="Sem Parar mobile interface"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* iPhone 3 Container */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <div ref={iphone3Ref} className="iphone relative w-[40%] md:w-[80%] pt-[81.53%] md:pt-[163.06%] transition-all duration-[50ms] ease-linear will-change-transform">
                  <Image
                    src="/images/Scroll-section_Sem-Parar_03.png"
                    alt="Sem Parar mobile interface"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Campaign Section */}
      <div ref={marketingRef} className="bg-[#EAEAEB] pt-48 pb-48 md:pb-72 transition-transform duration-[50ms] ease-linear will-change-transform">
        <div className="container">
          <div className="content-layout">
            {/* Left column - Tags */}
            <div className="w-full md:w-[35%] text-left">
              <h2 className="text-[0.875rem] text-[var(--pink-light-bg)] font-medium tracking-wide uppercase">
                THE MARKETING CAMPAIGN
              </h2>
            </div>
            <div className="w-full md:w-[65%]">
              <p className="text-base md:text-lg leading-relaxed text-[#080808]">
                We crafted a sharp, targeted marketing strategy to reach the right startups over a focused campaign. Our content plan combined real success stories, clear messaging around program benefits, and a spotlight on Sem Parar&apos;s commitment to innovation in urban mobility. The campaign ran across multiple platforms, generating strong engagement and helping connect with promising mobility-focused startups.
              </p>
            </div>
          </div>

          {/* Instagram Posts Section */}
          <div ref={postsWrapperRef} className="posts-wrapper flex flex-col md:flex-row w-full relative mt-4 gap-0">
            {/* Post 1 Container */}
            <div className="w-full md:w-1/3 flex justify-center items-center">

              <div ref={post1Ref} className="post is-1 relative w-[60%] md:w-[80%] pt-[87.7%] md:pt-[116.93%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white overflow-hidden shadow-lg">
                <Image
                  src="/images/Social_Sem-Parar-01.jpg"
                  alt="Sem Parar Instagram post"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* Post 2 Container */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div ref={post2Ref} className="post is-2 relative w-[60%] md:w-[80%] pt-[87.7%] md:pt-[116.93%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white overflow-hidden shadow-lg">
                <Image
                  src="/images/Social_Sem-Parar-02.jpg"
                  alt="Sem Parar Instagram post"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* Post 3 Container */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div ref={post3Ref} className="post is-3 relative w-[60%] md:w-[80%] pt-[87.7%] md:pt-[116.93%] transition-transform duration-[50ms] ease-linear will-change-transform bg-white overflow-hidden shadow-lg">
                <Image
                  src="/images/Social_Sem-Parar-03.jpg"
                  alt="Sem Parar Instagram post"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Next Project Section */}
      <div className="bg-[#080808] text-white pb-16">
        <div className="container pt-48 md:pt-32 lg:pt-36 xl:pt-40">
          <Link
            href="/work/edp-challenge"
            className="next-title-wrapper work-card relative center-vertical-layout group"
          >
            {/* Next Tag */}
            <h2 className="text-[0.875rem] text-[var(--pink-dark-bg)] font-medium tracking-wide uppercase mb-4">
              NEXT PROJECT
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-[5rem] font-normal leading-[1] uppercase transition-opacity duration-250 group-hover:opacity-70">
              EDP CHALLENGE
            </h3>
            <div className="img-wrapper absolute z-[2] bottom-[-6rem] w-[25rem] h-[6.25rem] overflow-hidden transition-[height] duration-250 group-hover:h-[12.5rem]">
              <Image
                src="/images/edp_card.jpg"
                alt="EDP Challenge preview"
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
