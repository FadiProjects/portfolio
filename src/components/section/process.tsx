'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { process_steps, step } from '@/lib/process-data'; 

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-black py-24 md:py-44 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-start relative">
          
          <div className="lg:sticky lg:top-44 h-fit pb-4 md:pb-12">
            <span className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">
              The Workflow
            </span>
            <h2 className="text-5xl md:text-7xl font-medium text-zinc-100 tracking-tighter leading-[0.9]">
              Steps to your <br /> 
              <span className="text-zinc-500">success story.</span>
            </h2>
          </div>

          <div className="space-y-24 md:space-y-64 pb-12">
            {process_steps.map((step, index) => (
              <StepItem 
                key={step.id} 
                step={step} 
                isLast={index === process_steps.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, isLast }: { step: any; isLast: boolean }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (isInView) {
      setActive(true);
      return;
    }

    if (isLast) {
      const handleScroll = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (isAtBottom) {
          setActive(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isInView, isLast]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, filter: "blur(8px)", y: 20 }}
      animate={active ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0.2, filter: "blur(8px)", y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col gap-6 pl-8 md:pl-0 ${isLast ? 'pb-0' : ''}`}
    >
      <span className="text-6xl md:text-7xl font-medium text-zinc-700/60 font-mono leading-none">
        {step.id}
      </span>
      <h3 className="text-3xl md:text-5xl font-medium text-zinc-100 tracking-tight">
        {step.title}
      </h3>
      <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
        {step.desc}
      </p>
      
      <div className="absolute left-0 md:-left-12 top-0 h-full w-[1px] bg-zinc-800 overflow-hidden">
        <motion.div 
          initial={{ y: "-100%" }}
          animate={active ? { y: "100%" } : { y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full w-full bg-zinc-200"
        />
      </div>
    </motion.div>
  );
}