"use client";

import { portfolioItems } from "@/data/portfolio";
import { thinkScenarios } from "@/data/content";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ThinkPanel() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono-label text-xs text-accent mb-3">
          PRODUCT NOTES
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {portfolioItems.map((item) => (
            <a
              key={item.title}
              href={item.driveUrl || "#"}
              target={item.driveUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border border-border text-sm transition-colors ${
                item.driveUrl
                  ? "hover:border-accent hover:bg-accent-soft cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!item.driveUrl) e.preventDefault();
              }}
            >
              <div>
                <span className="text-charcoal">{item.title}</span>
                <span className="block text-xs text-charcoal-soft">
                  {item.category}
                </span>
              </div>
              {item.driveUrl && (
                <ExternalLink size={14} className="text-accent shrink-0" />
              )}
            </a>
          ))}
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
