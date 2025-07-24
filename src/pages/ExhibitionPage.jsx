import React from 'react';
import './ExhibitionPage.css';
import exSec01Img from '../assets/images/ex_sec01.jpg';
import exSec05Img from '../assets/images/ex_sec05.jpg';
import exSec07Img from '../assets/images/ex_sec07.jpg';
import exIc1 from '../assets/images/ex_ic_1.png';
import exIc2 from '../assets/images/ex_ic_2.png';
import exIc3 from '../assets/images/ex_ic_3.png';
import exIc4 from '../assets/images/ex_ic_4.png';

function ExhibitionPage() {
  return (
    <div className="exhibition-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="exhibition-hero-section" style={{backgroundImage: `url(${exSec01Img})`}}>
        <div className="exhibition-hero-overlay"></div>
        <div className="exhibition-hero-text">
          <div className="exhibition-hero-title">
            4일간, 매일 새로운 경험과 반응이 펼쳐집니다.<br/>
            브랜드는 콘텐츠가 되고, 참관객은 팬덤이 됩니다.
          </div>
        </div>
      </section>

      {/* 행사 개요 섹션 */}
      <section className="exhibition-info-section">
        <div className="exhibition-info-inner">
          <div className="exhibition-info-title">행사 개요</div>
          <div className="exhibition-info-table">
            <div className="exhibition-info-row"><b>행사명</b> HYPECON STYLE WEEK SEOUL 2026</div>
            <div className="exhibition-info-row"><b>일시</b> 2026년 2월 19일 (THU) ~ 22일 (SUN)</div>
            <div className="exhibition-info-row"><b>장소</b> 서울 COEX C HALL</div>
            <div className="exhibition-info-row"><b>주최</b> (주)플레네스 / 공동주관 : (주)플레네스, (주)그래</div>
            <div className="exhibition-info-row"><b>대상</b> Z세대 소비자, 브랜드, 바이어, 인플루언서, 왕홍, 틱토커, 미디어 관계자</div>
            <div className="exhibition-info-row"><b>관람 규모</b> 최대 10만 명 한정 입장 마감 예정</div>
            <div className="exhibition-info-row"><b>참가 브랜드</b> 스트릿 / 컨템포러리 / 키치 / Y2K / 모던 / 유니섹스 / 악세서리 /<br/>슈즈 / 가방 / 뷰티(스킨케어, 색조, 향수 등)</div>
          </div>
        </div>
      </section>

      {/* 존 구성 섹션 */}
      <section className="exhibition-zone-section">
        <div className="exhibition-info-inner">
          <div className="exhibition-info-title">존 구성</div>
          <div className="exhibition-info-table exhibition-zone-table">
            <div className="exhibition-zone-row"><b>HYPESHY</b> 스트릿 · 유니섹스 · 그래픽 말 없는 간지, 조용히 센 스트릿</div>
            <div className="exhibition-zone-row"><b>COOLSHY</b> 미니멀 · 시크 · 감성의 무심하고 정제된 도시 감성 룩</div>
            <div className="exhibition-zone-row"><b>SUPERSHY</b> 프리미엄 · 감성 · 하이엔드 디자이너 브랜드</div>
            <div className="exhibition-zone-row"><b>POPSHY</b> 컬러풀 · Y2K · 키치 튀고 싶은 유스 룩, 릴스 특화 스타일</div>
            <div className="exhibition-zone-row"><b>FITSHY</b> 스포츠·애슬레저 중심의 퍼포먼스 · 요가 브랜드</div>
            <div className="exhibition-zone-row"><b>PICKSHY</b> 스타일을 완성하는 주얼리 · 가방 · 슈즈 중심 브랜드</div>
            <div className="exhibition-zone-row"><b>BEAUTYSHY</b> MZ 인기 종합 코스메틱 브랜드</div>
            <div className="exhibition-zone-row"><b>INDIESHY</b> 인디 코스메틱 브랜드</div>
            <div className="exhibition-zone-row"><b>SKINSHY</b> 기초 중심 · 클린 뷰티 · 스킨케어 브랜드</div>
            <div className="exhibition-zone-row"><b>GLOWSHY</b> 색조 · 네일 · 향 브랜드</div>
            <div className="exhibition-zone-row" style={{marginTop: '2.2rem', fontWeight: 700}}>
              특별 큐레이션 <b>STARSHY</b> 셀럽 중심 큐레이션 존
            </div>
            <div className="exhibition-zone-row" style={{fontWeight: 400}}>
              · 그 외 RUNWAY / 포토존 / F&B / BUYER LOUNGE / 스타일링룸 /<br/>  셀럽룸 / 세미나룸 / 공유 피팅룸
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS HIGHLIGHT 섹션 */}
      <section className="exhibition-programs-section">
        <div className="exhibition-programs-inner">
          <h2 className="exhibition-programs-title">PROGRAMS HIGHLIGHT</h2>
          <div className="exhibition-programs-list">
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc1} alt="Opening Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.19 | OPENING DAY</h3>
                <h4 className="exhibition-programs-subtitle">오프닝 퍼포먼스, AI 런웨이쇼, VIP&셀럽 등장,<br/>하이퍼 포토 스팟 오픈</h4>
                <p className="exhibition-programs-desc">브랜드와 팬모두의 주목도를 높이는 미디어&콘텐츠 중심 첫 날<br/>글로벌 메가 인플루언서 중심 콘텐츠 제작 집중</p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc2} alt="Signature Showcase Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.20 | SIGNATURE SHOWCASE DAY</h3>
                <h4 className="exhibition-programs-subtitle">쇼케이스, 브랜드 컨퍼런스</h4>
                <p className="exhibition-programs-desc">주요 브랜드가 중심이 되는 HYPECON의 메인스테이지<br/>현장 비즈니스 미팅과 콘텐츠 제작 동시 진행</p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc3} alt="Fan Experience Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.21 | FAN EXPERIENCE DAY</h3>
                <h4 className="exhibition-programs-subtitle">스타일 챌린지, 셀피 이벤트,<br/>인플루언서 라이브커머스, K-STYLE AWARDS</h4>
                <p className="exhibition-programs-desc">관객 참여형 콘텐츠 집중 편성, 팬덤 및 우치 생성 콘텐츠 확대<br/>타겟 소비자의 실질 구매 전환 우도</p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc4} alt="Final Drop Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.22 | FINAL DROP DAY</h3>
                <h4 className="exhibition-programs-subtitle">샘플 세일, 한정판 구매 이벤트, 리캡 콘텐츠 촬영</h4>
                <p className="exhibition-programs-desc">구매 유도 강화일, 행사 전체의 리텐션 콘텐츠 확보<br/>매진 활성, 아카이빙 B2B 후속 콘텐츠 제작까지 연계</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYPECON EXPERIENCE 섹션 */}
      <section className="exhibition-experience-section" style={{backgroundImage: `url(${exSec05Img})`}}>
        <div className="exhibition-experience-overlay"></div>
        <div className="exhibition-experience-inner">
          <h2 className="exhibition-experience-title">HYPECON EXPERIENCE</h2>
          <div className="exhibition-experience-subtitle">
            하입콘의 경험 콘텐츠는 단순한 체험이 아닌,<br/>
            <span className="highlight">도파민 반응 → SNS 자동확산 → 실구매 유도</span>로 이어지는 Z세대 맞춤형 구조
          </div>
          <div className="exhibition-experience-desc">
            '입어보고, 바르고, 꾸미고' 종합 콘텐츠<br/>
            '찍히고 퍼지는' SNS 최적화 콘텐츠 설계
          </div>
          <div className="exhibition-experience-button">
            실질 구매 전환 + 팬덤 유도 → 브랜드 ROI 상승
          </div>
          
          <div className="exhibition-experience-zones">
            <div className="experience-zone">
              <h3 className="zone-title">EXPERIENCE<br/>ZONE</h3>
              <ul className="zone-list">
                <li>스타일 체인저 부티존</li>
                <li>헤메존</li>
                <li>커스터마이징 DIY</li>
                <li>포토존 6층</li>
              </ul>
            </div>
            <div className="experience-zone">
              <h3 className="zone-title">INTERACTION<br/>& SHOW</h3>
              <ul className="zone-list">
                <li>셀럽/인플루언서 팬미팅</li>
                <li>디제잉 & 댄스크루 공연</li>
                <li>브랜드 인터뷰존</li>
                <li>스타일링 데이팅존</li>
              </ul>
            </div>
            <div className="experience-zone">
              <h3 className="zone-title">EXPERIENCE<br/>ZONE</h3>
              <ul className="zone-list">
                <li>웰스 웰빙지</li>
                <li>K-STYLE 어워즈</li>
                <li>스타일링 리액션 캠</li>
              </ul>
            </div>
            <div className="experience-zone">
              <h3 className="zone-title">EXPERIENCE<br/>ZONE</h3>
              <ul className="zone-list">
                <li>타임세일/한정판존</li>
                <li>패션 아바타 테스트</li>
                <li>커플룩 투어 이벤트</li>
                <li>실구매 전환 연계 콘텐츠</li>
              </ul>
            </div>
          </div>
          
          <div className="exhibition-experience-highlight">
            <h3 className="highlight-title">하입콘 체험 콘텐츠의 특징</h3>
            <div className="highlight-content">
              <div className="highlight-item">
                <span className="highlight-label">5초 안에 콘텐츠화 가능한 구조</span><br/>
                Z세대 기준의 짧고 강렬한 '찰나의 콘유우감'을 자극
              </div>
              <div className="highlight-item">
                <span className="highlight-label">브랜드 연동 확장성</span><br/>
                모든 체험은 브랜드와 연결 → 구매 전환 및 SNS 제보로 자연 확산
              </div>
              <div className="highlight-item">
                <span className="highlight-label">소비자와 브랜드의 실시간 피드백 루프 구축</span><br/>
                입어보고 반응하고, 바로 퍼뜨리는 구조로 팬덤 형성에 최적화
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYPECON B2B 바이어 프로그램 섹션 */}
      <section className="exhibition-b2b-section">
        <div className="exhibition-b2b-inner">
          <div className="exhibition-b2b-title">HYPECON B2B 바이어 프로그램</div>
          
          <div className="exhibition-b2b-list">
            <div className="b2b-item">
              <div className="b2b-item-title">
                글로벌 바이어<br/>
                사전 매칭<br/>
                프로그램
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">브랜드 신청 시 '바이어 대상 유통 희망' 체크 → 자동 매칭 시스템 적용</div>
                <div className="b2b-item-desc">분야별 맞춤 바이어 초청 (패션, 뷰티, 리테일, 편집숍, 면세점 등)</div>
                <div className="b2b-item-desc">1:1 매칭된 시간표에 따라 라운지에서 비즈니스 미팅 진행</div>
                <div className="b2b-item-desc">지원 항목: 통역 인력, 바이어 사전 프로필, 샘플 세팅 공간</div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                바이어 전용<br/>
                라운지 운영
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">행사장 내 VIP 전용 BUSINESS LOUNGE 별도 구성</div>
                <div className="b2b-item-desc">바이어 휴식 공간 + 브랜드 브로슈어, 카탈로그 비치</div>
                <div className="b2b-item-desc">브랜드 & 제품 사전 노출 공간 설치</div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                해외진출가이드<br/>
                세미나<br/>
                (B2B 트랙)
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">수출 진작, 유통 채널 확장, 왕홍 마케팅 세션 운영</div>
                <div className="b2b-item-desc">K-패션·뷰티 글로벌 성공 사례 및 실패 피드백 공유</div>
                <div className="b2b-item-desc">글로벌 플랫폼 입점 컨설팅 (예: AMAZON, TMALL, ZOZOTOWN 등)</div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                온라인 B2B<br/>
                유통 연계
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">KOTRA, 한국패션산업협회, 뷰티협회 등과 연계된</div>
                <div className="b2b-item-desc">온라인 수주 플랫폼 접속 권한 제공</div>
                <div className="b2b-item-desc">행사 종료 후 3개월 간 B2B 커머스 페이지 운영 (참가 브랜드 대상)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN 섹션 */}
      <section className="exhibition-why-join-section">
        <div className="exhibition-why-join-inner">
          <div className="why-join-content">
            <h2 className="why-join-title">WHY<br/>JOIN</h2>
          </div>
          <div className="why-join-image">
            <img src={exSec07Img} alt="Why Join HYPECON" />
          </div>
        </div>
      </section>

      {/* FOR 섹션들 */}
      <section className="exhibition-for-section">
        <div className="exhibition-for-inner">
          <div className="for-grid">
            <div className="for-item">
              <div className="for-title">FOR BRANDS</div>
              <div className="for-content">
                <p>하입콘에선 브랜드가 콘텐츠가 됩니다.<br/>
                Z세대의 렌즈에 포착되고, 피드에 퍼지고,<br/>
                단 4일 만에 '인기 브랜드'에서<br/>
                '사랑받는 브랜드'로 도약합니다.<br/>
                지금 움직이지 않으면, 그 자리는<br/>
                다른 브랜드가 차지합니다.</p>
                <p className="for-highlight">"브랜드의 꿈이 하입콘에서 시작됩니다."</p>
              </div>
            </div>
            
            <div className="for-item">
              <div className="for-title">FOR GUESTS</div>
              <div className="for-content">
                <p>입고, 바르고, 찍고, 놀고.<br/>
                내가 좋아하는 것들로 하루를<br/>
                가득 채우는 곳.</p>
                <p>스타일, 감성, 취향. 모든것까지—<br/>
                하입콘은 '나'를 표현하는 가장<br/>
                멋진 방법이다.</p>
              </div>
            </div>
            
            <div className="for-item for-item-full">
              <div className="for-title">FOR BUYERS</div>
              <div className="for-content">
                <p>"데이터보다 빠른 현장감. Z세대의 시선이 머무는 브랜드, 찍는 제품, 사고 싶은 룩이<br/>
                그대로 눈앞에서 펼쳐집니다. 반응을 예측하지 마세요. 하입콘에선 직접 확인하면 됩니다."</p>
                <p className="for-highlight">"트렌드는 검색하지 않는다. 하입콘에서 직관한다."</p>
              </div>
            </div>
            
            <div className="for-item for-item-full">
              <div className="for-title">FOR INFLUENCERS</div>
              <div className="for-content">
                <p>"카메라를 켠 순간, 모든 조명이 당신을 향합니다. 여기선 당신이 브랜드고, 무드고,<br/>
                씬의 중심입니다. 일기만 해도 화제가 되고, 찍히는 순간 콘텐츠가 되며,<br/>
                하입콘은 당신의 '다음'을 만들어주는 무대입니다."</p>
                <p className="for-highlight">"당신은 게스트가 아닙니다. 하입콘은 당신을 위해 만들어진 무대입니다."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ExhibitionPage 새 작업 시작: 여기에 섹션별 className을 부여해 추가하세요 */}
    </div>
  );
}

export default ExhibitionPage; 