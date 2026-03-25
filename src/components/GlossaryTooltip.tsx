import type { ReactNode } from 'react';
import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { baseTransition } from '@site/src/lib/motion';

type GlossaryTooltipProps = {
  term?: string;
  desc: string;
  children: ReactNode;
};

export default function GlossaryTooltip({ term, desc, children }: GlossaryTooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      className="glossary-tooltip-trigger"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-describedby={open ? tooltipId : undefined}
      aria-label={`${term ?? '용어'} 설명: ${desc}`}
    >
      <span>{children}</span>
      <AnimatePresence>
        {open && (
          <motion.span
            id={tooltipId}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            transition={baseTransition}
            role="tooltip"
            className="glossary-tooltip-bubble"
          >
            {term ? <strong className="glossary-tooltip-title">{term}</strong> : null}
            <span>{desc}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
