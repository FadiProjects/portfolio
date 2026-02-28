'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  LayoutGrid, 
  MessageSquare,
  Wand2,
  HelpCircle,
  Route
} from 'lucide-react';
import { ContactDialog } from "@/components/ui/contact-dialog";

const navItems = [
  { name: 'Work', href: '/work', icon: LayoutGrid },
  { name: 'Services', href: '/#services', icon: Wand2 },
  { name: 'FAQ', href: '/#faq', icon: HelpCircle },
  { name: 'Process', href: '/#process', icon: Route },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element && lenis) {
        e.preventDefault();
        lenis.scrollTo(element, { 
          offset: -120,
          duration: 1.5 
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8">
      <nav className="relative flex items-center justify-between w-full max-w-4xl px-4 md:px-6 py-2 md:py-3 bg-background/65 backdrop-blur-lg border border-white/10 rounded-full">
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center pr-4 border-r border-white/10">
             <Link 
                href="/" 
                className="text-white text-lg md:text-2xl font-normal transition-opacity hover:opacity-70"
                aria-label="Back to home / Fadi Moussa Web Developer and Designer"
                title="Back to home / Fadi Moussa Web Developer and Designer"
              >
                fadi.moussa
              </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-5 py-2 text-xl font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
                >
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          <ContactDialog>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 px-8 py-6 text-xl font-medium text-white cursor-pointer flex items-center gap-2">
              <MessageSquare size={18} />
              Get in touch
            </Button>
          </ContactDialog>
        </div>

        <button 
          className="lg:hidden p-2 text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full mt-4 left-0 right-0 bg-background border border-white/10 p-6 rounded-3xl flex flex-col gap-6 lg:hidden z-40 shadow-2xl"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors flex items-center gap-3"
                  >
                    <Icon size={24} />
                    {item.name}
                  </Link>
                );
              })}
              <hr className="border-white/10" />
              <ContactDialog>
                <Button variant="outline" className="rounded-full border-white/20 py-7 text-lg cursor-pointer text-white flex items-center gap-3" title="Contact Fadi Moussa" aria-label="Contact Fadi Moussa">
                  <MessageSquare size={22} />
                  Get in touch
                </Button>
              </ContactDialog>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}