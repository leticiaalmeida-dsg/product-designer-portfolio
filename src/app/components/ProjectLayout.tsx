'use client';

import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import ProjectFooter from './ProjectFooter';
import Image from 'next/image';

interface ProjectLayoutProps {
  children: React.ReactNode;
  title: string;
  category: string;
  coverImage: string;
  client: string;
  year: string;
  contributions: string[];
}

export default function ProjectLayout({ 
  children, 
  title, 
  category, 
  coverImage,
  client,
  year,
  contributions = []
}: ProjectLayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#080808] min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#080808] text-white pt-48 pb-48">
        {/* Project Info */}
        <div className="px-[10%]">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-4">
                {category}
              </span>
              <h2 className="text-[5rem] font-normal leading-[1] uppercase">
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full px-[10%] mt-12">
          <div className="container mx-auto">
            <div className="w-full h-[35vw]">
              <Image
                src={coverImage}
                alt={`${title} project cover`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="px-[10%] mt-12">
          <div className="container mx-auto">
            <div className="flex justify-between">
              {/* Client */}
              <div className="w-[15%]">
                <span className="block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-2">
                  CLIENT
                </span>
                <span className="block text-base text-white uppercase">
                  {client}
                </span>
              </div>

              {/* Year */}
              <div className="w-[15%]">
                <span className="block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-2">
                  YEAR
                </span>
                <span className="block text-base text-white uppercase">
                  {year}
                </span>
              </div>

              {/* Contributions */}
              <div className="w-[60%]">
                <span className="block text-[0.875rem] text-[#FF76A2] font-medium tracking-wide uppercase mb-2">
                  CONTRIBUTIONS
                </span>
                <div className="flex flex-wrap gap-2">
                  {contributions.map((contribution, index) => [
                    index > 0 && (
                      <span key={`arrow-${index}`} className="mx-2 text-[#FF76A2]">
                        ↗
                      </span>
                    ),
                    <span key={`contribution-${index}`} className="text-base text-white uppercase">
                      {contribution}
                    </span>
                  ])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="bg-white text-[#080808]">
        {children}
      </div>

      <ProjectFooter />
    </main>
  );
}
