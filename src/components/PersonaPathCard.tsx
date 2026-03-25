import type { CSSProperties } from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { baseTransition, scaleInVariants } from '@site/src/lib/motion';
import styles from './PersonaPathCard.module.css';

type PersonaPathCardProps = {
  icon: string;
  title: string;
  summary: string;
  highlights: string[];
  primaryTo: string;
  primaryLabel: string;
  secondaryTo: string;
  secondaryLabel: string;
  accent: string;
  index: number;
};

export default function PersonaPathCard({
  icon,
  title,
  summary,
  highlights,
  primaryTo,
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  accent,
  index,
}: PersonaPathCardProps) {
  return (
    <motion.article
      className={styles.card}
      style={{ '--persona-accent': accent } as CSSProperties}
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
      transition={baseTransition}
    >
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.summary}>{summary}</p>
        </div>
      </div>

      <ul className={styles.list}>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className={styles.actions}>
        <Link to={primaryTo} className={`button button--primary ${styles.primaryButton}`}>
          {primaryLabel}
        </Link>
        <Link to={secondaryTo} className={`button button--secondary ${styles.secondaryButton}`}>
          {secondaryLabel}
        </Link>
      </div>
    </motion.article>
  );
}
