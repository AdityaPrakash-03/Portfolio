"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DeskScene from "@/components/DeskScene";
import PanelShell from "@/components/ui/PanelShell";
import WorkPanel from "@/components/panels/WorkPanel";
import ThinkPanel from "@/components/panels/ThinkPanel";
import AboutPanel from "@/components/panels/AboutPanel";
import SignalsPanel from "@/components/panels/SignalsPanel";
import ToolboxPanel from "@/components/panels/ToolboxPanel";
import { finalCta } from "@/data/content";

type PanelKey = "work" | "think" | "about" | "signals" | "toolbox" | null;

const panelMeta: Record<
  Exclude<PanelKey, null>,
  { label: string; title: string }
> = {
  work: { label: "WORK", title: "What I've built" },
  think: { label: "THINK", title: "How I think" },
  about: { label: "ABOUT", title: "A little context" },
  signals: { label: "SIGNALS", title: "Certifications & credentials" },
  toolbox: { label: "TOOLBOX", title: "What I build with" },
};

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav onOpenPanel={(p) => setActivePanel(p)} />

      <main id="work" className="flex-1">
        <Hero />
        <DeskScene onOpenPanel={(p) => setActivePanel(p)} />

        {/* Closing CTA */}
        <section className="max-w-2xl mx-auto px-5 md:px-8 pb-24 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-charcoal mb-3">
            {finalCta.heading}
          </h2>
          <p className="text-charcoal-soft mb-6">{finalCta.text}</p>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setShowContactOptions(true)}
              className="px-6 py-3 rounded-full bg-charcoal text-bg-panel text-sm font-medium hover:bg-accent transition-colors"
            >
              Let&apos;s talk
            </button>
          </div>
        </section>
      </main>

      {showContactOptions && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/35 px-5 backdrop-blur-sm"
          role="presentation"
          onClick={() => setShowContactOptions(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Contact Aditya Prakash"
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-bg-panel p-6 text-left shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setShowContactOptions(false)}
              aria-label="Close contact card"
              className="absolute right-4 top-4 rounded-full p-2 text-charcoal-soft transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <X size={18} />
            </button>
            <p className="font-mono-label text-xs text-accent">CONTACT CARD</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-charcoal">
              Aditya Prakash
            </h2>
            <p className="mt-1 text-sm text-charcoal-soft">Product Builder</p>
            <div className="mt-6 space-y-3 border-t border-border pt-5">
              <a
                href="tel:+918920430086"
                className="block rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent hover:bg-accent-soft"
              >
                <span className="block font-mono-label text-[10px] text-charcoal-soft">PHONE</span>
                <span className="mt-1 block text-sm font-medium text-charcoal">+91 89204 30086</span>
              </a>
              <a
                href={`mailto:${finalCta.email}`}
                className="block rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent hover:bg-accent-soft"
              >
                <span className="block font-mono-label text-[10px] text-charcoal-soft">EMAIL</span>
                <span className="mt-1 block break-all text-sm font-medium text-charcoal">{finalCta.email}</span>
              </a>
            </div>
          </section>
        </div>
      )}

      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-charcoal-soft">
          <span>Aditya Prakash</span>
          <span className="font-mono-label text-xs">
            Built by me + AI agents
          </span>
        </div>
      </footer>

      {/* Panels share content whether opened from nav, monitor icons, or
          physical desk objects. One source of truth per the plan. */}
      {(Object.keys(panelMeta) as Exclude<PanelKey, null>[]).map((key) => (
        <PanelShell
          key={key}
          isOpen={activePanel === key}
          onClose={() => setActivePanel(null)}
          label={panelMeta[key].label}
          title={panelMeta[key].title}
        >
          {key === "work" && <WorkPanel />}
          {key === "think" && <ThinkPanel />}
          {key === "about" && <AboutPanel />}
          {key === "signals" && <SignalsPanel />}
          {key === "toolbox" && <ToolboxPanel />}
        </PanelShell>
      ))}
    </div>
  );
}
