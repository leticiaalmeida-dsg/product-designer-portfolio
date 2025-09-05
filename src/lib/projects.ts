export interface ProjectMetadata {
  id: number;
  title: string;
  category: string;
  shortCategory?: string; // For more concise display in cards
  year: number;
  orderIndex: number;
  featured: boolean;
  slug: string;
  client?: string;
  contributions?: string[];
  coverImage?: string;
  description?: string;
}

// Define project metadata directly
export const allProjects: ProjectMetadata[] = [
  {
    id: 1,
    title: 'EDP Challenge',
    category: 'INNOVATION CHALLENGE',
    shortCategory: 'INNOVATION CHALLENGE',
    year: 2021,  // Late 2021
    orderIndex: 2,  // For fine-tuning sort order within same year
    featured: true,
    slug: 'edp-challenge',
    client: 'EDP',
    contributions: [
      "IDEATION AND STRATEGY",
      "WIREFRAMING AND VALIDATION",
      "UI DESIGN",
      "Marketing Campaign"
    ],
    coverImage: '/images/edp_card.jpg',
    description: 'The EDP Transformation Challenge, launched by EDP Brazil in 2021 in partnership with Liga Ventures, aims to tackle key challenges in the energy sector.'
  },
  {
    id: 2,
    title: 'Sem Parar',
    category: 'INNOVATION CHALLENGE',
    shortCategory: 'INNOVATION CHALLENGE',
    year: 2024,
    orderIndex: 1,  // Most recent
    featured: true,
    slug: 'sem-parar',
    client: 'Sem Parar',
    contributions: [
      "UX/UI DESIGN",
      "DESIGN SYSTEM",
      "PROTOTYPING",
      "USER TESTING"
    ],
    coverImage: '/images/sem-parar_card.jpg',
    description: 'Redesigning the digital experience for Brazil\'s leading automatic payment solution.'
  },
  {
    id: 3,
    title: 'Fora da Lata',
    category: 'OPEN INNOVATION PROGRAM',
    shortCategory: 'OPEN INNOVATION PROGRAM',
    year: 2021,  // Early 2021
    orderIndex: 3,  // Oldest
    featured: true,
    slug: 'fora-da-lata',
    client: 'Fora da Lata',
    contributions: [
      "BRAND STRATEGY",
      "VISUAL IDENTITY",
      "PACKAGING",
      "SOCIAL MEDIA"
    ],
    coverImage: '/images/fora-da-lata_card.jpg',
    description: 'Creating a bold and innovative brand identity for a revolutionary beverage company.'
  }
];


// Sort projects by year (descending - most recent first), then by orderIndex
export const sortedProjects = [...allProjects].sort((a, b) => {
  // First sort by year (descending)
  if (a?.year !== b?.year) {
    return (b?.year || 0) - (a?.year || 0);
  }
  // If same year, sort by orderIndex (lower number = more recent)
  return (a?.orderIndex || 0) - (b?.orderIndex || 0);
});

// Generate dynamic order IDs based on year sorting
export const projectsWithDynamicOrder = sortedProjects.map((project, index) => ({
  ...project,
  dynamicOrder: index + 1, // 1-based ordering (1 = most recent)
  orderRank: sortedProjects.length - index // Higher number = more recent
}));

// Get featured projects only
export const featuredProjects = sortedProjects.filter(project => project.featured);

// Get project by slug
export const getProjectBySlug = (slug: string): ProjectMetadata | undefined => {
  return allProjects.find(project => project.slug === slug);
};

// Get next project in the sequence (based on dynamic year-based ordering)
export const getNextProject = (currentSlug: string): ProjectMetadata | undefined => {
  const currentIndex = projectsWithDynamicOrder.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projectsWithDynamicOrder.length - 1) return undefined;

  return projectsWithDynamicOrder[currentIndex + 1];
};

// Get previous project in the sequence (based on dynamic year-based ordering)
export const getPreviousProject = (currentSlug: string): ProjectMetadata | undefined => {
  const currentIndex = projectsWithDynamicOrder.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) return undefined;

  return projectsWithDynamicOrder[currentIndex - 1];
};

// Get project position info
export const getProjectPosition = (slug: string) => {
  const project = projectsWithDynamicOrder.find(p => p.slug === slug);
  if (!project) return null;

  const currentIndex = projectsWithDynamicOrder.findIndex(p => p.slug === slug);
  return {
    current: currentIndex + 1,
    total: projectsWithDynamicOrder.length,
    isFirst: currentIndex === 0,
    isLast: currentIndex === projectsWithDynamicOrder.length - 1,
    dynamicOrder: project.dynamicOrder,
    orderRank: project.orderRank
  };
};
