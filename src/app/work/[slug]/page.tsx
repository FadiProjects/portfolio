'use client';

import React, { use } from 'react';
import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project = projects.find((p) => p.route.split('/').pop() === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-48 md:pt-64 pb-32 text-zinc-100 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header area */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em] mb-6 block italic">
            Success story of
          </span>
          <h1 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] uppercase mb-12 italic">
            {project.name}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-zinc-900 mt-12">
            <div className="flex flex-col items-center text-center">
              <p className="text-zinc-500 text-[14px] uppercase tracking-widest mb-2 font-mono italic">Role</p>
              <p className="text-sm md:text-lg font-light">{project.role}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-zinc-500 text-[14px] uppercase tracking-widest mb-2 font-mono italic">Industry</p>
              <p className="text-sm md:text-lg font-light">{project.industry}</p>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <p className="text-zinc-500 text-[14px] uppercase tracking-widest mb-2 font-mono italic">Objectives</p>
              <p className="text-sm md:text-lg font-light">{project.objectives}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-zinc-500 text-[14px] uppercase tracking-widest mb-2 font-mono italic">Status</p>
              <p className="text-sm md:text-lg font-light">{project.status}</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-screen-xl mx-auto">
          
          {/* Hero image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video w-full overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 mb-20 shadow-2xl"
          >
            <Image src={project.img} alt={project.name} fill className="object-cover" priority />
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-16 xl:gap-24">
            
            {/* Left side: Main Content with 4 Pillars */}
            <div className="xl:col-span-8 space-y-20 order-2 xl:order-1">
              
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight italic text-zinc-100">The Challenge</h2>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed whitespace-pre-line">
                  {project.challenge}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight italic text-zinc-100">Strategy & Concept</h2>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed whitespace-pre-line">
                  {project.strategy}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight italic text-zinc-100">Execution & Technical Implementation</h2>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed whitespace-pre-line">
                  {project.execution}
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight italic text-zinc-100">Results & Impact</h2>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed whitespace-pre-line">
                  {project.results}
                </p>
              </motion.section>
            </div>

            {/* Right side: Sidebar */}
            <div className="xl:col-span-4 order-1 xl:order-2">
              <motion.div 
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-zinc-900/40 p-8 md:p-10 rounded-[2rem] border border-zinc-800/50 backdrop-blur-xl xl:sticky xl:top-40 w-full overflow-hidden shadow-2xl"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 italic">Project Overview</h3>
                
                <div className="flex flex-wrap gap-2.5 mb-12">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 bg-zinc-800/50 text-zinc-300 text-[10px] rounded-full border border-zinc-700/50 uppercase tracking-wider whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {project.liveUrl && (
                    <Button asChild className="w-full h-14 rounded-full bg-zinc-100 text-black hover:bg-white flex gap-3 font-medium transition-all group cursor-pointer">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Visit Website" aria-label="Visit Website">
                        Visit Website <Globe className="w-4 h-4 transition-transform group-hover:rotate-12" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full h-14 rounded-full border-zinc-800 text-zinc-100 hover:bg-zinc-900 flex gap-3 font-medium transition-all group cursor-pointer">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Visit Code on Github" aria-label="Visit Code on Github">
                        View Code <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery Showcase */}
          {project.gallery && project.gallery.length > 0 && (
          <section className="mt-32">
            <motion.h2 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-medium mb-12 tracking-tight italic"
            >
              Visual Showcase
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-[2rem] bg-zinc-900/50 border border-zinc-800/50 shadow-xl p-4 md:p-8 flex items-center justify-center 
                    ${index === project.gallery!.length - 1 && project.gallery!.length % 2 !== 0 
                      ? 'md:col-span-2 min-h-[400px] md:min-h-[600px]' 
                      : 'min-h-[400px] md:min-h-[500px]' 
                    }`}
                >
                  <div className="relative w-full h-full min-h-[inherit] flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`${project.name} Detail ${index + 1}`}
                      fill
                      className="object-contain transition-all duration-700 hover:scale-[1.02]"
                      sizes="(max-width: 1280px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        </div>
      </div>
    </main>
  );
}