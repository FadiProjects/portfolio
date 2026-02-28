'use client'

import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      console.error("Web3Forms Access Key fehlt in .env.local!");
    }
  }, []);

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    setIsValid(e.currentTarget.checkValidity());
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      setStatus('error');
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Neue Kontaktanfrage - Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setIsValid(false);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="bg-zinc-950/90 border-zinc-800 text-zinc-100 backdrop-blur-2xl shadow-2xl rounded-[2rem] w-[95%] max-w-[520px] max-h-[90vh] overflow-y-auto scrollbar-hide p-6 md:p-10 pt-14 md:pt-10">
        <DialogHeader className="space-y-2 md:space-y-4">
          <DialogTitle className="text-3xl md:text-4xl font-medium tracking-tighter italic">
            Let's talk
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-base md:text-lg font-light leading-snug md:leading-relaxed">
            {status === 'success' ? <span className="text-green-500 font-medium">Message sent successfully!</span> : 
             status === 'error' ? <span className="text-red-500 font-medium">Error sending message.</span> : 
             "Tell me about your project."}
          </DialogDescription>
        </DialogHeader>
        
        <form onChange={handleFormChange} onSubmit={handleSubmit} className="grid gap-4 md:gap-8 py-4">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid gap-2">
            <label htmlFor="name" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">
              Full Name
            </label>
            <Input 
              id="name" 
              name="name"
              required 
              placeholder="Fadi Moussa" 
              className="h-12 md:h-14 bg-zinc-900/50 border-zinc-800 focus:border-zinc-500 transition-colors rounded-xl px-4 text-sm md:text-base" 
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="email" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">
              Email Address
            </label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              required 
              placeholder="hello@fadimoussa.com" 
              className="h-12 md:h-14 bg-zinc-900/50 border-zinc-800 focus:border-zinc-500 transition-colors rounded-xl px-4 text-sm md:text-base" 
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="message" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">
              Your Message
            </label>
            <Textarea 
              id="message" 
              name="message"
              required 
              placeholder="How can I help you?" 
              className="min-h-[100px] md:min-h-[150px] bg-zinc-900/50 border-zinc-800 focus:border-zinc-500 transition-colors rounded-xl p-4 text-sm md:text-base resize-none" 
            />
          </div>

          <Button 
            type="submit" 
            disabled={!isValid || status === 'loading'}
            className="w-full h-14 md:h-16 mt-2 bg-zinc-100 text-black hover:bg-white rounded-full text-lg md:text-xl font-medium transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {status === 'loading' ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}