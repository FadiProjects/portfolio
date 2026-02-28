'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Magnetic } from '@/components/core/magnetic';
import { ContactDialog } from "@/components/ui/contact-dialog";

export default function CTASection() {
  return (
    <section className="relative bg-black py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-10"
        >
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-[0.4em]">
            READY TO START?
          </span>

          <div className="max-w-5xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-zinc-100 tracking-tighter md:leading-18 italic">
              Let’s build your next <br />
              <span className="text-zinc-500 italic">digital success story.</span>
            </h2>
          </div>

          <div className="mt-6">
            <Magnetic intensity={0.15} range={250} actionArea="global">
              <ContactDialog>
                {/* Der Button ist jetzt das direkte Kind vom Dialog und wird als Trigger erkannt */}
                <Button 
                  size="lg" 
                  className="h-20 px-12 md:h-24 md:px-16 rounded-full bg-zinc-100 text-black hover:bg-white transition-all duration-500 group relative overflow-hidden cursor-pointer"
                >
                  <span className="text-xl md:text-2xl font-medium flex items-center gap-3 relative z-10">
                    Get in touch
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Button>
              </ContactDialog>
            </Magnetic>
          </div>

          <motion.div 
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            
            <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide">
              Available for new projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}