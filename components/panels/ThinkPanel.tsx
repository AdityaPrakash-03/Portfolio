"use client";

import { portfolioItems } from "@/data/portfolio";
import { thinkScenarios } from "@/data/content";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function ThinkPanel() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono-label text-xs text-accent mb-3">
          PRODUCT NOTES
        </p>
        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-2">
          {portfolioItems.map((item) => <PortfolioCard key={item.title} item={item} />)}
        </div>
      </div>

      <div>
        <p className="font-mono-label text-xs text-accent mb-3">
          HOW I THINK
        </p>
        <div className="space-y-4">
          {thinkScenarios.map((scenario, i) => (
            <ScenarioCard key={i} scenario={scenario} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-lg border border-border transition-colors hover:border-accent/50">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <button
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="flex min-w-0 flex-1 items-center justify-between gap-2 text-left"
        >
          <span className="min-w-0">
            <span className="block text-sm text-charcoal">{item.title}</span>
            <span className="block text-xs text-charcoal-soft">{item.category}</span>
          </span>
          <ChevronDown size={15} className={`shrink-0 text-charcoal-soft transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <a
          href={item.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${item.title}`}
          className="shrink-0 rounded p-1.5 text-accent transition-colors hover:bg-accent-soft"
        >
          <ExternalLink size={14} />
        </a>
      </div>
      {isOpen && (
        <div className="space-y-2 border-t border-border px-3 py-2.5">
          <p className="text-xs leading-relaxed text-charcoal-soft">{item.overview}</p>
          {item.readingOptions && (
            <div className="grid gap-2">
              {item.readingOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-2.5 py-2 transition-colors hover:border-accent hover:bg-accent-soft"
                >
                  <span className="flex items-center justify-between gap-2 text-xs font-medium text-charcoal">
                    {option.label}
                    <ExternalLink size={13} className="shrink-0 text-accent" />
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-charcoal-soft">
                    {option.description}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function ScenarioCard({
  scenario,
}: {
  scenario: (typeof thinkScenarios)[number];
}) {
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="border border-border rounded-xl p-4">
      <p className="text-sm font-medium text-charcoal mb-3">
        {scenario.prompt}
      </p>
      <div className="flex flex-col gap-2">
        {scenario.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setPicked(i)}
            disabled={picked !== null}
            className={`text-left text-sm px-3 py-2 rounded-lg border transition-colors ${
              picked === i
                ? opt.isCorrect
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border bg-bg text-charcoal-soft"
                : picked !== null
                  ? "border-border text-charcoal-soft opacity-50"
                  : "border-border text-charcoal hover:border-accent/50"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {picked !== null && (
        <p className="text-sm text-charcoal-soft mt-3 pt-3 border-t border-border leading-relaxed">
          {scenario.reveal}
        </p>
      )}
    </div>
  );
}
