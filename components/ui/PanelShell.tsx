"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type PanelShellProps = {
  isOpen: boolean;
  onClose: () => void;
  label: string; // e.g. "WORK", "THINK". Mono label shown top-left of panel.
  title: string; // e.g. "What I've built"
  children: React.ReactNode;
};

// This is the single component every content panel (Work / Think / About /
// Signals / Toolbox) renders inside. Whether triggered from a monitor icon
// or a physical desk object, it opens the exact same panel. One source of
// truth, two doors in, per the plan.
export default function PanelShell({
  isOpen,
  onClose,
  label,
  title,
  children,
}: PanelShellProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 px-0 md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-bg-panel w-full md:max-w-2xl md:rounded-2xl rounded-t-2xl border border-border shadow-2xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sticky top-0 bg-bg-panel/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="font-mono-label text-xs text-accent block mb-1">
                    {label}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-charcoal">
                    {title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close panel"
                  className="rounded-full p-2 hover:bg-accent-soft transition-colors text-charcoal-soft hover:text-accent"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="px-6 py-6">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
