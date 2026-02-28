'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Magnetic } from '@/components/core/magnetic';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Magnetic intensity={0.3} range={100} actionArea="global">
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-100 backdrop-blur-md transition-colors hover:border-zinc-500 hover:bg-zinc-800 cursor-pointer"
              >
                <ArrowUp className="h-6 w-6" />
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}