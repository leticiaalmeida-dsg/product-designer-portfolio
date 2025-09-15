'use client';

import React, { useEffect, useState } from 'react';
import { HamburgerMenu as Navigation } from './Navigation';
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

  return (
    <main className="bg-[#080808] min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-[#080808] text-white pt-48 pb-48">
        {/* Project Info */}
        <div className="container">
          <div className="w-full">
              <span className="inline-block text-[0.875rem] text-[var(--pink-dark-bg)] font-medium tracking-wide uppercase mb-4">
                {category}
              </span>
              <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[5rem] font-normal leading-[1] uppercase">
                {title}
              </h1>
          </div>
        </div>
        <div className="w-full mt-12">
          <div className="container">
            <div className="w-full h-[35vw]">
              <Image
                src={coverImage}
                alt={`${title} project cover`}
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="container">
            <div className="space-between-layout">
              {/* Client */}
              <div className="w-[15%]">
                <span className="block text-[0.875rem] text-[var(--pink-dark-bg)] font-medium tracking-wide uppercase mb-2">
                  CLIENT
                </span>
                <span className="block text-base text-white uppercase">
                  {client}
                </span>
              </div>

              {/* Year */}
              <div className="w-[15%]">
                <span className="block text-[0.875rem] text-[var(--pink-dark-bg)] font-medium tracking-wide uppercase mb-2">
                  YEAR
                </span>
                <span className="block text-base text-white uppercase">
                  {year}
                </span>
              </div>
              <div className="w-[60%]">
                <span className="block text-[0.875rem] text-[var(--pink-dark-bg)] font-medium tracking-wide uppercase mb-2">
                  CONTRIBUTIONS
                </span>
                <div className="flex flex-wrap gap-2">
                  {contributions.map((contribution, index) => [
                    index > 0 && (
                      <span key={`arrow-${index}`} className="mx-2 text-[var(--pink-dark-bg)]">
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
      <div className="bg-white text-[#080808]">
        {children}
      </div>

      <ProjectFooter />
    </main>
  );
}
