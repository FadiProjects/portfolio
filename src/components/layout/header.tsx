'use client'
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button"; 
import { TextEffect } from '@/components/core/text-effect';
import { Magnetic } from '@/components/core/magnetic';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

export default function Header() {

  const lenis = useLenis();

  const springOptions = { bounce: 0.1 };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = "/#projects";
    const targetId = "projects";
    const element = document.getElementById(targetId);
    
    if (element && lenis) {
      e.preventDefault();
      lenis.scrollTo(element, { 
        offset: -120,
        duration: 1.5 
      });
    }
  };

  return (
    <header 
      id="header" 
      className="relative pt-[95px] flex h-[calc(100vh-95px)] w-full flex-col items-center justify-center text-center px-4"
    >
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#09090B]">
      <div className="absolute top-0 left-0 h-full w-full 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
        bg-[size:6rem_4rem] 
        [mask-image:radial-gradient(circle_at_0%_0%,#000_10%,transparent_70%)]">
      </div>
    </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            
            <div className="text-5xl tracking-tight md:text-7xl max-w-xl md:max-w-2xl lg:text-8xl lg:max-w-4xl">
                <TextEffect as='h1' preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} className="text-5xl tracking-tight xs:text-6xl md:text-7xl lg:text-8xl">
                    Product Designer & Design Engineer
                </TextEffect>
            </div>
            
            <div className="text-[clamp(.7rem,0.9167rem+0.3704vw,1.375rem)] leading-relaxed max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <TextEffect per='word' preset='blur' speedReveal={1.9} speedSegment={0.5} trigger={true}>
                    Fadi Moussa - Strategic UX and brand identity, brought to life through purposeful design and scalable engineering.
                </TextEffect>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 mt-10 px-4"
            >
              <Magnetic intensity={0.2} springOptions={springOptions} actionArea='global' range={100}>
                <Button size="lg" asChild variant="default" className="text-lg md:text-xl inline-flex items-center gap-1 group rounded-full px-8 py-6">
                  <Link onClick={handleScroll} href="/#projects" aria-label="View latest work" title="View latest work">
                    View latest work
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>

              <div className="flex items-center gap-4">
                  <Button size="icon-lg" asChild variant="outline" className="rounded-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20">
                    <a href="https://github.com/FadiProjects" target="_blank" rel="noopener noreferrer" aria-label="Visit my Github Profile" title="Visit my Github Profile">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>

                  <Button size="icon-lg" asChild variant="outline" className="rounded-full bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20">
                    <a href="https://www.linkedin.com/in/fadi-moussa-web/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn Profile" title="Visit my LinkedIn Profile">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}