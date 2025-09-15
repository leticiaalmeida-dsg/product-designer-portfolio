'use client';

import Image from 'next/image';
import { allProjects } from '@/lib/projects';
import ProjectTag from './ProjectTag';

export default function SelectedWork() {
  const projects = [...allProjects].sort((a, b) => b.year - a.year);
  return (
    <section id="works" className="bg-[#080808] text-white pb-12 md:pb-24 lg:pb-28 xl:pb-32">
      <div className="container">
        <div className="compact-vertical-layout">
          <div className="selected-wrapper">
            <h2 className="title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1]">SELECTED</h2>
          </div>
          <div className="work-wrapper flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            >
              <mask id="path-1-inside-1_3248_5368" fill="white">
                <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z"/>
              </mask>
              <path d="M20.007 6.81607L2.82306 24L0 21.1769L17.1819 3.99301H2.03843V0H24V21.9616H20.007V6.81607Z" fill="#FF76A2"/>
              <path d="M20.007 6.81607H33.3125V-25.3062L10.5986 -2.59233L20.007 6.81607ZM2.82306 24L-6.58534 33.4084L2.82307 42.8168L12.2315 33.4084L2.82306 24ZM0 21.1769L-9.40895 11.7691L-18.8163 21.1775L-9.4084 30.5854L0 21.1769ZM17.1819 3.99301L26.5909 13.4009L49.3016 -9.31248H17.1819V3.99301ZM2.03843 3.99301H-11.2671V17.2985H2.03843V3.99301ZM2.03843 0V-13.3055H-11.2671V0H2.03843ZM24 0H37.3055V-13.3055H24V0ZM24 21.9616V35.2671H37.3055V21.9616H24ZM20.007 21.9616H6.70149V35.2671H20.007V21.9616ZM20.007 6.81607L10.5986 -2.59233L-6.58535 14.5916L2.82306 24L12.2315 33.4084L29.4154 16.2245L20.007 6.81607ZM2.82306 24L12.2315 14.5916L9.4084 11.7685L0 21.1769L-9.4084 30.5854L-6.58534 33.4084L2.82306 24ZM0 21.1769L9.40895 30.5848L26.5909 13.4009L17.1819 3.99301L7.77297 -5.41485L-9.40895 11.7691L0 21.1769ZM17.1819 3.99301V-9.31248H2.03843V3.99301V17.2985H17.1819V3.99301ZM2.03843 3.99301H15.3439V0H2.03843H-11.2671V3.99301H2.03843ZM2.03843 0V13.3055H24V0V-13.3055H2.03843V0ZM24 0H10.6945V21.9616H24H37.3055V0H24ZM24 21.9616V8.65607H20.007V21.9616V35.2671H24V21.9616ZM20.007 21.9616H33.3125V6.81607H20.007H6.70149V21.9616H20.007Z" fill="#FF76A2" mask="url(#path-1-inside-1_3248_5368)"/>
            </svg>
            <h2 className="title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1]">WORK</h2>
            <span className="count text-sm text-[var(--pink-dark-bg)]">(03)</span>
          </div>
        </div>

        {/* Projects stack */}
        <div className="projects-stack flex flex-col gap-[9rem] mt-12">
          {projects.map((project) => (
            <button
              key={project.id}
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
              className="project-card work-card group block text-left w-full"
            >
              <div className="w-full h-[35vw] mb-6 overflow-hidden">
                <Image
                  src={project.coverImage || `/images/${project.slug === 'edp-challenge' ? 'edp' : project.slug}_card.jpg`}
                  alt={`${project.title} ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="space-y-2">
                <ProjectTag
                  text={project.category}
                  variant="plain"
                />
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-white leading-[1.2] uppercase">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
