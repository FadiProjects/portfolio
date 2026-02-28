'use client'
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
      className="relative mt-[95px] flex h-[calc(100vh-95px)] w-full flex-col items-center justify-center text-center px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            
            <div className="text-5xl tracking-tight md:text-7xl max-w-xl md:max-w-2xl lg:text-8xl lg:max-w-4xl">
                <TextEffect as='h1' preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3} className="text-5xl tracking-tight md:text-7xl lg:text-8xl">
                    Web Developer & Designer with passion
                </TextEffect>
            </div>
            
            <div className="text-[clamp(.7rem,0.9167rem+0.3704vw,1.375rem)] leading-relaxed max-w-4xl">
                <TextEffect per='word' preset='blur' speedReveal={1.9} speedSegment={0.5} trigger={true}>
                    I'm Fadi Moussa, a Web Developer & Designer crafting high-performance digital experiences. Bridging intuitive design and clean code to build a lasting presence.
                </TextEffect>
            </div>

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
                <Button size="lg" asChild variant="default" className="text-lg md:text-xl inline-flex items-center gap-1 group rounded-full px-8 py-6">
                    <Link onClick={handleScroll} href="/#projects" aria-label="View last successful projects of Web Developer Fadi Moussa" title="View last successful projects of Web Developer Fadi Moussa">
                        View last successful projects 
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </Button>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}