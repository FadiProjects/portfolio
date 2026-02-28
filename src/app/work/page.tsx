'use client';

import { motion } from "framer-motion";
import { projects } from "@/lib/projects-data";
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <main className="min-h-screen pt-56 pb-24">
      <div className="container mx-auto px-4 overflow-x-clip">
        
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-medium text-zinc-100 tracking-tighter leading-[0.9]">
            Success stories.
          </h1>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
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
      </div>
    </main>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const initialRotation = index === 0 ? -45 : 45;

  return (
    <motion.div
      initial={{ 
        y: 250,
        rotate: initialRotation, 
        opacity: 0,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        y: 0, 
        rotate: 0, 
        opacity: 1,
        filter: "blur(0px)" 
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
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl border border-zinc-800/50">
          <Image
            src={project.img}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
        
        <div className="space-y-2 px-1">
          <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 tracking-tight transition-colors group-hover:text-zinc-400">
            {project.name}
          </h3>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}