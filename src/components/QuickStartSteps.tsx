import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { baseTransition, fadeUpVariants, hoverLift, tapPress } from '@site/src/lib/motion';
import styles from './QuickStartSteps.module.css';

type QuickStartStep = {
  step: string;
  title: string;
  description: string;
  to: string;
  actionLabel: string;
};

type QuickStartStepsProps = {
  steps: QuickStartStep[];
};

function StepCard({ step, title, description, to, actionLabel, index }: QuickStartStep & { index: number }) {
  return (
    <motion.article
      className={styles.card}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
      whileHover={hoverLift}
      whileTap={tapPress}
      transition={baseTransition}
    >
      <div className={styles.step}>{step}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={to} className={`button button--primary ${styles.button}`}>
        {actionLabel}
      </Link>
    </motion.article>
  );
}

export default function QuickStartSteps({ steps }: QuickStartStepsProps) {
  return (
    <div className={styles.grid}>
      {steps.map((step, index) => (
        <StepCard key={step.title} {...step} index={index} />
      ))}
    </div>
  );
}
