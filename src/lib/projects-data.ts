export interface Project {
  name: string;
  description: string;      // Short description for project overview cards
  img: string;              // Primary hero/thumbnail image
  gallery?: string[];       // Array for additional project images
  route: string;            // The URL path
  industry: string;         // Industry of the client
  objectives: string;       // Objectives of the project
  status: string;           // Status of the project
  role: string;
  techStack: string[];      // Array of technologies used
  liveUrl?: string;         // Optional link to the live website
  githubUrl?: string;       // Optional link to the source code
  downloadUrl?: string;     // Optional link to the PDF
  downloadLabel?: string;   // Optional text for the PDF Button
  // The Case Study Structure:
  services?: { label: string; value: string }[];
  overview?: string;
  challenge?: string;        
  strategy?: string;         
  execution?: string;        
  results?: string;          
}

export const projects: Project[] = [
  { 
    name: "Böhmer Manufaktur", 
    description: "UI/UX & Digital Product Design", 
    img: "/img/work/woodwork/thumbnail.jpg", 
    gallery: ["/img/work/woodwork/full-casestudy.jpg"],
    route: "/work/boehmer-manufaktur",
    industry: "High-End Woodworking & Interior",
    objectives: "Digital Showroom, UX Strategy & Visual Identity",
    status: "Successfully completed",
    role: "UI/UX & Product Designer",
    techStack: ["Figma", "FigJam", "Adobe Photoshop", "Claude AI"],
    overview: "Redefining bespoke craftsmanship through a high-end digital showroom experience.",
    services: [
      { label: "Creative Direction", value: "Visual Identity & High-End Aesthetics" },
      { label: "Product Design", value: "Immersive Showroom & UX Strategy" },
      { label: "Market Positioning", value: "Brand Value & Premium Pricing Logic" },
      { label: "Design Systems", value: "Component-Based UI & Developer Handoff" },
      { label: "Strategic Growth", value: "Conversion-Driven Lead Generation" }
    ],
  },
  { 
    name: "Voltea", 
    description: "UX Strategy, Visual Identity & Digital Branding", 
    img: "/img/work/voltea/thumbnail.jpg", 
    gallery: ["/img/work/voltea/casestudy.jpg"],
    route: "/work/voltea",
    industry: "Engineering & Renewable Energy",
    objectives: "UX Strategy, Visual Systems & Digital Branding",
    status: "Successfully completed",
    role: "Product Designer & Frontend Engineer",
    techStack: ["Figma", "FigJam", "Adobe Photoshop", "HTML5", "CSS3", "SCSS", "Javascript", "PHP", "In-house CMS", "Visual Studio Code"],
    overview: "Bridging technical excellence with digital trust to drive high-quality leads for the renewable sector.",
    services: [
      { label: "Creative Direction", value: "Visual Identity & Design Systems" },
      { label: "Product Design", value: "User-Centric UI/UX & Prototyping" },
      { label: "Compliance", value: "WCAG & GDPR Compliant" },
      { label: "Engineering", value: "High-Performance Frontend Architecture" },
      { label: "Strategic Growth", value: "Technical SEO & Conversion Logic" }
    ],
  },
  { 
    name: "Firdevs Cosmetic", 
    description: "Digital Product Design & Frontend Engineering", 
    img: "/img/work/firdevs/thumbnail.jpg",
    gallery: ["/img/work/firdevs/full-casestudy.jpg"],
    route: "/work/firdevs-cosmetic",
    industry: "Medical Aesthetics & Skincare",
    objectives: "Digital Transformation & Brand Strategy",
    status: "Successfully completed",
    role: "Product Designer & Frontend Engineer",
    techStack: ["Figma", "Photoshop", "FigJam", "HTML5", "CSS3", "SCSS", "Javascript", "PHP", "In-house CMS", "Visual Studio Code"],
    liveUrl: "https://www.firdevscosmetic.de/",
    overview: "Transforming medical cosmetics into a sophisticated digital brand experience.",
    services: [
      { label: "Creative Direction", value: "Visual Identity & Design Systems" },
      { label: "Product Design", value: "User-Centric UI/UX & Prototyping" },
      { label: "Compliance", value: "WCAG & GDPR Compliant" },
      { label: "Engineering", value: "High-Performance Frontend Development" },
      { label: "Strategic Growth", value: "Technical SEO & Conversion Logic" }
    ],
  },
  // { 
  //   name: "Graphic Design & Marketing", 
  //   description: "Product Campaign, Restaurant Branding, Marketing & Services", 
  //   img: "/img/work/graphic-design/bubbletea-ad.jpg", 
  //   gallery: ["/img/work/graphic-design/bubbletea-ad.jpg", "/img/work/graphic-design/bubbletea-blaubeere-ad.png", "/img/work/graphic-design/bubbletea-erdbeere-ad.png", "/img/work/graphic-design/bubbletea-maracuja-ad.jpg", "/img/work/graphic-design/table-display.png"],
  //   route: "/work/graphic-design",
  //   industry: "Restaurant, Travel Agency, Services",
  //   objectives: "Product Campaign, Branding, Marketing",
  //   status: "Successfully completed",
  //   role: "Lead Designer",
  //   techStack: ["Figma", "Photoshop", "Product Campaign", "Branding", "Marketing", "Services"],
  //   downloadUrl: "/img/work/graphic-design/graphicdesign-portfolio.pdf",
  //   downloadLabel: "Download Design Portfolio (PDF)",
  //   challenge: "Please download my Design Portfolio (PDF) on this page for more information. This section showcases a curated selection of my work in branding, product campaigns, and visual marketing. For a deep dive into the specific goals and constraints of each featured piece, please refer to my comprehensive Design Portfolio PDF available for download on this page.",
  //   strategy: "My approach focuses on creating a cohesive visual language tailored to specific market needs—ranging from high-conversion social media ads to scalable branding frameworks for service providers. Detailed strategic breakdowns are documented in the accompanying Design Portfolio (PDF).",
  //   execution: "Utilizing tools like Adobe Photoshop and Figma, I transform concepts into high-impact marketing assets. This includes expert compositing, color grading, and typography. Technical workflows and additional samples of these executions are highlighted in the downloadable PDF.",
  //   results: "The results include strengthened brand identities and increased engagement through platform-optimized visuals. A full overview of the projects can be found in the downloadable PDF on this page.",
  // },
  { 
    name: "Besa Dienstleistungen", 
    description: "Full-Cycle Engineering (Next.js/TypeScript/TailwindCSS/GSAP/DevOps)", 
    img: "/img/work/besa/thumbnail.jpg",
    gallery: ["/img/work/besa/casestudy.jpg"], 
    route: "/work/besa-dienstleistungen",
    industry: "Logistics & Facility Services",
    objectives: "High-Performance Lead Generation",
    status: "Successfully completed",
    role: "Full-Stack Engineer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Github", "FileZilla (FTP)", "Figma", "Adobe Photoshop", "Visual Studio Code", ],
    liveUrl: "https://www.besa-dienstleistungen.de",
    githubUrl: "https://github.com/FadiProjects/Besa-Dienstleistungen-Website.git",
    overview: "Engineering the Digital Infrastructure for a High-Growth Berlin Logistics Brand.",
    services: [
      { label: "Engineering", value: "Next.js, TypeScript & Tailwind CSS Architecture with GSAP Motion" },
      { label: "Full-Cycle DevOps", value: "FTP Deployment, DNS & SSL Configuration, Technical SEO" },
      { label: "Scalable Design Systems", value: "Utility-First Architecture & Component-Based UI Patterns" },
      { label: "Performance-Driven UX", value: "Conversion-Centric Flow & Frictionless User Journeys" },
    ]
  },
];