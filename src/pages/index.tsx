import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/start/getting-started">
            📖 문서 시작하기 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="OpenClaw AI 에이전트 플랫폼 완벽 가이드">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>🚀 시작하기</h3>
                </div>
                <div className="card__body">
                  <p>OpenClaw를 처음 사용하는 분들을 위한 가이드입니다.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/start/getting-started">
                    바로 시작
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>⚙️ 설치</h3>
                </div>
                <div className="card__body">
                  <p>Docker, Nix, Ansible 등 다양한 설치 방법을 안내합니다.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/install/">
                    설치 가이드
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>💬 채널</h3>
                </div>
                <div className="card__body">
                  <p>Telegram, Discord, Slack 등 12개 채널 연동 방법입니다.</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/channels/">
                    채널 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
