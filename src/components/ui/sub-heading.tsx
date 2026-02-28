'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TextEffect } from '@/components/core/text-effect';

interface SubHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SubHeading({ children, as = 'h2', className = "", align = 'left' }: SubHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <TextEffect 
        as={as} 
        preset='fade-in-blur' 
        speedReveal={1.1} 
        speedSegment={0.3}
        trigger={isInView} 
        className={`tracking-tight text-5xl md:text-7xl font-medium ${className}`}
      >
        {children}
      </TextEffect>
    </div>
  );
}