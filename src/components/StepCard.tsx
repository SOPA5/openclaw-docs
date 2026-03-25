import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { baseTransition, enterViewport, fadeUpVariants } from '@site/src/lib/motion';

type StepCardProps = {
  step: number | string;
  title: string;
  children: ReactNode;
};

const stepBadgeStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '9999px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--brand-gradient)',
  color: '#fff',
  fontWeight: 800,
  flexShrink: 0,
} as const;

const layoutStyle = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-start',
} as const;

export default function StepCard({ step, title, children }: StepCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="glass-card liquid-container"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={enterViewport}
      variants={prefersReducedMotion ? undefined : fadeUpVariants}
      transition={baseTransition}
      style={{ margin: '1rem 0' }}
    >
      <div style={layoutStyle}>
        <div className="glow-accent" style={stepBadgeStyle}>
          {step}
        </div>
        <div>
          <h3 style={{ marginBottom: '0.45rem' }}>{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
