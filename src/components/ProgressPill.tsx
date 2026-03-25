import type { CSSProperties } from 'react';

type Level = 'Beginner' | 'Core' | 'Advanced';

type ProgressPillProps = {
  level: Level;
  progress?: number;
  label?: string;
};

const levelMap: Record<Level, { emoji: string; accent: string; soft: string }> = {
  Beginner: { emoji: '🌱', accent: '#22c55e', soft: 'rgba(34, 197, 94, 0.12)' },
  Core: { emoji: '🧭', accent: '#6366f1', soft: 'rgba(99, 102, 241, 0.12)' },
  Advanced: { emoji: '🚀', accent: '#f59e0b', soft: 'rgba(245, 158, 11, 0.14)' },
};

function clampProgress(progress?: number) {
  if (typeof progress !== 'number' || Number.isNaN(progress)) return 0;
  return Math.min(100, Math.max(0, progress));
}

export default function ProgressPill({ level, progress = 0, label }: ProgressPillProps) {
  const theme = levelMap[level];
  const value = clampProgress(progress);

  return (
    <div
      className="glass-card"
      style={{
        padding: '1rem 1.1rem',
        margin: '1rem 0 1.25rem',
        borderRadius: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            aria-hidden
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '999px',
              background: theme.soft,
              fontSize: '1rem',
            }}
          >
            {theme.emoji}
          </span>
          <div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.15rem' }}>학습 단계</div>
            <strong>{label ?? `${level} 문서`}</strong>
          </div>
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.45rem 0.7rem',
            borderRadius: '999px',
            background: theme.soft,
            color: theme.accent,
            fontWeight: 800,
            fontSize: '0.82rem',
          }}
        >
          {level}
        </span>
      </div>

      <div
        aria-label={`학습 진행도 ${value}%`}
        style={{
          position: 'relative',
          width: '100%',
          height: '0.7rem',
          borderRadius: '999px',
          background: 'rgba(148, 163, 184, 0.18)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: '100%',
            borderRadius: '999px',
            background: `linear-gradient(90deg, ${theme.accent}, #06b6d4)`,
          } as CSSProperties}
        />
      </div>

      <div style={{ marginTop: '0.55rem', fontSize: '0.85rem', opacity: 0.75 }}>
        현재 학습 경로 기준 <strong>{value}%</strong> 지점
      </div>
    </div>
  );
}
