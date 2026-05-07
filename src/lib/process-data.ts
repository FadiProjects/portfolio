export interface step {
  id: string;
  title: string;
  desc: string;
}

export const process_steps: step[] = [
  { 
    id: "01", 
    title: "Strategy & UX Research", 
    desc: "Every project begins with a deep dive into user needs and business goals. I define the strategic roadmap and information architecture to ensure a solid UX foundation." 
  },
  { 
    id: "02", 
    title: "Interface Design & Systems", 
    desc: "I craft high-fidelity UI in Figma, building scalable design systems rather than just static screens. This ensures visual consistency and a smooth transition to development." 
  },
  { 
    id: "03", 
    title: "Engineering & Deployment", 
    desc: "I translate designs into performant, accessible code using modern stacks. My focus lies on clean architecture, performance optimization, and a seamless digital launch."
  },
];