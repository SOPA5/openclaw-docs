import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { baseTransition, enterViewport, fadeUpVariants } from '@site/src/lib/motion';

type TipBoxProps = {
  children: ReactNode;
  title?: string;
};

const tipLayoutStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.85rem',
} as const;

export default function TipBox({ children, title = '학습 TIP' }: TipBoxProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.aside
      className="tip-box"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={enterViewport}
      variants={prefersReducedMotion ? undefined : fadeUpVariants}
      transition={baseTransition}
    >
      <div style={tipLayoutStyle}>
        <span aria-hidden style={{ fontSize: '1.35rem', lineHeight: 1 }}>
          💡
        </span>
        <div>
          <strong style={{ display: 'block', marginBottom: '0.35rem' }}>{title}</strong>
          <div>{children}</div>
        </div>
      </div>
    </motion.aside>
  );
}
