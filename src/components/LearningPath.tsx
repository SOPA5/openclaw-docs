import Link from '@docusaurus/Link';

type PathItem = {
  title: string;
  to: string;
  state?: 'done' | 'current' | 'next';
  note?: string;
};

type LearningPathProps = {
  title?: string;
  items: PathItem[];
};

const stateLabel = {
  done: '완료',
  current: '현재',
  next: '다음',
} as const;

const stateStyle = {
  done: { bg: 'rgba(34, 197, 94, 0.12)', color: '#16a34a' },
  current: { bg: 'rgba(99, 102, 241, 0.12)', color: '#4f46e5' },
  next: { bg: 'rgba(6, 182, 212, 0.12)', color: '#0891b2' },
} as const;

export default function LearningPath({ title = '추천 학습 경로', items }: LearningPathProps) {
  return (
    <div className="glass-card" style={{ padding: '1.25rem', margin: '1.25rem 0', borderRadius: '24px' }}>
      <h2 style={{ marginBottom: '0.85rem' }}>{title}</h2>
      <div style={{ display: 'grid', gap: '0.9rem' }}>
        {items.map((item, index) => {
          const state = item.state ?? 'next';
          const tone = stateStyle[state];
          return (
            <div
              key={`${item.to}-${index}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0.85rem',
                alignItems: 'start',
              }}
            >
              <div style={{ display: 'grid', justifyItems: 'center', gap: '0.35rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '999px',
                    background: state === 'done' ? '#22c55e' : state === 'current' ? 'var(--brand-gradient)' : 'rgba(148,163,184,0.32)',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                  }}
                >
                  {index + 1}
                </div>
                {index < items.length - 1 ? <div aria-hidden style={{ width: '2px', minHeight: '2.2rem', background: 'rgba(148,163,184,0.35)' }} /> : null}
              </div>

              <div style={{ paddingTop: '0.1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                  <Link to={item.to} style={{ fontWeight: 800, textDecoration: 'none' }}>{item.title}</Link>
                  <span
                    style={{
                      display: 'inline-flex',
                      padding: '0.22rem 0.55rem',
                      borderRadius: '999px',
                      background: tone.bg,
                      color: tone.color,
                      fontSize: '0.76rem',
                      fontWeight: 700,
                    }}
                  >
                    {stateLabel[state]}
                  </span>
                </div>
                {item.note ? <div style={{ fontSize: '0.92rem', opacity: 0.8 }}>{item.note}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
