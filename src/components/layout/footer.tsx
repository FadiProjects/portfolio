'use client'
import React from 'react';
import Link from 'next/link';
import { SubHeading } from '@/components/ui/sub-heading';
import { Magnetic } from '@/components/core/magnetic';
import { ContactDialog } from "@/components/ui/contact-dialog";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {

    const springOptions = { bounce: 0.1 };

  return (
    <footer 
      className="relative h-[400px]" 
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[400px] bg-zinc-700 -z-10 flex flex-col items-center justify-center border-t border-white/5 px-4">
        
        <div className="container mx-auto text-center">
            <SubHeading as="p" className="text-5xl md:text-8xl lg:text-8xl font-medium text-white" align="center">
                Let's talk
            </SubHeading>
            
            <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                    duration: 0.8, 
                    delay: 1.5,
                    ease: "easeOut" 
                    }}
                >
                <Magnetic
                    intensity={0.2}
                    springOptions={springOptions}
                    actionArea='global'
                    range={270}
                >
                    <ContactDialog>
                        <Button size="lg" asChild variant="default" className="text-lg md:text-xl inline-flex items-center gap-1 group rounded-full px-8 py-6 my-4">
                            <Link href="#projects" aria-label="View last successful projects of Web Developer Fadi Moussa" title="View last successful projects of Web Developer Fadi Moussa">
                                Contact me
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </ContactDialog>
                </Magnetic>
            </motion.div>
          
            <div className="mt-11 flex flex-col lg:flex-row justify-between items-center w-full gap-6 border-t border-white/5 pt-8 text-base md:text-lg lg:text-xl font-medium text-white text-center lg:text-left px-8">
                <p>© {new Date().getFullYear()} fadi.moussa | All Rights reserved</p>
                
                <div className="flex gap-6 flex-wrap justify-center lg:justify-end">
                    <Link 
                        href="/imprint" 
                        className="hover:text-white transition-colors" 
                        title="Legal Notice"
                        aria-label="Legal Notice"
                    >
                        Imprint
                    </Link>
                    <Link 
                        href="/privacy" 
                        className="hover:text-white transition-colors" 
                        title="Privacy Policy"
                        aria-label="Privacy Policy"
                    >
                        Privacy
                    </Link>
                    <Link 
                        href="https://github.com/FadiProjects" 
                        className="hover:text-white transition-colors" 
                        target="_blank" 
                        title="Visit my Github Profile" 
                        aria-label="Visit my Github Profile"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}