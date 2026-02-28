export interface step {
  id: string;
  title: string;
  desc: string;
}

export const process_steps: step[] = [
  { 
    id: "01", 
    title: "Contact & Discovery", 
    desc: "I start with a deep dive into your vision. Whether it's a new brand or a complex web app, I define the goals to ensure a perfect start." 
  },
  { 
    id: "02", 
    title: "Plan & Concept", 
    desc: "Strategy meets design. I create designs in Figma and define the technical architecture  using modern web standards to ensure a scalable foundation." 
  },
  { 
    id: "03", 
    title: "Development & Launch", 
    desc: "Bringing designs to life with clean, high-performance code. I focus on accessibility, performance, and search engine optimization for a flawless digital launch."
  },
];