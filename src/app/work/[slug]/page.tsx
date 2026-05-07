'use client';

import React, { use, useState, useEffect, useRef } from 'react';
import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project = projects.find((p) => p.route.split('/').pop() === slug);

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState<string | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!project) notFound();

  useEffect(() => {
    if (viewerOpen) {
      document.body.style.overflow = "hidden";
      
      const timer = setTimeout(() => {
        scrollContainerRef.current?.focus();
      }, 50);

      const handleWheel = (e: WheelEvent) => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop += e.deltaY;
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        clearTimeout(timer);
        window.removeEventListener("wheel", handleWheel);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [viewerOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewerOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
  <main className="min-h-screen pt-48 md:pt-64 pb-32 text-zinc-100 overflow-x-hidden">
    <div className="container mx-auto px-6">
      
      {/* --- HEADER BEREICH --- */}
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
          {[
            { label: "Role", val: project.role },
            { label: "Industry", val: project.industry },
            { label: "Objectives", val: project.objectives },
            { label: "Status", val: project.status },
          ].map((item, i) => item.val && (
            <div key={i} className="flex flex-col items-center text-center">
              <p className="text-zinc-500 text-[14px] uppercase tracking-widest mb-2 font-mono italic">{item.label}</p>
              <p className="text-sm md:text-lg font-light">{item.val}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-screen-xl mx-auto">
        
        {/* --- HERO IMAGE --- */}
        {project.img && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video w-full overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 mb-16 shadow-2xl"
          >
            <Image src={project.img} alt={project.name} fill className="object-cover" priority />
          </motion.div>
        )}

        {/* --- HAUPT CONTENT GRID --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-16 xl:gap-24">
          
          <div className="xl:col-span-8 order-2 xl:order-1">
            
            {/* 1. DYNAMISCHE PROJECT OVERVIEW & SERVICES */}
            {project.overview && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pb-12 border-b border-zinc-900 min-h-[420px] flex flex-col justify-between" 
              >
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-10 italic">
                    Project Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-zinc-100 italic">
                        {project.overview}
                      </h3>
                      <p className="text-lg text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col space-y-10 pt-2">
                      {project.services?.map((service, i) => (
                        <div key={i} className="flex flex-col space-y-2 border-l border-zinc-800 pl-6">
                          <span className="text-[14px] font-mono uppercase tracking-widest text-zinc-500 italic">
                            {service.label}
                          </span>
                          <span className="text-sm md:text-lg font-light text-zinc-200">
                            {service.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* 2. CASE STUDY CONTENT */}
            <div className="space-y-16 pt-12"> 
              {project.challenge && (
                <motion.section>
                  <h2 className="text-2xl md:text-3xl font-medium mb-6 italic">The Challenge</h2>
                  <p className="text-lg md:text-xl text-zinc-400 whitespace-pre-line leading-relaxed">{project.challenge}</p>
                </motion.section>
              )}
              {project.strategy && (
                <motion.section>
                  <h2 className="text-2xl md:text-3xl font-medium mb-6 italic">Strategy & Concept</h2>
                  <p className="text-lg md:text-xl text-zinc-400 whitespace-pre-line leading-relaxed">{project.strategy}</p>
                </motion.section>
              )}
              {project.execution && (
                <motion.section>
                  <h2 className="text-2xl md:text-3xl font-medium mb-6 italic">Execution</h2>
                  <p className="text-lg md:text-xl text-zinc-400 whitespace-pre-line leading-relaxed">{project.execution}</p>
                </motion.section>
              )}
              {project.results && (
                <motion.section>
                  <h2 className="text-2xl md:text-3xl font-medium mb-6 italic">Results & Impact</h2>
                  <p className="text-lg md:text-xl text-zinc-400 whitespace-pre-line leading-relaxed">{project.results}</p>
                </motion.section>
              )}
            </div>
          </div>

          {/* --- SIDEBAR (Die Box, die die Höhe vorgibt) --- */}
          <div className="xl:col-span-4 order-1 xl:order-2">
            <motion.div className="bg-zinc-900/40 p-8 md:p-10 rounded-[2rem] border border-zinc-800/50 backdrop-blur-xl xl:sticky xl:top-40 w-full overflow-hidden shadow-2xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 italic">Tech Stack</h3>
              <div className="flex flex-wrap gap-2.5 mb-12">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 bg-zinc-800/50 text-zinc-300 text-[10px] rounded-full border border-zinc-700/50 uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-12"> {/* 'gap-3' sorgt für sauberen Abstand zwischen den Buttons */}
                {/* Live Website Button - Invertiert beim Hover */}
                {project.liveUrl && (
                  <Button asChild className="w-full h-14 rounded-full bg-zinc-100 text-black hover:bg-zinc-200 transition-colors border-none shadow-none">
                    <a href={project.liveUrl} target="_blank" className="flex items-center justify-center gap-2.5 font-medium">
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
                {/* GitHub Button - Wird hellgrau/weiß beim Hover */}
                {project.githubUrl && (
                  <Button asChild className="w-full h-14 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-100 hover:text-black transition-colors border-none shadow-none">
                    <a href={project.githubUrl} target="_blank" className="flex items-center justify-center gap-2.5 font-medium">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- GALERIE --- */}
        {project.gallery && (
          <section className="mt-24 px-4">
            <div className="flex flex-col items-center gap-16">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => {
                    setViewerImage(image);
                    setViewerOpen(true);
                  }}
                  className="cursor-zoom-in w-full max-w-[1620px] rounded-xl"
                  alt={`Gallery ${index}`}
                />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>

    {/* --- FULLSCREEN VIEWER --- */}
    <AnimatePresence>
      {viewerOpen && viewerImage && (
        <motion.div 
          ref={scrollContainerRef}
          tabIndex={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/95 overflow-y-auto outline-none"
        >
          <button
            onClick={() => setViewerOpen(false)}
            className="fixed top-6 right-6 z- text-white text-2xl bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-700 transition"
          >
            ✕
          </button>
          <div 
            className="w-full min-h-screen flex justify-center py-10 cursor-default" 
            onClick={() => setViewerOpen(false)}
          >
            <img
              src={viewerImage}
              className="w-full h-auto max-w-[1920px] object-contain"
              onClick={(e) => e.stopPropagation()} 
              alt="Fullscreen"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </main>
);


}
