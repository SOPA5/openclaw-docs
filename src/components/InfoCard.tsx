import type { ReactNode } from 'react';

type Tone = 'indigo' | 'cyan' | 'green' | 'amber';

type InfoCardProps = {
  title: string;
  icon?: string;
  tone?: Tone;
  children: ReactNode;
};

const toneMap: Record<Tone, { border: string; soft: string }> = {
  indigo: { border: '#6366f1', soft: 'rgba(99, 102, 241, 0.1)' },
  cyan: { border: '#06b6d4', soft: 'rgba(6, 182, 212, 0.1)' },
  green: { border: '#22c55e', soft: 'rgba(34, 197, 94, 0.1)' },
  amber: { border: '#f59e0b', soft: 'rgba(245, 158, 11, 0.12)' },
};

export default function InfoCard({ title, icon = '✨', tone = 'indigo', children }: InfoCardProps) {
  const theme = toneMap[tone];

  return (
    <section
      className="glass-card"
      style={{
        padding: '1.15rem 1.2rem',
        borderRadius: '22px',
        margin: '1rem 0',
        borderTop: `3px solid ${theme.border}`,
        background: `linear-gradient(135deg, ${theme.soft}, rgba(255,255,255,0.02))`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.55rem' }}>
        <span aria-hidden style={{ fontSize: '1.1rem' }}>{icon}</span>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}
