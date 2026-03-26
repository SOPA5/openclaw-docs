import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function FeedbackPage(): ReactNode {
  return (
    <Layout title="피드백 허브" description="문서 사용 중 막힌 지점을 모으는 허브">
      <main className="container margin-vert--xl">
        <div className="glass-card liquid-container" style={{padding:'1.5rem', maxWidth: '920px', margin:'0 auto'}}>
          <h1>📝 피드백 허브</h1>
          <p>
            문서를 읽다가 막히거나, 검색으로 원하는 내용을 못 찾았거나, 설치가 헷갈렸다면 여기서 알려주세요.
            작은 피드백이 문서를 더 똑똑하게 만듭니다.
          </p>

          <div className="row" style={{marginTop:'1rem', gap:'1rem'}}>
            <div className="col col--6">
              <div className="glass-card" style={{padding:'1rem', height:'100%'}}>
                <h3>🚧 설치/온보딩이 막혔어요</h3>
                <p>어느 단계에서 막혔는지, 어떤 환경인지(WSL2 / Windows / macOS / Linux)를 적어주세요.</p>
                <ul>
                  <li>현재 문서 제목</li>
                  <li>내 환경</li>
                  <li>막힌 단계</li>
                  <li>에러 메시지</li>
                </ul>
              </div>
            </div>
            <div className="col col--6">
              <div className="glass-card" style={{padding:'1rem', height:'100%'}}>
                <h3>🔎 검색이 잘 안 됐어요</h3>
                <p>어떤 검색어를 넣었는데 못 찾았는지 적어주세요. FAQ와 guides를 더 잘 키우는 데 큰 도움이 됩니다.</p>
                <ul>
                  <li>검색어</li>
                  <li>찾고 싶었던 답</li>
                  <li>기대한 문서 종류</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{padding:'1rem', marginTop:'1rem'}}>
            <h3>💡 지금 바로 전달하는 방법</h3>
            <p>아래 항목을 복사해서 커뮤니티나 운영 채널에 전달하면 바로 분류하기 쉽습니다.</p>
            <pre style={{whiteSpace:'pre-wrap'}}>{`[문서 피드백]
- 문서 URL:
- 내 환경: WSL2 / Windows Native / macOS / Linux
- 문제 유형: 설치 / 검색 / 용어 / 다음 단계 / 기타
- 자세한 내용:
- 기대했던 것:`}</pre>
          </div>

          <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'1rem'}}>
            <Link className="neo-button button button--primary" to="/start/getting-started">다시 시작하기</Link>
            <Link className="neo-button button button--secondary" to="/install/">설치 개요 보기</Link>
            <Link className="neo-button button button--secondary" to="/help/faq">FAQ 보기</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
