import type { ReactNode } from 'react';
import { useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { motion, useInView } from 'framer-motion';
import { fadeUpVariants } from '@site/src/lib/motion';
import FeatureRibbon from '@site/src/components/FeatureRibbon';
import PersonaPathCard from '@site/src/components/PersonaPathCard';
import QuickStartSteps from '@site/src/components/QuickStartSteps';
import styles from './index.module.css';

type PersonaPath = {
  icon: string;
  title: string;
  summary: string;
  highlights: string[];
  primaryTo: string;
  primaryLabel: string;
  secondaryTo: string;
  secondaryLabel: string;
  accent: string;
};

const quickStartSteps = [
  {
    step: 'STEP 1',
    title: '10분 설치 시작',
    description: '권장 설치 스크립트와 온보딩 흐름만 따라가면 첫 실행까지 빠르게 끝낼 수 있습니다.',
    to: '/install/',
    actionLabel: '설치 바로 시작',
  },
  {
    step: 'STEP 2',
    title: '내 환경에 맞는 설치 찾기',
    description: 'macOS, Linux, Windows WSL2, PowerShell 중 내 환경에 맞는 경로를 바로 고를 수 있습니다.',
    to: '/install/',
    actionLabel: '설치 경로 비교',
  },
  {
    step: 'STEP 3',
    title: '처음 질문 보내보기',
    description: '설치가 끝났다면 첫 질문 예시와 채널 연결 흐름을 따라 바로 대화를 시작해보세요.',
    to: '/start/getting-started',
    actionLabel: '첫 질문 가이드',
  },
];

const personaPaths: PersonaPath[] = [
  {
    icon: '🌱',
    title: '나는 처음이다',
    summary: '설치부터 첫 질문까지 가장 짧은 입문 경로입니다.',
    highlights: ['시작하기 → 설치 개요 → 채널 페어링 순서로 진행', '명령어를 그대로 복사해서 따라하기 좋음', '첫 성공 경험을 만드는 데 집중'],
    primaryTo: '/start/getting-started',
    primaryLabel: '입문 경로 시작',
    secondaryTo: '/install/',
    secondaryLabel: '설치 먼저 보기',
    accent: '#6366f1',
  },
  {
    icon: '✅',
    title: '이미 설치했다',
    summary: '지금 필요한 것은 연결, 첫 사용, 운영 점검입니다.',
    highlights: ['대시보드와 gateway 상태 확인', '텔레그램/디스코드 등 채널 연결', '실전 사용 사례와 운영 문서로 바로 이동'],
    primaryTo: '/start/pairing',
    primaryLabel: '채널 연결하기',
    secondaryTo: '/start/use-cases',
    secondaryLabel: '활용 사례 보기',
    accent: '#06b6d4',
  },
  {
    icon: '🧭',
    title: '내 환경이 헷갈린다',
    summary: '운영체제와 설치 방식부터 다시 정리해주는 선택형 경로입니다.',
    highlights: ['WSL2, PowerShell, npm 직접 설치 흐름 비교', '고급 설치 방식(Docker/Nix/Ansible)까지 연결', '헷갈리는 선택지를 먼저 줄여줌'],
    primaryTo: '/install/',
    primaryLabel: '환경별 설치 찾기',
    secondaryTo: '/platforms/',
    secondaryLabel: '플랫폼 문서 보기',
    accent: '#8b5cf6',
  },
];

const ribbonItems = [
  { value: '20+', label: '채널 연결', to: '/channels/' },
  { value: '34+', label: '모델 지원', to: '/providers/' },
  { value: '3단계', label: '첫 실행 흐름', to: '/start/getting-started' },
  { value: '10분', label: '권장 설치 경로', to: '/install/' },
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref} className={styles.sectionHeader} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUpVariants}>
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
            🦞 OpenClaw Platform · 실제 입문 테스트 흐름 반영
          </motion.div>

          <motion.h1 className={styles.heroTitle} initial="hidden" animate="visible" custom={1} variants={fadeUpVariants}>
            설치부터 첫 질문까지,
            <br />
            <span className={styles.gradientText}>OpenClaw를 가장 빠르게 시작하는 길</span>
          </motion.h1>

          <motion.p className={styles.heroSubtitle} initial="hidden" animate="visible" custom={2} variants={fadeUpVariants}>
            처음인 사람도, 이미 설치한 사람도, 내 환경이 헷갈리는 사람도 바로 다음 행동을 고를 수 있게 구성했습니다.
          </motion.p>

          <motion.div className={styles.heroCTA} initial="hidden" animate="visible" custom={3} variants={fadeUpVariants}>
            <Link to="/install/" className={`button button--primary button--lg ${styles.ctaPrimary}`}>
              10분 설치 시작
            </Link>
            <Link to="/start/getting-started" className={`button button--secondary button--lg ${styles.ctaSecondary}`}>
              처음 질문 보내보기
            </Link>
          </motion.div>

          <motion.div className={styles.heroMeta} initial="hidden" animate="visible" custom={4} variants={fadeUpVariants}>
            <FeatureRibbon items={ribbonItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      <SectionHeader title="빠른 시작 3단계" subtitle="처음 방문한 사용자가 가장 먼저 해야 할 일만 남겼습니다." />
      <QuickStartSteps steps={quickStartSteps} />
    </section>
  );
}

function PersonaPathsSection() {
  return (
    <section className={styles.pathSection}>
      <SectionHeader title="지금 내 상황에 맞는 경로 선택" subtitle="실제 사용자 테스트용으로 많이 나오는 세 가지 시작 상황을 바로 분리했습니다." />
      <div className={styles.pathGrid}>
        {personaPaths.map((path, index) => (
          <PersonaPathCard key={path.title} {...path} index={index} />
        ))}
      </div>
    </section>
  );
}

function LearningRoutesSection() {
  return (
    <section className={styles.routeSection}>
      <SectionHeader title="학습 경로를 한 번에 보기" subtitle="설치, 첫 실행, 운영, 개념 이해까지 필요한 문서로 바로 이동할 수 있습니다." />
      <div className={styles.routeGrid}>
        <article className={styles.routeCard}>
          <h3>초보자용</h3>
          <p>설치 → 온보딩 → 첫 질문 → 채널 연결까지 가장 짧은 학습 흐름</p>
          <div className={styles.routeLinks}>
            <Link to="/install/">설치 개요</Link>
            <Link to="/start/getting-started">시작하기</Link>
            <Link to="/start/pairing">채널 페어링</Link>
          </div>
        </article>
        <article className={styles.routeCard}>
          <h3>운영자용</h3>
          <p>게이트웨이, 보안, 대시보드, 운영 점검 중심으로 빠르게 이동</p>
          <div className={styles.routeLinks}>
            <Link to="/gateway/security">보안</Link>
            <Link to="/platforms/">플랫폼 가이드</Link>
            <Link to="/channels/">채널 목록</Link>
          </div>
        </article>
        <article className={styles.routeCard}>
          <h3>개발자용</h3>
          <p>아키텍처, 제공자, 설치 옵션, 실험적 환경까지 연결</p>
          <div className={styles.routeLinks}>
            <Link to="/concepts/architecture">아키텍처</Link>
            <Link to="/providers/">모델 제공자</Link>
            <Link to="/install/docker">Docker</Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerOrb} aria-hidden />
        <h2 className={styles.ctaTitle}>이제 바로 다음 행동만 고르면 됩니다</h2>
        <p className={styles.ctaDesc}>설치가 먼저면 설치, 환경이 헷갈리면 비교, 이미 설치했다면 첫 질문과 채널 연결로 이어가세요.</p>
        <div className={styles.ctaButtons}>
          <Link to="/install/" className={`button button--primary button--lg ${styles.ctaPrimary}`}>
            내 환경에 맞는 설치 찾기
          </Link>
          <Link to="/start/getting-started" className={`button button--secondary button--lg ${styles.ctaSecondary}`}>
            처음 질문 보내보기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="OpenClaw 설치, 온보딩, 첫 질문까지 이어지는 입문형 랜딩 페이지">
      <HeroSection />
      <main className={styles.mainContent}>
        <QuickStartSection />
        <PersonaPathsSection />
        <LearningRoutesSection />
        <BottomCTA />
      </main>
    </Layout>
  );
}
