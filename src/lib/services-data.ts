export interface service {
  id: number;
  title: string;
  desc: string;
}

export const services: service[] = [
  { id: 1, title: "Strategy & Research", desc: "Defining the digital roadmap for your business success and growth." },
  { id: 2, title: "Design & Layout", desc: "Crafting intuitive and aesthetic UI/UX experiences tailored in Figma." },
  { id: 3, title: "Web Development", desc: "Developing seamless digital experiences powered by the latest web technologies." },
  { id: 4, title: "SEO Optimization", desc: "Boosting your digital visibility and organic reach through modern SEO." },
  { id: 5, title: "Data Protection", desc: "Ensuring privacy-first solutions and full GDPR compliance for your users." },
  { id: 6, title: "Accessibility", desc: "Creating inclusive digital experiences following global WCAG standards." },
];