"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BadgeCheck, BriefcaseBusiness, Keyboard, Lightbulb, UserRound, Volume2, VolumeX, Wrench, X, type LucideIcon } from "lucide-react";
import { featuredCertification } from "@/data/certifications";
import { corphire } from "@/data/content";
import { useAmbientAudio } from "./useAmbientAudio";

type Panel = "work" | "think" | "about" | "signals" | "toolbox";

type DeskSceneProps = {
  onOpenPanel: (panel: Panel) => void;
};

export default function DeskScene({ onOpenPanel }: DeskSceneProps) {
  const { isPlaying, toggle } = useAmbientAudio();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [mouseAttempts, setMouseAttempts] = useState(0);
  const [isMouseDodging, setIsMouseDodging] = useState(false);

  function handleMouseEnter() {
    if (isMouseDodging || mouseAttempts >= 2) return;

    setMouseAttempts((attempts) => attempts + 1);
    setIsMouseDodging(true);
    window.setTimeout(() => setIsMouseDodging(false), 700);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandPaletteOpen(true);
        return;
      }

      if (!isCommandPaletteOpen) return;

      if (event.key === "Escape") {
        setIsCommandPaletteOpen(false);
        return;
      }

      const shortcuts: Record<string, Panel> = {
        w: "work",
        t: "think",
        a: "about",
        s: "signals",
        b: "toolbox",
      };
      const panel = shortcuts[event.key.toLowerCase()];
      if (panel) {
        event.preventDefault();
        setIsCommandPaletteOpen(false);
        onOpenPanel(panel);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCommandPaletteOpen, onOpenPanel]);

  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 pb-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-[#efebe2] shadow-[0_18px_45px_rgba(28,28,30,0.08)]">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto"
          role="img"
          aria-label="Illustrated white desk setup with a large OLED portfolio monitor, running PC tower, notebook, bookshelf, certificate, phone, and speaker"
        >
          <rect width="800" height="316" fill="#EFEBE2" />
          <path d="M0 316H800V500H0Z" fill="#B8875A" />
          <path d="M0 316H800" stroke="#8C6540" strokeWidth="10" />
          <path d="M0 482H800" stroke="#8C6540" strokeWidth="5" opacity="0.55" />

          <path d="M0 90H800M0 205H800" stroke="#E4E0D8" strokeWidth="1" />
          <path d="M200 0V316M603 0V316" stroke="#E4E0D8" strokeWidth="1" />

          <InteractiveObject
            label="Open toolbox"
            onClick={() => onOpenPanel("toolbox")}
          >
            <rect x="45" y="58" width="132" height="9" rx="2" fill="#4A4A4D" />
            <rect x="50" y="69" width="14" height="51" rx="2" fill="#2F5EFF" />
            <rect x="67" y="77" width="11" height="43" rx="2" fill="#1C1C1E" />
            <rect x="81" y="72" width="15" height="48" rx="2" fill="#8C6540" />
            <rect x="99" y="78" width="10" height="42" rx="2" fill="#4A4A4D" />
            <rect x="112" y="70" width="16" height="50" rx="2" fill="#2F5EFF" />
            <rect x="131" y="76" width="12" height="44" rx="2" fill="#1C1C1E" />
            <rect x="146" y="74" width="17" height="46" rx="2" fill="#8C6540" />
            <rect x="45" y="120" width="132" height="9" rx="2" fill="#4A4A4D" />
            <text x="111" y="148" textAnchor="middle" fill="#4A4A4D" fontSize="11" fontFamily="var(--font-mono, monospace)">TOOLBOX</text>
          </InteractiveObject>

          <InteractiveObject
            label={`Open signals: ${featuredCertification.title}`}
            onClick={() => onOpenPanel("signals")}
            rotateOnHover
          >
            <rect x="656" y="57" width="95" height="72" rx="3" fill="#FFFFFF" stroke="#8C6540" strokeWidth="4" />
            <rect x="668" y="69" width="70" height="4" rx="2" fill="#E4E0D8" />
            <rect x="668" y="79" width="55" height="4" rx="2" fill="#E4E0D8" />
            <rect x="668" y="89" width="64" height="4" rx="2" fill="#E4E0D8" />
            <circle cx="703" cy="110" r="10" fill="#E8EDFF" />
            <path d="M699 110l3 3 6-7" fill="none" stroke="#2F5EFF" strokeWidth="2" />
            <text x="703" y="148" textAnchor="middle" fill="#4A4A4D" fontSize="11" fontFamily="var(--font-mono, monospace)">SIGNALS</text>
          </InteractiveObject>

          <g>
            <ellipse cx="408" cy="385" rx="100" ry="10" fill="#4B3827" opacity="0.14" />
            <rect x="173" y="52" width="470" height="280" rx="18" fill="#FFFFFF" stroke="#CFCAC0" strokeWidth="3" />
            <rect x="181" y="60" width="454" height="264" rx="13" fill="#E4E0D8" />
            <rect x="191" y="71" width="434" height="232" rx="6" fill="#000000" />
            <circle cx="408" cy="64" r="3" fill="#8A8A8D" />
            <circle cx="408" cy="64" r="1" fill="#1C1C1E" />
            <path d="M388 313H428" stroke="#D4D0C7" strokeWidth="2" strokeLinecap="round" />
            <rect x="385" y="332" width="46" height="42" rx="3" fill="#FFFFFF" stroke="#CFCAC0" strokeWidth="2" />
            <path d="M345 374H471L485 385H331Z" fill="#FFFFFF" stroke="#CFCAC0" strokeWidth="2" />
            <circle cx="408" cy="313" r="3" fill="#2F5EFF" />
          </g>

          <InteractiveObject label={isPlaying ? "Pause ambient sound" : "Play ambient sound"} onClick={toggle}>
            <Speaker x={57} y={214} isPlaying={isPlaying} />
          </InteractiveObject>
          <InteractiveObject label={isPlaying ? "Pause ambient sound" : "Play ambient sound"} onClick={toggle}>
            <Speaker x={673} y={214} isPlaying={isPlaying} />
          </InteractiveObject>

          <foreignObject x="191" y="71" width="434" height="232">
            <div className="flex h-full flex-col overflow-hidden rounded-[5px] bg-[#000000] px-5 py-4 text-slate-100">
              <div className="flex items-center justify-between font-mono text-[7px] tracking-[0.16em] text-slate-500">
                <span>ADITYA / DESKTOP</span>
                <span className="flex items-center gap-1 text-blue-300"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />RUNNING</span>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center">
                <div className="mb-5 text-center">
                  <p className="font-mono text-[8px] tracking-[0.2em] text-blue-300">PORTFOLIO OS</p>
                  <p className="mt-1 text-sm font-medium tracking-tight text-white">Choose an app to explore.</p>
                </div>
                <div className="grid w-full grid-cols-5 gap-2">
                  <MonitorApp label="Work" caption="case study" icon={BriefcaseBusiness} onClick={() => onOpenPanel("work")} />
                  <MonitorApp label="Think" caption="notes" icon={Lightbulb} onClick={() => onOpenPanel("think")} />
                  <MonitorApp label="About" caption="profile" icon={UserRound} onClick={() => onOpenPanel("about")} />
                  <MonitorApp label="Signals" caption="proof" icon={BadgeCheck} onClick={() => onOpenPanel("signals")} />
                  <MonitorApp label="Toolbox" caption="stack" icon={Wrench} onClick={() => onOpenPanel("toolbox")} />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[6px] text-slate-500"><span>OPEN: {corphire.title}</span><span>05 APPS</span></div>
            </div>
          </foreignObject>

          <InteractiveObject label="Open product notes" onClick={() => onOpenPanel("think")}> 
            <rect x="65" y="361" width="113" height="80" rx="4" fill="#F7F5F0" stroke="#4A4A4D" strokeWidth="2" />
            <path d="M69 361V441" stroke="#8C6540" strokeWidth="3" />
            <circle cx="70" cy="374" r="2" fill="#4A4A4D" /><circle cx="70" cy="389" r="2" fill="#4A4A4D" /><circle cx="70" cy="404" r="2" fill="#4A4A4D" /><circle cx="70" cy="419" r="2" fill="#4A4A4D" />
            <path d="M121 361V441" stroke="#4A4A4D" strokeWidth="1.5" />
            <path d="M77 380H108M77 391H108M77 402H101" stroke="#D4D0C7" strokeWidth="2" />
            <path d="M133 380H166M133 391H161M133 402H164" stroke="#D4D0C7" strokeWidth="2" />
            <path d="M78 370H104" stroke="#2F5EFF" strokeWidth="2" />
            <text x="121" y="458" textAnchor="middle" fill="#4A4A4D" fontSize="11" fontFamily="var(--font-mono, monospace)">THINK</text>
          </InteractiveObject>

          <InteractiveObject label="Open about" onClick={() => onOpenPanel("about")}> 
            <rect x="661" y="358" width="48" height="84" rx="8" fill="#1C1C1E" />
            <rect x="666" y="367" width="38" height="61" rx="3" fill="#E8EDFF" />
            <rect x="678" y="362" width="14" height="3" rx="1.5" fill="#4A4A4D" />
            <circle cx="685" cy="434" r="3" fill="#4A4A4D" />
            <rect x="674" y="374" width="22" height="3" rx="1" fill="#2F5EFF" />
            <rect x="674" y="383" width="17" height="3" rx="1" fill="#4A4A4D" opacity="0.6" />
            <text x="685" y="460" textAnchor="middle" fill="#4A4A4D" fontSize="11" fontFamily="var(--font-mono, monospace)">ABOUT</text>
          </InteractiveObject>

          <InteractiveObject label="Open command palette" onClick={() => setIsCommandPaletteOpen(true)}>
            <rect x="245" y="394" width="226" height="41" rx="6" fill="#1C1C1E" />
            {Array.from({ length: 12 }).map((_, index) => <rect key={`top-${index}`} x={255 + index * 17} y="401" width="14" height="7" rx="1.5" fill={index === 1 ? "#2F5EFF" : "#4A4A4D"} />)}
            {Array.from({ length: 11 }).map((_, index) => <rect key={`middle-${index}`} x={263 + index * 17} y="411" width="14" height="7" rx="1.5" fill="#4A4A4D" />)}
            {Array.from({ length: 3 }).map((_, index) => <rect key={`bottom-left-${index}`} x={275 + index * 17} y="421" width="14" height="7" rx="1.5" fill="#4A4A4D" />)}
            <rect x="326" y="421" width="85" height="7" rx="1.5" fill="#4A4A4D" />
            {Array.from({ length: 3 }).map((_, index) => <rect key={`bottom-right-${index}`} x={414 + index * 17} y="421" width="14" height="7" rx="1.5" fill="#4A4A4D" />)}
          </InteractiveObject>
          <motion.g
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            animate={isMouseDodging ? mouseAttempts === 1 ? { x: [0, 42, 0], y: [0, -10, 0] } : { x: [0, -34, 0], y: [0, -4, 0] } : { x: 0, y: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
          >
            <rect x="492" y="399" width="27" height="35" rx="12" fill="#1C1C1E" />
            <path d="M505 404V414" stroke="#8A8A8D" strokeWidth="2" />
          </motion.g>
          {mouseAttempts >= 2 && (
            <g>
              <rect x="507" y="454" width="150" height="25" rx="12.5" fill="#1C1C1E" />
              <text x="582" y="470" textAnchor="middle" fill="#F7F5F0" fontSize="10" fontFamily="var(--font-mono, monospace)">DO NOT TOUCH MY MOUSE</text>
            </g>
          )}
        </svg>

        {isCommandPaletteOpen && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-charcoal/25 p-5 backdrop-blur-sm" onClick={() => setIsCommandPaletteOpen(false)}>
            <section role="dialog" aria-modal="true" aria-label="Portfolio command palette" className="w-full max-w-sm rounded-2xl border border-border bg-bg-panel p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2 text-charcoal"><Keyboard size={16} /><span className="font-mono-label text-xs">COMMAND PALETTE</span></div>
                <button onClick={() => setIsCommandPaletteOpen(false)} aria-label="Close command palette" className="rounded-full p-1.5 text-charcoal-soft transition-colors hover:bg-accent-soft hover:text-accent"><X size={16} /></button>
              </div>
              <p className="px-1 pb-2 pt-4 text-sm text-charcoal-soft">Jump to a part of the portfolio.</p>
              <div className="space-y-1">
                <CommandItem label="Work" shortcut="W" icon={BriefcaseBusiness} onClick={() => { setIsCommandPaletteOpen(false); onOpenPanel("work"); }} />
                <CommandItem label="Think" shortcut="T" icon={Lightbulb} onClick={() => { setIsCommandPaletteOpen(false); onOpenPanel("think"); }} />
                <CommandItem label="About" shortcut="A" icon={UserRound} onClick={() => { setIsCommandPaletteOpen(false); onOpenPanel("about"); }} />
                <CommandItem label="Signals" shortcut="S" icon={BadgeCheck} onClick={() => { setIsCommandPaletteOpen(false); onOpenPanel("signals"); }} />
                <CommandItem label="Toolbox" shortcut="B" icon={Wrench} onClick={() => { setIsCommandPaletteOpen(false); onOpenPanel("toolbox"); }} />
              </div>
              <p className="px-1 pt-4 font-mono-label text-[10px] text-charcoal-soft">Press ESC to close. Use Ctrl K to open.</p>
            </section>
          </div>
        )}

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border bg-bg-panel px-5 py-4 sm:flex-row">
          <p className="font-mono-label text-[10px] text-charcoal-soft">The screen is the portfolio. The room is optional to explore.</p>
          <button onClick={toggle} className="flex items-center gap-1.5 text-xs font-mono-label text-charcoal-soft transition-colors hover:text-accent">
            {isPlaying ? <VolumeX size={14} /> : <Volume2 size={14} />}
            {isPlaying ? "Pause ambient sound" : "Play ambient sound"}
          </button>
        </div>
      </div>
    </section>
  );
}

function InteractiveObject({ children, label, onClick, rotateOnHover = false }: { children: React.ReactNode; label: string; onClick: () => void; rotateOnHover?: boolean }) {
  return (
    <g className="cursor-pointer" role="button" tabIndex={0} aria-label={label} onClick={onClick} onKeyDown={(event) => event.key === "Enter" && onClick()}>
      <motion.g whileHover={rotateOnHover ? { rotate: -2, y: -3 } : { y: -4 }} transition={{ duration: 0.2 }}>{children}</motion.g>
    </g>
  );
}

function MonitorApp({ label, caption, icon: Icon, onClick }: { label: string; caption: string; icon: LucideIcon; onClick: () => void }) {
  return <button onClick={onClick} aria-label={`Open ${label}`} className="group flex flex-col items-center text-center"><span className="flex aspect-square w-full items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] text-blue-300 transition group-hover:-translate-y-0.5 group-hover:border-blue-300 group-hover:bg-blue-400 group-hover:text-white"><Icon size={15} strokeWidth={1.7} /></span><span className="mt-1.5 block text-[7px] font-medium text-white">{label}</span><span className="mt-0.5 block text-[6px] text-slate-500">{caption}</span></button>;
}

function CommandItem({ label, shortcut, icon: Icon, onClick }: { label: string; shortcut: string; icon: LucideIcon; onClick: () => void }) {
  return <button onClick={onClick} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-accent-soft"><Icon size={16} className="text-accent" /><span className="flex-1 text-sm text-charcoal">{label}</span><kbd className="rounded border border-border bg-bg px-2 py-0.5 font-mono-label text-[10px] text-charcoal-soft">{shortcut}</kbd></button>;
}

function Speaker({ x, y, isPlaying }: { x: number; y: number; isPlaying: boolean }) {
  return <g>
    <ellipse cx={x + 35} cy={y + 121} rx="29" ry="5" fill="#4B3827" opacity="0.16" />
    <rect x={x} y={y} width="70" height="118" rx="12" fill="#252527" />
    <rect x={x + 6} y={y + 7} width="58" height="99" rx="8" fill="#171719" stroke="#4A4A4D" />
    <circle cx={x + 35} cy={y + 28} r="12" fill="#B8B3A8" />
    <circle cx={x + 35} cy={y + 28} r="7" fill="#303034" />
    <circle cx={x + 35} cy={y + 73} r="23" fill="#5A5A5E" />
    <circle cx={x + 35} cy={y + 73} r="18" fill="#222225" />
    <circle cx={x + 35} cy={y + 73} r="9" fill="#131315" />
    <circle cx={x + 35} cy={y + 98} r="2.5" fill={isPlaying ? "#2F5EFF" : "#8A8A8D"} />
    <path d={`M${x + 22} ${y + 109}H${x + 48}`} stroke="#707075" strokeWidth="1.5" strokeLinecap="round" />
  </g>;
}
