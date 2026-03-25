import type { Props } from '@theme/DocItem/Layout';
import Layout from '@theme-original/DocItem/Layout';
import { motion, useReducedMotion } from 'framer-motion';
import { baseTransition } from '@site/src/lib/motion';

export default function DocItemLayout(props: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={baseTransition}
    >
      <Layout {...props} />
    </motion.div>
  );
}
