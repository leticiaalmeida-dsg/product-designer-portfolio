'use client';

import Image from 'next/image';
import ProjectTag from '../components/ProjectTag';
import { HamburgerMenu as Navigation } from '../components/Navigation';
import Footer from '../components/Footer';
import { projectsWithDynamicOrder } from '@/lib/projects';

export default function WorksPage() {
  console.log('Projects:', projectsWithDynamicOrder);


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080808" }}>
      <Navigation />
      {/* Works List Section */}
      {/* Hero Section */}
      <section className="hero-section px-[10%] min-h-[70svh] flex items-center pt-48 pb-16" style={{ backgroundColor: "#080808" }}>
        <h1 className="text-[5rem] font-normal text-white uppercase leading-tight">
          Crafting digital experiences<br />that lead, not follow
        </h1>
      </section>

      {/* Selected Works Section */}
      <section className="selected-works-section px-[10%] pb-32" style={{ backgroundColor: "#080808" }}>
        <div className="container mx-auto">
          <div className="w-full border-b border-[#4D4D4D] pb-4">
            {/* Section Label */}
            <div>
              <span className="text-[#838383] text-[0.875rem] font-normal">SELECTED WORKS</span>
            </div>
          </div>

          {projectsWithDynamicOrder.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="work-list-item w-full py-14 relative border-b border-[#4D4D4D]"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger loading animation with destination page
                  if (typeof window !== 'undefined') {
                    const event = new CustomEvent('startLoadingAnimation', {
                      detail: { destination: `/work/${project.slug}` }
                    });
                    window.dispatchEvent(event);

                    // Small delay to allow animation to start, then navigate
                    setTimeout(() => {
                      window.location.href = `/work/${project.slug}`;
                    }, 100);
                  }
                }}
                className="work-page-link w-full block flex justify-between items-center relative group text-left"
              >
                <div className="work-list-info flex flex-col gap-4 z-20 relative">
                  <div className="flex items-center gap-3">
                    <ProjectTag
                      text={project.category}
                      variant="plain"
                    />
                    <span className="text-[var(--pink-dark-bg)] text-base">↗</span>
                    <span className="text-[var(--pink-dark-bg)] text-sm font-normal">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <h1 className="heading-01 text-[5rem] font-normal text-white group-hover:text-[#ededed] transition-colors z-20 relative drop-shadow-2xl uppercase">
                      {project.title}
                    </h1>
                    <div className="work-list-button w-10 h-10 flex items-center justify-center rounded-full border border-[var(--pink-dark-bg)] bg-transparent group-hover:bg-[var(--pink-dark-bg)] transition-colors">
                      <svg
                        className="pink-arrow w-4 h-4 text-[var(--pink-dark-bg)] group-hover:text-[#080808] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 13.5L13.5 2.5M13.5 2.5H2.5M13.5 2.5V13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="work-list-img-wrapper w-[35%] relative top-auto z-0 aspect-video overflow-hidden">
                  <Image
                    src={`/images/${project.slug === 'edp-challenge' ? 'edp' : project.slug}_card.jpg`}
                    alt={project.title || 'Project image'}
                    fill
                    className="work-list-img w-full h-full max-w-full absolute top-0 left-0 right-0 bottom-0 object-cover transition-all duration-700 ease-out group-hover:translate-y-0 translate-y-full"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
