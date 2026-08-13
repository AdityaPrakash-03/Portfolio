"use client";

type NavProps = {
  onOpenPanel: (panel: "work" | "think" | "about" | "signals" | "toolbox") => void;
};

const links: { label: string; panel: "work" | "think" | "about" | "signals" }[] = [
  { label: "Work", panel: "work" },
  { label: "Think", panel: "think" },
  { label: "About", panel: "about" },
  { label: "Signals", panel: "signals" },
];

export default function Nav({ onOpenPanel }: NavProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-30 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-charcoal tracking-tight"
        >
          Aditya
        </a>
        <div className="flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <button
              key={link.panel}
              onClick={() => onOpenPanel(link.panel)}
              className="px-2.5 md:px-3.5 py-2 text-sm text-charcoal-soft hover:text-charcoal transition-colors rounded-lg hover:bg-accent-soft"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-3.5 py-2 text-sm bg-charcoal text-bg-panel rounded-full hover:bg-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
