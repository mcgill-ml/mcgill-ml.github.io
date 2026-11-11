"use client";

import { useEffect, useId, useRef, useState } from "react";

type PresentationInfoPopoverProps = {
  title: string;
  description: string;
  titleClassName?: string;
};

export default function PresentationInfoPopover({
  title,
  description,
  titleClassName = "",
}: PresentationInfoPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    const closeOnOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideInteraction);
    document.addEventListener("touchstart", closeOnOutsideInteraction);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideInteraction);
      document.removeEventListener("touchstart", closeOnOutsideInteraction);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const supportsHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <div
      ref={containerRef}
      className="relative max-w-full"
      onMouseEnter={() => supportsHover() && setIsOpen(true)}
      onMouseLeave={() => supportsHover() && setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`cursor-help text-left underline decoration-current decoration-1 underline-offset-4 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${titleClassName}`}
        onClick={() => setIsOpen((open) => (supportsHover() ? true : !open))}
      >
        {title}
      </button>

      <div
        id={panelId}
        role="dialog"
        aria-label={`${title} session information`}
        className={`fixed inset-x-4 bottom-4 top-auto z-50 max-h-[calc(100vh-2rem)] w-auto overflow-y-auto rounded-2xl border border-gray-700 bg-black p-5 text-left text-gray-300 shadow-2xl shadow-black/60 transition duration-150 sm:absolute sm:inset-x-auto sm:bottom-auto sm:left-0 sm:top-full sm:mt-2 sm:max-h-96 sm:w-[min(24rem,calc(100vw-2rem))] ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-700 pb-3">
          <p className="text-base font-bold leading-snug text-white">{title}</p>
          <button
            type="button"
            aria-label="Close session information"
            className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl leading-none text-gray-400 transition hover:bg-gray-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-700"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        <p className="mt-4 whitespace-pre-line text-sm font-normal leading-relaxed text-gray-300">{description}</p>
      </div>
    </div>
  );
}
