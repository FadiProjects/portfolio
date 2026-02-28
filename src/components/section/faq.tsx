"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SubHeading } from "@/components/ui/sub-heading";
import { faqs } from "@/lib/faq-data";

export default function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        <div className="lg:sticky lg:top-32 space-y-8 h-fit">
          <SubHeading as="h3">
            Have a question?
          </SubHeading>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground text-xl md:text-2xl max-w-md leading-tight"
          >
            Everything you need to know about our collaboration and the process.
          </motion.p>
        </div>

        <div className="w-full pt-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border-none bg-muted/40 hover:bg-muted/60 transition-all duration-300 rounded-2xl px-6 md:px-8"
                >
                  <AccordionTrigger className="text-left text-xl md:text-2xl font-medium hover:no-underline py-8">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg md:text-xl pb-8 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}