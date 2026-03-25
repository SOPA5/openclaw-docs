import Link from '@docusaurus/Link';
import styles from './FeatureRibbon.module.css';

type FeatureRibbonItem = {
  label: string;
  value: string;
  to: string;
};

type FeatureRibbonProps = {
  items: FeatureRibbonItem[];
};

export default function FeatureRibbon({ items }: FeatureRibbonProps) {
  return (
    <div className={styles.ribbon}>
      {items.map((item) => (
        <Link key={item.label} to={item.to} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
