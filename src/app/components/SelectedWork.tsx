import Image from 'next/image';

export default function SelectedWork() {
  return (
    <section id="works" className="bg-[#080808] text-white py-20 px-[10%]">
      <div className="container mx-auto">
        <div className="section-header flex flex-col gap-[0.25rem]">
          <div className="selected-wrapper">
            <h2 className="title text-[6rem] font-normal leading-[1]">SELECTED</h2>
          </div>
          <div className="work-wrapper flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <mask id="path-1-inside-1_3001_7" fill="white">
                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"/>
              </mask>
              <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59096 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
              <path d="M10.0035 3.40804H13.0035V-3.83461L7.88217 1.28672L10.0035 3.40804ZM1.41153 12L-0.709788 14.1213L1.41153 16.2426L3.53285 14.1213L1.41153 12ZM0 10.5885L-2.12144 8.46727L-4.24252 10.5886L-2.12132 12.7098L0 10.5885ZM8.59096 1.99651L10.7124 4.1177L15.833 -1.00349L8.59096 -1.00349V1.99651ZM1.01922 1.99651H-1.98078V4.99651H1.01922V1.99651ZM1.01922 0V-3H-1.98078V0H1.01922ZM12 0H15V-3H12V0ZM12 10.9808V13.9808H15V10.9808H12ZM10.0035 10.9808H7.00349V13.9808H10.0035V10.9808ZM10.0035 3.40804L7.88217 1.28672L-0.70979 9.87868L1.41153 12L3.53285 14.1213L12.1248 5.52936L10.0035 3.40804ZM1.41153 12L3.53285 9.87868L2.12132 8.46715L0 10.5885L-2.12132 12.7098L-0.709788 14.1213L1.41153 12ZM0 10.5885L2.12144 12.7097L10.7124 4.1177L8.59096 1.99651L6.46952 -0.124691L-2.12144 8.46727L0 10.5885ZM8.59096 1.99651V-1.00349H1.01922V1.99651V4.99651H8.59096V1.99651ZM1.01922 1.99651H4.01922V0H1.01922H-1.98078V1.99651H1.01922ZM1.01922 0V3H12V0V-3H1.01922V0ZM12 0H9V10.9808H12H15V0H12ZM12 10.9808V7.98078H10.0035V10.9808V13.9808H12V10.9808ZM10.0035 10.9808H13.0035V3.40804H10.0035H7.00349V10.9808H10.0035Z" fill="#FF5EC4" mask="url(#path-1-inside-1_3001_7)"/>
            </svg>
            <h2 className="title text-[6rem] font-normal leading-[1]">WORK</h2>
            <span className="count text-sm text-[#FF5EC4]">(03)</span>
          </div>
        </div>

        {/* Projects stack */}
        <div className="projects-stack flex flex-col gap-[9rem] mt-12">
          {/* Project Card 1 */}
          <a href="/work/fora-da-lata" className="project-card work-card group block">
            <div className="w-full h-[35vw] mb-6 overflow-hidden">
              <Image
                src="/images/fora-da-lata_card.jpg"
                alt="Fora da Lata Innovation Campaign"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block text-[0.875rem] text-[#FF5EC4] font-medium tracking-wide">
                INNOVATION CAMPAIGN
              </span>
              <h3 className="text-[2rem] font-normal text-white leading-[1.2] uppercase">
                Fora da Lata
              </h3>
            </div>
          </a>

          {/* Project Card 2 */}
          <a href="/work/edp-challenge" className="project-card work-card group block">
            <div className="w-full h-[35vw] mb-6 overflow-hidden">
              <Image
                src="/images/edp_card.jpg"
                alt="EDP Challenge Innovation Campaign"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block text-[0.875rem] text-[#FF5EC4] font-medium tracking-wide">
                INNOVATION CAMPAIGN
              </span>
              <h3 className="text-[2rem] font-normal text-white leading-[1.2] uppercase">
                EDP Challenge
              </h3>
            </div>
          </a>

          {/* Project Card 3 */}
          <a href="/work/sem-parar" className="project-card work-card group block">
            <div className="w-full h-[35vw] mb-6 overflow-hidden">
              <Image
                src="/images/sem-parar_card.jpg"
                alt="Sem Parar Innovation Challenge"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block text-[0.875rem] text-[#FF5EC4] font-medium tracking-wide">
                INNOVATION CHALLENGE
              </span>
              <h3 className="text-[2rem] font-normal text-white leading-[1.2] uppercase">
                Sem Parar
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
