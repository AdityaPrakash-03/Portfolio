"use client";

import { toolbox } from "@/data/content";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ToolboxPanel() {
  const [openTool, setOpenTool] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {toolbox.categories.map((cat) => (
        <div key={cat.label}>
          <p className="font-mono-label text-xs text-accent mb-3">
            {cat.label.toUpperCase()}
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => {
              const usage = toolbox.toolUsage[item];
              const isOpen = openTool === item;
              return (
                <div key={item}>
                  <button
                    onClick={() => usage && setOpenTool(isOpen ? null : item)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition-colors ${
                      isOpen
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-border text-charcoal hover:border-accent/50"
                    } ${usage ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {item}
                    {usage && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                  {isOpen && usage && (
                    <p className="text-xs text-charcoal-soft mt-1.5 max-w-[220px] pl-1">
                      {usage}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
