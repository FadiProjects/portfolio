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
  challenge: string;        
  strategy: string;         
  execution: string;        
  results: string;          
}

export const projects: Project[] = [
  { 
    name: "Firdevs Cosmetic", 
    description: "Web Development & Design", 
    img: "/img/work/firdevs/laptop-website.jpg",
    gallery: ["/img/work/firdevs/ui-design-bundle.png"],
    route: "/work/firdevs-cosmetic",
    industry: "Beauty studio",
    objectives: "Brand Identity & Conversion",
    status: "Successfully completed",
    role: "Lead Developer & Designer",
    techStack: ["Figma", "Branding", "HTML", "SCSS", "Javascript", "PHP", "In-house CMS", "SEO", "GDPR Compliance", "WCAG Compliant"],
    liveUrl: "https://www.firdevscosmetic.de/",
    challenge: "Firdevs Cosmetic, a premium beauty salon located in Hildesheim, faced the challenge of translating its high-end medical skincare services into a digital experience. The existing online presence needed to bridge the gap between professional aesthetic treatments and a user-friendly interface that builds client trust. Key pain points included the lack of a modern visual identity and an inefficient way to showcase exclusive partner brands",
    strategy: "The strategy was built on a User-First and Aesthetics-Led approach designed to mirror the clean and welcoming environment of a medical cosmetic studio. We developed a concept that prioritizes minimalist layouts and a clear information architecture, ensuring that visitors can access detailed treatment information or contact details within seconds. By focusing on professional positioning, the brand was redefined as a leading expert in medical skincare, utilizing a sophisticated color palette and high-quality imagery to communicate efficacy and luxury simultaneously.",
    execution: "During the technical implementation, we focused on building a high-performance custom solution tailored to the specific demands of the beauty industry. This involved a mobile-first development approach, as the majority of skincare clients search for and book services via smartphones. Beyond the responsive design, we integrated performance optimization techniques to ensure rapid load times and seamless navigation. Essential features such as interactive location maps and strategically placed calls-to-action were embedded to streamline the path from initial interest to a confirmed appointment.",
    results: "The final result is a powerful digital platform that has successfully repositioned Firdevs Cosmetic as a premier skincare destination in the region. Since the launch, the studio has seen a significant increase in professional credibility and local search visibility for specialized beauty services. By providing an intuitive and aesthetically pleasing user experience, the website has not only improved client engagement but also serves as a reliable tool for customer retention, effectively reflecting the high standards of the physical studio in the digital space.",
  },
  { 
    name: "Jahnke Architektur", 
    description: "Web Development & Design", 
    img: "/img/work/architecture/laptop-website.jpg", 
    gallery: ["/img/work/architecture/ui-design-bundle.jpg", "/img/work/architecture/ui-design-first.jpg", "/img/work/architecture/ui-design-last.jpg"],
    route: "/work/jahnke-architektur",
    industry: "Beauty studio",
    objectives: "Brand Identity & Conversion",
    status: "Successfully completed",
    role: "Lead Developer & Designer",
    techStack: ["Figma", "Branding", "HTML", "SCSS", "Javascript", "PHP", "In-house CMS", "SEO", "GDPR Compliance", "WCAG Compliant"],
    liveUrl: "https://www.jahnke-arch.de/",
    challenge: "Jahnke Architektur, a firm known for its precise and modern design language, needed a digital portfolio that reflects their architectural philosophy. The main challenge was to translate physical space and structural depth into a two-dimensional digital experience, while providing an intuitive way to showcase a diverse range of large-scale projects.",
    strategy: "The strategy was based on a 'Minimalist & Grid-Focused' approach, mirroring the clean lines and structured environment of an architecture studio. I developed a concept that prioritizes whitespace and typographic balance, ensuring that the project imagery remains the focal point. By using a sophisticated, muted color palette, the brand was positioned as a premium expert in contemporary architectural design.",
    execution: "The technical implementation focused on a high-performance architecture that mirrors the firm's precision. I engineered a fluid, grid-based layout designed to handle high-resolution architectural photography with zero compromise on loading speed. By prioritizing a clean, minimalist code structure and smooth transitions, the platform offers an effortless browsing experience. Every interactive element was carefully placed to ensure a seamless flow between project overviews and detailed technical insights, providing a digital environment as structured as the buildings themselves.",
    results: "The final result is a powerful digital gallery that has successfully repositioned Jahnke Architektur in the high-end market. Since the launch, the firm has seen a significant increase in professional credibility and digital visibility. The intuitive, aesthetics-driven user experience effectively reflects the firm’s high standards, serving as a prestigious tool for both client acquisition and project presentation.",
  },
  { 
    name: "Böhmer Manufaktur", 
    description: "UI/UX Design & Branding", 
    img: "/img/work/woodwork/laptop-website.jpg", 
    gallery: ["/img/work/woodwork/ui-design-bundle.jpg", "/img/work/woodwork/ui-design-first.jpg", "/img/work/woodwork/ui-design-last.jpg"],
    route: "/work/boehmer-manufaktur",
    industry: "Luxury Craftsmanship",
    objectives: "Digital Showcase & Brand Storytelling",
    status: "Successfully completed",
    role: "Lead Designer",
    techStack: ["Figma", "Branding", "UI Design", "UX Design"],
    challenge: "Böhmer Manufaktur stands for exceptional traditional craftsmanship. The challenge was to translate the haptic, high-quality nature of their physical wood products into a digital space that feels just as premium, avoiding a generic corporate look while maintaining a sophisticated modern edge.",
    strategy: "By combining generous whitespace with large-scale, high-contrast photography, the design directs all attention to the texture and detail of the wood. The goal was to create a digital showroom that breathes elegance and reflects the meticulous attention to detail found in the factory.",
    execution: "The design process involved crafting a bespoke visual language in Figma, centered around a refined typographic system and a muted, earthy color palette. I developed a high-end UI framework that uses subtle micro-interactions and sophisticated layouts to mirror the precision of the manufacturing process, ensuring a seamless and immersive brand story across all devices.",
    results: "The project resulted in a prestigious digital identity that significantly elevated the brand’s market positioning. By creating an emotionally resonant user experience, the website now serves as a powerful showcase for their portfolio, successfully bridging the gap between traditional handiwork and a modern, luxury-oriented audience.",
  },
  { 
    name: "Graphic Design & Marketing", 
    description: "Product Campaign, Restaurant Branding, Marketing & Services", 
    img: "/img/work/graphic-design/bubbletea-ad.jpg", 
    gallery: ["/img/work/graphic-design/bubbletea-ad.jpg", "/img/work/graphic-design/bubbletea-blaubeere-ad.png", "/img/work/graphic-design/bubbletea-erdbeere-ad.png", "/img/work/graphic-design/bubbletea-maracuja-ad.jpg", "/img/work/graphic-design/table-display.png", "/img/work/graphic-design/buggytour-arraialdocabo.png", "/img/work/graphic-design/halteverbot.png"],
    route: "/work/graphic-design",
    industry: "Restaurant, Travel Agency, Services",
    objectives: "Product Campaign, Branding, Marketing",
    status: "Successfully completed",
    role: "Lead Designer",
    techStack: ["Figma", "Photoshop", "Product Campaign", "Branding", "Marketing", "Services"],
    downloadUrl: "/img/work/graphic-design/graphicdesign-portfolio.pdf",
    downloadLabel: "Download Design Portfolio (PDF)",
    challenge: "Please download my Design Portfolio (PDF) on this page for more information. This section showcases a curated selection of my work in branding, product campaigns, and visual marketing. For a deep dive into the specific goals and constraints of each featured piece, please refer to my comprehensive Design Portfolio PDF available for download on this page.",
    strategy: "My approach focuses on creating a cohesive visual language tailored to specific market needs—ranging from high-conversion social media ads to scalable branding frameworks for service providers. Detailed strategic breakdowns are documented in the accompanying Design Portfolio (PDF).",
    execution: "Utilizing tools like Adobe Photoshop and Figma, I transform concepts into high-impact marketing assets. This includes expert compositing, color grading, and typography. Technical workflows and additional samples of these executions are highlighted in the downloadable PDF.",
    results: "The results include strengthened brand identities and increased engagement through platform-optimized visuals. A full overview of the projects can be found in the downloadable PDF on this page.",
  },
  { 
    name: "Besa Dienstleistungen", 
    description: "Web Development, Design & Branding", 
    img: "/img/work/besa/laptop-website.jpg",
    gallery: ["/img/work/besa/ui-design-bundle.jpg", "/img/work/besa/ui-design-first.jpg", "/img/work/besa/ui-design-last.jpg", "/img/work/besa/branding.jpg"
    ], 
    route: "/work/besa-dienstleistungen",
    industry: "Logistics & Facility Services",
    objectives: "Lead Generation",
    status: "Successfully completed",
    role: "Lead Developer & Designer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Motion Primitives", "Figma", "SEO", "GDPR Compliance", "WCAG Compliant"],
    liveUrl: "https://www.besa-dienstleistungen.de",
    githubUrl: "https://github.com/FadiProjects/Besa-Dienstleistungen-Website.git",
    challenge: "The Berlin moving and clearance market is intensely competitive. The client required a high-conversion digital presence that could effectively capture both private and commercial leads while standing out with a bold, trustworthy identity in a crowded local field.",
    strategy: "I developed a 'Mobile-First' One-Pager strategy focused on instant trust and accessibility. We implemented a high-contrast Red & White visual system to signal reliability and urgency, paired with a conversion-centric UI that prioritizes immediate contact via WhatsApp and direct call-to-action buttons.",
    execution: "Leveraging Next.js and Tailwind CSS, I engineered a high-performance application that achieves top-tier load speeds. Using Framer Motion and Motion Primitives, I integrated smooth scroll-triggered interactions that provide a premium user experience without compromising technical SEO or accessibility.",
    results: "The project resulted in a high-performance lead generation engine. By combining sophisticated motion design with localized SEO and strict GDPR compliance, the platform now effectively ranks for key Berlin search terms and provides a frictionless inquiry process for all target groups.",
  },
  { 
    name: "Voltea", 
    description: "Web Development, Design & Branding", 
    img: "/img/work/voltea/laptop-website.jpg", 
    gallery: ["/img/work/voltea/ui-design-bundle.jpg", "/img/work/voltea/ui-design-first.jpg", "/img/work/voltea/ui-design-last.jpg"],
    route: "/work/voltea",
    industry: "Renewable Energy",
    objectives: "Web Development, Design & Branding",
    status: "Successfully completed",
    role: "Lead Developer & Designer",
    techStack: ["Figma", "Branding", "HTML", "SCSS", "Javascript", "PHP", "In-house CMS", "SEO", "GDPR Compliance", "WCAG Compliant"],
    challenge: "Establishing a digital brand for a technical HVAC company that needs to communicate both engineering precision and customer-oriented comfort.",
    strategy: "I implemented a 'Trust-Centric' design strategy. By using a clear visual hierarchy and a professional color palette, the focus was shifted to reliability, expert maintenance, and seamless service booking.",
    execution: "Translating complex technical services into an intuitive UI in Figma, followed by developing a fast, SEO-optimized platform with a focus on lead conversion.",
    results: "A scalable digital presence that successfully transformed the company's brand image, resulting in a measurable increase in high-quality service inquiries.",
  },
  { 
    name: "Bela Design Bau", 
    description: "Web Development & Design", 
    img: "/img/work/bdb/laptop-website.jpg", 
    gallery: ["/img/work/bdb/ui-design-bundle.jpg", "/img/work/bdb/ui-design-first.jpg", "/img/work/bdb/ui-design-last.jpg"],
    route: "/work/bela-design-bau",
    industry: "Beauty studio",
    objectives: "Brand Identity & Conversion",
    status: "Successfully completed",
    role: "Lead Developer & Designer",
    techStack: ["Figma", "Branding", "HTML", "SCSS", "Javascript", "PHP", "In-house CMS", "SEO", "GDPR Compliance", "WCAG Compliant"],
    liveUrl: "https://www.bdb-pflasterei.at/",
    challenge: "Bela Design Bau, a specialist for premium natural stone paving in Austria, needed a digital presence that reflects the high quality of their physical craftsmanship. The challenge was to showcase complex construction projects and a wide variety of stone materials in a way that feels both rugged and high-end, while simplifying the inquiry process for potential clients.",
    strategy: "The strategy followed a 'Craftsmanship-First' approach, designed to mirror the durability and precision of natural stone work. I developed a concept that prioritizes high-impact visual storytelling through large-scale project galleries and a clean, grounded information architecture. By focusing on a professional and trustworthy positioning, the brand was redefined as a premium partner for both residential and commercial landscaping.",
    execution: "Technically, I implemented a high-performance solution tailored to the visual demands of the construction industry. I utilized a mobile-first approach, as many clients browse project portfolios on mobile devices. Beyond the responsive layout, I integrated advanced image optimization to ensure that high-resolution galleries load instantly.",
    results: "The final result is a robust digital platform that has successfully repositioned Bela Design Bau as a leading expert in Austrian stonemasonry. Since the launch, the company has seen a significant boost in professional credibility and local search visibility for specialized paving services.",
  },
];