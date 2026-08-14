"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { hero } from "@/data/content";

type HeroProps = {
  onOpenPanel: (panel: "work" | "think") => void;
};

export default function Hero({ onOpenPanel }: HeroProps) {
  const [showWorkOptions, setShowWorkOptions] = useState(false);

  return (
    <section
      id="top"
      className="max-w-3xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-10 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono-label text-xs text-accent mb-4"
      >
        {hero.role.toUpperCase()}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-4xl md:text-5xl font-semibold text-charcoal tracking-tight leading-tight"
      >
        {hero.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-charcoal-soft mt-4 text-lg"
      >
        {hero.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap justify-center gap-2 mt-6"
      >
        {hero.proofPoints.map((point) => (
          <span
            key={point}
            className="text-xs font-mono-label px-3 py-1.5 rounded-full border border-border text-charcoal-soft"
          >
            {point}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-3 mt-8"
      >
        <div className="relative">
          <button
            onClick={() => setShowWorkOptions((isOpen) => !isOpen)}
            aria-expanded={showWorkOptions}
            className="px-5 py-2.5 rounded-full bg-charcoal text-bg-panel text-sm font-medium hover:bg-accent transition-colors"
          >
            {hero.ctaPrimary.label}
          </button>
          {showWorkOptions && (
            <div className="absolute left-1/2 top-[calc(100%+0.75rem)] z-20 w-64 -translate-x-1/2 rounded-2xl border border-border bg-bg-panel p-2 text-left shadow-xl">
              <button
                onClick={() => {
                  setShowWorkOptions(false);
                  onOpenPanel("work");
                }}
                className="w-full rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft"
              >
                <span className="block text-sm font-medium text-charcoal">Experience</span>
                <span className="mt-0.5 block text-xs text-charcoal-soft">CorpHire and NoKasa</span>
              </button>
              <button
                onClick={() => {
                  setShowWorkOptions(false);
                  onOpenPanel("think");
                }}
                className="w-full rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft"
              >
                <span className="block text-sm font-medium text-charcoal">Project Notes</span>
                <span className="mt-0.5 block text-xs text-charcoal-soft">Teardowns, case studies, and analysis</span>
              </button>
            </div>
          )}
        </div>
        <a
          href={hero.ctaSecondary.href}
          download
          className="px-5 py-2.5 rounded-full border border-border text-charcoal text-sm font-medium hover:border-accent transition-colors"
        >
          {hero.ctaSecondary.label}
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-charcoal-soft text-sm mt-10 animate-bounce"
      >
        {hero.exploreLabel}
      </motion.p>
    </section>
  );
}
