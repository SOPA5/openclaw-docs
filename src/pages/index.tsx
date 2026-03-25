import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  baseTransition,
  fadeUpVariants,
  hoverLift,
  scaleInVariants,
  tapPress,
} from '@site/src/lib/motion';
import styles from './index.module.css';

type LearningPath = {
  icon: string;
  title: string;
  desc: string;
  to: string;
  color: string;
};

type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: string;
};

const learningPaths: LearningPath[] = [
  {
    icon: '🚀',
    title: '시작하기',
    desc: '처음이라면 여기서부터!\n10분이면 설치 완료',
    to: '/start/getting-started',
    color: 'var(--brand-indigo)',
  },
  {
    icon: '⚙️',
    title: '설치 가이드',
    desc: '내 컴퓨터에 딱 맞는\n설치 방법 찾기',
    to: '/install/',
    color: 'var(--brand-violet)',
  },
  {
    icon: '💬',
    title: '채널 연동',
    desc: '텔레그램, 디스코드 등\n20개+ 메신저 연결',
    to: '/channels/',
    color: 'var(--brand-cyan)',
  },
  {
    icon: '🤖',
    title: 'AI 모델',
    desc: 'Claude, GPT, Gemini 등\n34개+ 모델 사용',
    to: '/providers/',
    color: '#f472b6',
  },
  {
    icon: '🛡️',
    title: '보안 & 관리',
    desc: '안전하게 운영하는 방법',
    to: '/gateway/security',
    color: '#34d399',
  },
  {
    icon: '📚',
    title: '핵심 개념',
    desc: 'OpenClaw가 어떻게\n작동하는지 이해하기',
    to: '/concepts/architecture',
    color: '#fb923c',
  },
];

const stats: Stat[] = [
  { label: '채널', value: 20, suffix: '+', icon: '💬' },
  { label: 'AI 모델', value: 34, suffix: '+', icon: '🤖' },
  { label: '플랫폼', value: 6, suffix: '개', icon: '🌐' },
  { label: '오픈소스', value: 100, suffix: '%', icon: '🔓' },
];

function useCountUp(target: number, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let animationFrameId = 0;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, prefersReducedMotion, shouldStart, target]);

  return count;
}

function SectionHeader({ title, subtitle, inView }: { title: string; subtitle: string; inView: boolean }) {
  return (
    <motion.div
      className={styles.sectionHeader}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionSubtitle}>{subtitle}</p>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.orbContainer} aria-hidden>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.heroGlass}>
        <div className={styles.heroContent}>
          <motion.div className={styles.heroBadge} initial="hidden" animate="visible" custom={0} variants={fadeUpVariants}>
            🦞 OpenClaw Platform
          </motion.div>

          <motion.h1 className={styles.heroTitle} initial="hidden" animate="visible" custom={1} variants={fadeUpVariants}>
            OpenClaw와 함께
            <br />
            <span className={styles.gradientText}>AI의 세계로</span>
          </motion.h1>

          <motion.p className={styles.heroSubtitle} initial="hidden" animate="visible" custom={2} variants={fadeUpVariants}>
            누구나 쉽게 시작하는 AI 에이전트 플랫폼
          </motion.p>

          <motion.div className={styles.heroCTA} initial="hidden" animate="visible" custom={3} variants={fadeUpVariants}>
            <Link to="/start/getting-started" className={`button button--primary button--lg ${styles.ctaPrimary}`}>
              🚀 지금 시작하기
            </Link>
            <Link to="/channels/" className={`button button--secondary button--lg ${styles.ctaSecondary}`}>
              💼 사용 사례 보기
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LearningCard({ icon, title, desc, to, color, index }: LearningPath & { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      className={styles.learningCard}
      variants={scaleInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      whileHover={prefersReducedMotion ? undefined : hoverLift}
      whileTap={prefersReducedMotion ? undefined : tapPress}
      transition={baseTransition}
    >
      <div className={styles.cardIconWrapper} style={{ '--card-color': color } as CSSProperties}>
        <span className={styles.cardIcon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <Link to={to} className={`button button--primary ${styles.cardButton}`}>
        배우러 가기 →
      </Link>
    </motion.article>
  );
}

function LearningPathsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.learningSection} ref={ref}>
      <SectionHeader title="학습 경로" subtitle="원하는 주제를 골라 바로 시작하세요" inView={inView} />
      <div className={styles.learningGrid}>
        {learningPaths.map((path, index) => (
          <LearningCard key={path.title} {...path} index={index} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ label, value, suffix, icon, index }: Stat & { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const count = useCountUp(value, 1500, inView);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={styles.statCard}
      variants={scaleInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      whileHover={prefersReducedMotion ? undefined : hoverLift}
      transition={baseTransition}
    >
      <span className={styles.statIcon}>{icon}</span>
      <div className={styles.statValue}>
        {count}
        {suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </motion.div>
  );
}

function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.statsSection} ref={ref}>
      <SectionHeader title="OpenClaw 현황" subtitle="숫자로 보는 OpenClaw" inView={inView} />
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      className={styles.ctaSection}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerOrb} aria-hidden />
        <h2 className={styles.ctaTitle}>지금 바로 시작해보세요</h2>
        <p className={styles.ctaDesc}>10분이면 첫 번째 AI 에이전트를 실행할 수 있습니다</p>
        <div className={styles.ctaButtons}>
          <Link to="/start/getting-started" className={`button button--primary button--lg ${styles.ctaPrimary}`}>
            🚀 무료로 시작하기
          </Link>
          <Link to="/concepts/architecture" className={`button button--secondary button--lg ${styles.ctaSecondary}`}>
            📖 개념 먼저 보기
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="OpenClaw AI 에이전트 플랫폼 완벽 가이드 — 누구나 쉽게 시작하는 AI 에이전트 플랫폼"
    >
      <HeroSection />
      <main className={styles.mainContent}>
        <LearningPathsSection />
        <StatsSection />
        <BottomCTA />
      </main>
    </Layout>
  );
}
