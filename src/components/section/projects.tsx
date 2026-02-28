"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects-data";
import { SubHeading } from "@/components/ui/sub-heading";
import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="container mx-auto px-4 py-24 min-h-screen overflow-x-clip">
      <SubHeading as="h2" align="center">Latest success stories</SubHeading>

      <div className="flex flex-col gap-16 md:gap-24 mt-20">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 p-2"
          >
            {row.map((project, idx) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={idx} 
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const initialRotation = index === 0 ? -45 : 45;

  return (
    <motion.div
      initial={{ 
        y: 250,
        rotate: initialRotation, 
        opacity: 0 
      }}
      whileInView={{ 
        y: 0, 
        rotate: 0, 
        opacity: 1 
      }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ 
        duration: 1.1, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1 
      }}
      className="group"
    >
      <Link href={project.route} className="block space-y-6">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
          <Image
            src={project.img}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
        
        <div className="space-y-2 px-1">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-lg font-medium">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}