import type { ReactNode } from 'react';

type ComparisonItem = {
  title: string;
  badge?: string;
  children: ReactNode;
};

type ComparisonGridProps = {
  left: ComparisonItem;
  right: ComparisonItem;
};

function Panel({ title, badge, children }: ComparisonItem) {
  return (
    <div className="glass-card" style={{ padding: '1rem', borderRadius: '20px', height: '100%' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {badge ? (
          <span style={{ padding: '0.22rem 0.5rem', borderRadius: '999px', background: 'var(--brand-gradient-soft)', fontSize: '0.76rem', fontWeight: 700 }}>
            {badge}
          </span>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function ComparisonGrid({ left, right }: ComparisonGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem',
        margin: '1.25rem 0',
      }}
    >
      <Panel {...left} />
      <Panel {...right} />
    </div>
  );
}
