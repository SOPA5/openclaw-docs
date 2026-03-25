import type { Variants } from 'framer-motion';

const MOTION_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING_EASE: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: MOTION_EASE,
    },
  }),
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: (index: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.06,
      ease: SPRING_EASE,
    },
  }),
};

export const enterViewport = {
  once: true,
  amount: 0.2,
} as const;

export const hoverLift = {
  scale: 1.02,
  y: -2,
};

export const tapPress = {
  scale: 0.99,
};

export const baseTransition = {
  duration: 0.45,
  ease: MOTION_EASE,
} as const;
