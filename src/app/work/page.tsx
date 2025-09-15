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
      <section className="hero-section min-h-[70svh] flex items-center pt-24 md:pt-36 lg:pt-40 xl:pt-44 pb-8 md:pb-20 lg:pb-24" style={{ backgroundColor: "#080808" }}>
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white uppercase leading-tight">
            Crafting digital experiences<br />that lead, not follow
          </h1>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="selected-works-section pb-32" style={{ backgroundColor: "#080808" }}>
        <div className="container">
          <div className="w-full border-b border-[#4D4D4D] pb-4">
            {/* Section Label */}
            <div>
              <span className="text-[#838383] text-[0.875rem] font-normal">SELECTED WORKS</span>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile/tablet */}
          <div className="hidden md:block">
            {projectsWithDynamicOrder.map((project, index) => (
              <div
                key={`desktop-${project.slug}-${index}`}
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
                  className="work-page-link w-full block flex flex-col md:flex-row md:justify-between md:items-center relative group text-left gap-4 md:gap-0"
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
                      <h1 className="heading-01 text-2xl md:text-3xl lg:text-4xl xl:text-[5rem] font-normal text-white group-hover:text-[#ededed] transition-colors z-20 relative drop-shadow-2xl uppercase">
                        {project.title}
                      </h1>
                      <div className="work-list-button w-10 h-10 flex items-center justify-center rounded-full border border-[var(--pink-dark-bg)] bg-transparent group-hover:bg-[var(--pink-dark-bg)] transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 fill-[var(--pink-dark-bg)] group-hover:fill-[#080808] transition-colors"
                        >
                          <mask id="path-1-inside-1_3248_5368" fill="white">
                            <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z"/>
                          </mask>
                          <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z"/>
                          <path d="M20.007 6.81607H33.3125V-25.3062L10.5986 -2.59233L20.007 6.81607ZM2.82306 24L-6.58534 33.4084L2.82307 42.8168L12.2315 33.4084L2.82306 24ZM0 21.1769L-9.40895 11.7691L-18.8163 21.1775L-9.4084 30.5854L0 21.1769ZM17.1819 3.99301L26.5909 13.4009L49.3016 -9.31248H17.1819V3.99301ZM2.03843 3.99301H-11.2671V17.2985H2.03843V3.99301ZM2.03843 0V-13.3055H-11.2671V0H2.03843ZM24 0H37.3055V-13.3055H24V0ZM24 21.9616V35.2671H37.3055V21.9616H24ZM20.007 21.9616H6.70149V35.2671H20.007V21.9616ZM20.007 6.81607L10.5986 -2.59233L-6.58535 14.5916L2.82306 24L12.2315 33.4084L29.4154 16.2245L20.007 6.81607ZM2.82306 24L12.2315 14.5916L9.4084 11.7685L0 21.1769L-9.4084 30.5854L-6.58534 33.4084L2.82306 24ZM0 21.1769L9.40895 30.5848L26.5909 13.4009L17.1819 3.99301L7.77297 -5.41484L-9.40895 11.7691L0 21.1769ZM17.1819 3.99301V-9.31248H2.03843V3.99301V17.2985H17.1819V3.99301ZM2.03843 3.99301H15.3439V0H2.03843H-11.2671V3.99301H2.03843ZM2.03843 0V13.3055H24V0V-13.3055H2.03843V0ZM24 0H10.6945V21.9616H24H37.3055V0H24ZM24 21.9616V8.65607H20.007V21.9616V35.2671H24V21.9616ZM20.007 21.9616H33.3125V6.81607H20.007H6.70149V21.9616H20.007Z" mask="url(#path-1-inside-1_3248_5368)"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="work-list-img-wrapper w-[35%] relative top-auto z-0 aspect-video overflow-hidden">
                    <Image
                      src={`/images/${project.slug === 'edp-challenge' ? 'edp' : project.slug}_card.jpg`}
                      alt={project.title || 'Project image'}
                      fill
                      className="work-list-img w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover transition-all duration-700 ease-out group-hover:translate-y-0 translate-y-full"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout - Hidden on desktop */}
          <div className="block md:hidden">
            {projectsWithDynamicOrder.map((project, index) => (
              <div
                key={`mobile-${project.slug}-${index}`}
                className="work-list-item w-full py-8 relative border-b border-[#4D4D4D]"
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
                  className="work-page-link w-full block text-left"
                >
                  {/* Content Section */}
                  <div className="flex flex-col gap-4 mb-6">
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                      <h1 className="heading-01 text-xl font-normal text-white uppercase">
                        {project.title}
                      </h1>
                      <div className="work-list-button w-8 h-8 flex items-center justify-center rounded-full border border-[var(--pink-dark-bg)] bg-transparent hover:bg-[var(--pink-dark-bg)] transition-colors">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 fill-[var(--pink-dark-bg)] hover:fill-[#080808] transition-colors"
                        >
                          <mask id="path-1-mobile" fill="white">
                            <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z"/>
                          </mask>
                          <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z"/>
                          <path d="M20.007 6.81607H33.3125V-25.3062L10.5986 -2.59233L20.007 6.81607ZM2.82306 24L-6.58534 33.4084L2.82307 42.8168L12.2315 33.4084L2.82306 24ZM0 21.1769L-9.40895 11.7691L-18.8163 21.1775L-9.4084 30.5854L0 21.1769ZM17.1819 3.99301L26.5909 13.4009L49.3016 -9.31248H17.1819V3.99301ZM2.03843 3.99301H-11.2671V17.2985H2.03843V3.99301ZM2.03843 0V-13.3055H-11.2671V0H2.03843ZM24 0H37.3055V-13.3055H24V0ZM24 21.9616V35.2671H37.3055V21.9616H24ZM20.007 21.9616H6.70149V35.2671H20.007V21.9616ZM20.007 6.81607L10.5986 -2.59233L-6.58535 14.5916L2.82306 24L12.2315 33.4084L29.4154 16.2245L20.007 6.81607ZM2.82306 24L12.2315 14.5916L9.4084 11.7685L0 21.1769L-9.4084 30.5854L-6.58534 33.4084L2.82306 24ZM0 21.1769L9.40895 30.5848L26.5909 13.4009L17.1819 3.99301L7.77297 -5.41484L-9.40895 11.7691L0 21.1769ZM17.1819 3.99301V-9.31248H2.03843V3.99301V17.2985H17.1819V3.99301ZM2.03843 3.99301H15.3439V0H2.03843H-11.2671V3.99301H2.03843ZM2.03843 0V13.3055H24V0V-13.3055H2.03843V0ZM24 0H10.6945V21.9616H24H37.3055V0H24ZM24 21.9616V8.65607H20.007V21.9616V35.2671H24V21.9616ZM20.007 21.9616H33.3125V6.81607H20.007H6.70149V21.9616H20.007Z" mask="url(#path-1-mobile)"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Full-width Image Section */}
                  <div className="work-list-img-wrapper w-full relative aspect-video overflow-hidden">
                    <Image
                      src={`/images/${project.slug === 'edp-challenge' ? 'edp' : project.slug}_card.jpg`}
                      alt={project.title || 'Project image'}
                      fill
                      className="work-list-img w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
