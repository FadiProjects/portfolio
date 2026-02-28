'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Magnetic } from '@/components/core/magnetic';

export default function NotFound() {
  const springOptions = { bounce: 0.1 };

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center px-4">
      <div className="absolute inset-0 z-0 opacity-20 [background-size:40px_40px]" />
      
      <div className="container relative z-10 flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-white/50">
            Error 404
          </span>
          <h1 className="mt-4 text-6xl font-medium tracking-tight text-white md:text-8xl">
            Page not found
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[clamp(.7rem,0.9167rem+0.3704vw,1.375rem)] leading-relaxed text-white/70">
            Oops! It looks like this page has vanished into the digital void. 
            Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea='global'
            range={200}
          >
            <Button 
                size="lg" 
                asChild 
                variant="default" 
                className="group rounded-full px-8 py-6 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center gap-2"
            >
              <Link title="Back to home" aria-label="Back to home" href="/">
                <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1"/>
                Back to home
              </Link>
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </main>
  );
}