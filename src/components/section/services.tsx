'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services, service } from '@/lib/services-data'; 

export default function ServicesSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContentRef = useRef<HTMLDivElement | null>(null);
  const [xRange, setXRange] = useState(["0%", "-50%"]);

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (scrollContentRef.current) {
        const contentWidth = scrollContentRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const percentage = ((contentWidth - windowWidth) / contentWidth) * 100;
        setXRange(["0%", `-${Math.max(0, percentage)}%`]);
      }
    };

    calculateScrollDistance();
    window.addEventListener('resize', calculateScrollDistance);
    return () => window.removeEventListener('resize', calculateScrollDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <section id="services" ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div 
          ref={scrollContentRef}
          style={{ x }} 
          className="flex gap-12 px-12 md:px-24 items-center"
        >
          <div className="flex flex-col justify-center min-w-[350px] md:min-w-[500px] pr-20">
            <h3 className="text-6xl md:text-8xl font-medium tracking-tighter text-white">
              My <br /> Services
            </h3>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/30" />
              <p className="text-white/40 text-xl font-light tracking-wide">Scroll to explore</p>
            </div>
          </div>

          {services.map((item: service) => (
            <div
              key={item.id}
              className="group relative flex h-[450px] w-[350px] md:h-[550px] md:w-[550px] flex-col justify-between border-l border-white/10 bg-transparent p-10 transition-all hover:bg-white/[0.02]"
            >
              <span className="text-xl font-mono text-white/20">0{item.id}</span>
              
              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-medium text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/40 transition-colors" />
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}