import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'FREQUENTLY ASKED QUESTIONS',
  subtitle = 'COMMON CUSTOMER QUERIES',
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Header if title or subtitle provided */}
      {(title || subtitle) && (
        <div className="mb-8 text-center max-w-2xl mx-auto">
          {subtitle && (
            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 font-bold block mb-1">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3 max-w-4xl mx-auto">
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const panelId = `faq-panel-${idx}`;
          const headerId = `faq-header-${idx}`;

          return (
            <div
              key={idx}
              className={`rounded border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-neutral-900 border-blue-600/70 shadow-lg shadow-blue-950/20'
                  : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-blue-500 font-bold">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-white group-hover:text-blue-400">
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    isOpen
                      ? 'bg-blue-600 border-blue-500 text-white rotate-180'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="px-5 pb-5 pt-1 border-t border-neutral-800/80 animate-fade-in"
                >
                  <p className="text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
