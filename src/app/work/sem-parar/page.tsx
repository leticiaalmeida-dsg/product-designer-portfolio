'use client';

import ProjectLayout from '@/app/components/ProjectLayout';

export default function SemParar() {
  return (
    <ProjectLayout
      title="Sem Parar"
      category="INNOVATION CHALLENGE"
      coverImage="/images/sem-parar_card.jpg"
      client="Sem Parar"
      year="2023"
      contributions={[
        "IDEATION AND STRATEGY",
        "WIREFRAMING AND VALIDATION",
        "UI DESIGN"
      ]}
    >
      <div className="container mx-auto px-[10%] py-24">
        <div className="max-w-3xl">
          <h2 className="text-[2.5rem] font-normal mb-8">About the Project</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            [Project description will go here]
          </p>
          
          {/* Project details will go here */}
          <div className="grid grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-[#FF76A2] text-sm font-medium mb-2">CLIENT</h3>
              <p className="text-lg">Sem Parar</p>
            </div>
            <div>
              <h3 className="text-[#FF76A2] text-sm font-medium mb-2">YEAR</h3>
              <p className="text-lg">2023</p>
            </div>
            <div>
              <h3 className="text-[#FF76A2] text-sm font-medium mb-2">ROLE</h3>
              <p className="text-lg">Product Design</p>
            </div>
            <div>
              <h3 className="text-[#FF76A2] text-sm font-medium mb-2">DELIVERABLES</h3>
              <p className="text-lg">UX/UI Design, Research</p>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
