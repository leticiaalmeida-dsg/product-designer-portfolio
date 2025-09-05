import Link from 'next/link';
import Image from 'next/image';
import ProjectTag from '../components/ProjectTag';
import { HamburgerMenu as Navigation } from '../components/Navigation';
import Footer from '../components/Footer';
import { projectsWithDynamicOrder } from '@/lib/projects';

export default function WorksPage() {
  console.log('Projects:', projectsWithDynamicOrder);


  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {/* Works List Section */}
      <section className="px-[10%] pt-32 pb-48" style={{ backgroundColor: "#080808" }}>
        <div className="container mx-auto">
          {projectsWithDynamicOrder.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="work-list-item w-full py-14 relative border-b border-[#4D4D4D]"
            >
              <Link
                href={`/work/${project.slug}`}
                className="work-page-link w-full block flex justify-between items-center relative group"
              >
                <div className="work-list-info flex flex-col gap-4 z-20 relative">
                  <div className="flex items-center gap-3">
                    <ProjectTag
                      text={project.category}
                      variant="plain"
                    />
                    <span className="text-[#FF76A2] text-base">↗</span>
                    <span className="text-[#FF76A2] text-sm font-normal">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <h2 className="heading-02 text-[5rem] font-normal text-white group-hover:text-[#ededed] transition-colors z-20 relative drop-shadow-2xl uppercase">
                      {project.title}
                    </h2>
                    <div className="work-list-button w-10 h-10 flex items-center justify-center rounded-full border border-[#FF76A2] bg-transparent group-hover:bg-[#FF76A2] transition-colors">
                      <svg
                        className="pink-arrow w-4 h-4 text-[#FF76A2] group-hover:text-[#080808] transition-colors"
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
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
