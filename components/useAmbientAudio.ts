"use client";

import { useRef, useState, useCallback } from "react";

// Powers the speaker easter egg. No autoplay under any circumstance.
// audio only ever starts from a direct user click, per the plan.
export function useAmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/ambient.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay policies may block this in rare cases; fail silently,
        // the button just won't visually switch to "playing".
      });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return { isPlaying, toggle };
}
