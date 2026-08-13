"use client";

import { corphire, experience } from "@/data/content";
import { useState } from "react";
import { ExternalLink, Play, ChevronDown } from "lucide-react";

const steps = [
  corphire.problem,
  corphire.insight,
  corphire.decision,
  corphire.build,
  corphire.iterate,
];

export default function WorkPanel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-8">
      {/* CorpHire flagship case study */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            {corphire.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={corphire.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full border border-border hover:border-accent hover:bg-accent-soft transition-colors text-charcoal"
            >
              <ExternalLink size={12} /> Live
            </a>
            <a
              href={corphire.loomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full border border-border hover:border-accent hover:bg-accent-soft transition-colors text-charcoal"
            >
              <Play size={12} /> Walkthrough
            </a>
          </div>
        </div>
        <p className="text-charcoal-soft text-sm mb-5">{corphire.hook}</p>

        {/* Step tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {steps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-label transition-colors ${
                activeStep === i
                  ? "bg-charcoal text-bg-panel"
                  : "border border-border text-charcoal-soft hover:border-accent/50"
              }`}
            >
              {i + 1}. {step.label}
            </button>
          ))}
        </div>

        <div className="bg-bg rounded-xl p-4 border border-border">
          <p className="text-sm text-charcoal leading-relaxed">
            {steps[activeStep].text}
          </p>
          {activeStep === 3 && "stack" in steps[3] && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {(steps[3] as typeof corphire.build).stack.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2 py-1 rounded-md bg-accent-soft text-accent font-mono-label"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      <div className="pt-2 border-t border-border">
        <p className="font-mono-label text-xs text-accent mb-3 mt-6">
          EXPERIENCE
        </p>
        {experience.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: (typeof experience)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="font-medium text-charcoal text-sm">
            {exp.role} · {exp.company}
          </h4>
          <p className="text-xs text-charcoal-soft mt-0.5">{exp.dates}</p>
        </div>
      </div>
      <p className="text-sm text-charcoal-soft mt-2 leading-relaxed">
        {exp.summary}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs text-accent mt-3 font-mono-label"
      >
        {open ? "HIDE DETAILS" : "SHOW DETAILS"}
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="mt-3 space-y-1.5">
          {exp.details.map((d, i) => (
            <li key={i} className="text-sm text-charcoal-soft flex gap-2">
              <span className="text-accent">·</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
