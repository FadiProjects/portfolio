'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tags = [
  { text: "UI Design", className: "bottom-[15%] left-[25%]" },
  { text: "Frontend Development", className: "bottom-[30%] right-[15%]" }
];

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("siteLoaded");
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    // Timer bis der Exit-Split getriggert wird
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("siteLoaded", "true");
    }, 5800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader-main-container"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* OBERE HÄLFTE */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-10"
            exit={{ 
              y: "-100%", 
              transition: { duration: 1.1, ease: [0.8, 0, 0.2, 1], delay: 0.1 } 
            }}
          />

          {/* UNTERE HÄLFTE */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-10"
            exit={{ 
              y: "100%", 
              transition: { duration: 1.1, ease: [0.8, 0, 0.2, 1], delay: 0.1 } 
            }}
          />

          {/* DIE LINIE - Jetzt mit Exit-Animation */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.2 }}
            exit={{ 
              opacity: 0, 
              scaleX: 1.1, // Dehnt sich beim Verschwinden leicht aus
              transition: { duration: 0.4, ease: "easeOut" } 
            }}
            transition={{ delay: 4.8, duration: 0.8, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-white z-30 origin-center"
          />

          {/* INHALT (Tags & Titel) */}
          <motion.div 
            className="relative z-20 w-full h-full flex flex-col items-center justify-center"
            exit={{ 
                opacity: 0, 
                scale: 0.95,
                transition: { duration: 0.5, ease: "easeIn" } 
            }}
          >
            {/* Tags */}
            <div className="absolute inset-0">
              {tags.map((tag, i) => (
                <div key={i} className={`absolute overflow-hidden ${tag.className}`}>
                  <motion.p
                    initial={{ y: "100%" }}
                    animate={{ y: ["100%", "0%", "0%", "100%"] }}
                    transition={{ 
                      times: [0, 0.1, 0.9, 1],
                      delay: 0.4 + i * 0.15, 
                      duration: 4.5, 
                      ease: [0.8, 0, 0.2, 1] 
                    }}
                    className="text-[#5a5a5a] text-xs md:text-sm uppercase tracking-[0.2em] font-medium"
                  >
                    {tag.text}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Titel */}
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: ["100%", "0%", "0%", "-100%"] }}
                  transition={{ 
                    times: [0, 0.1, 0.4, 0.5], 
                    duration: 5.5, 
                    delay: 0.6, 
                    ease: [0.8, 0, 0.2, 1] 
                  }}
                  className="text-white text-3xl md:text-7xl font-bold uppercase tracking-tighter"
                >
                  Fadi Moussa
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ delay: 3.2, duration: 1.2, ease: [0.8, 0, 0.2, 1] }}
                  className="text-white/30 text-xl md:text-4xl font-light uppercase tracking-[0.3em]"
                >
                  Portfolio
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}