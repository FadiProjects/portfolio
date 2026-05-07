export interface service {
  id: number;
  title: string;
  desc: string;
}

export const services: service[] = [
  { id: 1, title: "UX Strategy & Research", desc: "Transforming business goals into user-centric roadmaps through deep research and strategic thinking." },
  { id: 2, title: "UI/UX Design", desc: "Designing high-fidelity, scalable interfaces in Figma that balance brand identity with flawless usability." },
  { id: 3, title: "Design Systems", desc: "Developing consistent, reusable component libraries that bridge the gap between design and development." },
  { id: 4, title: "Frontend Engineering", desc: "Building performant, accessible web applications using modern tech stacks like React, Next.js, and Tailwind." },
  { id: 5, title: "SEO & Performance", desc: "Optimizing for speed and visibility to ensure your product not only looks good but ranks and converts." },
  { id: 6, title: "Accessibility & GDPR Compliance", desc: "Creating inclusive, WCAG-compliant experiences with a focus on privacy-first solutions and full legal compliance." },
];