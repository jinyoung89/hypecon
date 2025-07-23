import React from 'react';
import aboutSec02Bg from '../assets/images/about_sec02_bg.png';
import aboutSec04Img from '../assets/images/about_sec04_img.png';
import '../AboutPage.css';

function AboutPage() {
  return (
    <>
      {/* 상단 소개 섹션 */}
      <section className="about-section about-section-intro">
        <div className="about-title-main">
          ‘HYPECON STYLE WEEK SEOUL 2026’은<br/>
          <span className="about-title-strong">Z세대가 ‘입고, 꾸미고, 찍고, 퍼뜨리는’<br/></span>
          진짜 반응이 터지는 체험형 스타일 패션·뷰티 페어입니다.
        </div>
        <div className="about-intro-desc">
          120여 개의 트렌디한 패션·뷰티 브랜드가<br/>
          Z세대 중심의 콘텐츠, 커머스, 테크와 함께 어우러져<br/>
          온라인에선 불가능한 실시간 스타일 경험을 만듭니다.<br/><br/>
          10만 명의 관람객은 스타일을 직접 입어보고,<br/>
          즉각적인 반응을 SNS에 퍼뜨리며, 구매로 이어지는<br/>
          실시간 소비의 흐름을 만들어냅니다.<br/><br/>
          브랜드는 현장에서 팬덤과 매출 성장을 확인하고,<br/>
          바이어는 진짜 반응을 직접 체감합니다.<br/>
        </div>
        <div className="about-intro-highlight">
          이곳이 바로,<br/>
          ‘HYPECON STYLE WEEK SEOUL 2026’ 입니다.
        </div>
      </section>

      {/* WHY BRANDS CHOOSE HYPECON 섹션 */}
      <section className="about-section about-section-why" style={{background: `url(${aboutSec02Bg}) center/cover no-repeat`}}>
        <div className="about-why-title">
          WHY BRANDS<br/>CHOOSE HYPECON
        </div>
        <div className="about-why-desc">
          <span className="about-why-highlight">스타일이 판매되고, 브랜드가 수출되는</span><br/>
          대한민국 최초의 B2C·B2B 하이브리드 패션·뷰티 페어
        </div>
      </section>

      {/* Z세대 경험 소비 강조 섹션 */}
      <section className="about-section about-section-experience">
        <div className="about-experience-badge">
          입고, 찍고, 퍼지고, 팔리는 브랜드의 <span>리얼 무대</span>
        </div>
        <div className="about-experience-title">
          Z세대는 제품이 아닌, ‘경험’을 소비합니다
        </div>
        <div className="about-experience-desc">
          HYPECON STYLE WEEK SEOUL 2026은 브랜드가 단순히 보여지는 곳이 아닙니다.<br/>
          입혀지고, 반응이 콘텐츠가 되고, 판매로 이어지며, 국내외 팬과 브랜드가 직접 연결되는 플랫폼입니다.
        </div>
        <div className="about-experience-cards">
          {[
            {
              title: 'Z세대 브랜드\n큐레이션',
              desc: 'Z세대가 사랑하는\n브랜드만 큐레이션',
            },
            {
              title: '피팅 기반\n쇼핑',
              desc: '직접 입어보고\n피팅 기반 소비 경험',
            },
            {
              title: '실구매\n전환',
              desc: '전시와 소비가\n동시에 일어나는\n체험형 플랫폼',
            },
            {
              title: 'SNS\n콘텐츠 허브',
              desc: '10만명의 관람객이\n공유하며 자발적\n바이럴 생성',
            },
            {
              title: '글로벌 유통\n파급력',
              desc: 'K-브랜드가 콘텐츠로 퍼지고,\n실질적 바이어 매칭,\n실전형 유통 무대',
            },
          ].map((item, idx) => (
            <div className={`about-card ${idx % 2 === 0 ? 'about-card-dark' : 'about-card-main'}`} key={idx}>
              <div className="about-card-title">{item.title}</div>
              <div className="about-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 도파민 쇼핑+콘텐츠 스타일 페어 섹션 */}
      <section className="about-section about-2col-section">
        <div className="about-2col-text">
          <div className="about-dopamine-title">
            입어보고, 바르고,<br/>
            꾸미고, 공유하고,<br/>
            팬이 되는
          </div>
          <div className="about-dopamine-strong">
            도파민 쇼핑+<br/>
            콘텐츠 스타일 페어
          </div>
        </div>
        <div className="about-2col-img">
          <img src={aboutSec04Img} alt="도파민 쇼핑+콘텐츠 스타일 페어" />
        </div>
      </section>

      {/* 6개 항목 리스트 섹션 */}
      <section className="about-section about-list-section">
        <div className="about-list-wrap">
          {[
            {
              title: '실감 체험 콘텐츠',
              desc: <><span style={{fontWeight:400}}>'입어보고, 바르고, 꾸미고' → 직접 경험 가능한 스타일 콘텐츠<br/></span><span style={{fontWeight:700}}>제품이 아닌 경험을 판매하는 구조</span></>,
              strong: '제품이 아닌 경험을 판매하는 구조',
            },
            {
              title: '참여형 콘텐츠 구조',
              desc: <><span style={{fontWeight:400}}>릴스 챌린지, 스타일링(컬러인듯 데이트), 커플 이벤트, 투표 콘텐츠<br/></span><span style={{fontWeight:700}}>관람객이 콘텐츠 주인공이 되는 구조</span></>,
              strong: '관람객이 콘텐츠 주인공이 되는 구조',
            },
            {
              title: '자동 확산 설계',
              desc: <><span style={{fontWeight:400}}>활동 포인트 + 릴스/챌린지 + 굿즈/인증샷 유도<br/></span><span style={{fontWeight:700}}>SNS 확산이 자연스럽게 일어나는 시스템 내장</span></>,
              strong: 'SNS 확산이 자연스럽게 일어나는 시스템 내장',
            },
            {
              title: '도파민 자극 콘텐츠',
              desc: <><span style={{fontWeight:400}}>피팅 입력석 캠, 커스터마이즈, 타임세일<br/></span><span style={{fontWeight:700}}>즉시 반응형 콘텐츠 중심</span><span style={{fontWeight:400}}>, Z세대 ‘순간 반응’ 최적화</span></>,
              strong: '즉시 반응형 콘텐츠 중심, Z세대 ‘순간 반응’ 최적화',
            },
            {
              title: '브랜드 연동 구조',
              desc: <><span style={{fontWeight:400}}>모든 체험 콘텐츠는 브랜드와 협업 구조<br/></span><span style={{fontWeight:700}}>체험 → 콘텐츠 → 실구매 → 팬덤 유입까지 연결</span></>,
              strong: '체험 → 콘텐츠 → 실구매 → 팬덤 유입까지 연결',
            },
            {
              title: '글로벌 확장성',
              desc: <><span style={{fontWeight:400}}>왕홍/틱톡커/바이어 연계 콘텐츠<br/>브랜드 쇼, 인터뷰, 세미나, 콘텐츠 수출 기획까지 내장된 구조</span></>,
              strong: '브랜드 쇼, 인터뷰, 세미나, 콘텐츠 수출 기획까지 내장된 구조',
            },
          ].map((item, idx) => (
            <div className="about-list-row" key={item.title}>
              <div className="about-list-title"><span>·</span>{item.title}</div>
              <div className="about-list-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 글로벌 브랜드 어필 섹션 */}
      <section className="about-section about-global-section">
        <div className="about-global-desc">
          온라인을 넘어,<br/>
          브랜드와 팬덤이 직접 연결되는 순간<br/>
          그 시작이 바로 <span>HYPECON</span>입니다.
        </div>
        <div className="about-global-highlight">
          <span>HYPECON</span>에 선다는 건,<br/>
          단지 참가가 아닌 글로벌 진출의 시작점입니다.
        </div>
        <div className="about-global-strong">
          지금, 전 세계가 하입콘에서<br/>
          여러분의 브랜드를 주목합니다.
        </div>
      </section>

      {/* 반응형 스타일은 AboutPage.css에서 관리 */}
    </>
  );
}

export default AboutPage; 