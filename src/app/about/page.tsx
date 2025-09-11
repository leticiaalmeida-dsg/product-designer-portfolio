'use client';

import AboutHero from './AboutHero';
import AboutSection from './AboutSection';
import { HamburgerMenu } from '../components/Navigation';
import ProjectFooter from '../components/ProjectFooter';

export default function AboutPage() {
  return (
    <>
      <HamburgerMenu />
      <main className="bg-[#080808] min-h-screen">
        <AboutHero />
        <AboutSection />
        <ProjectFooter />
      </main>
    </>
  );
}
