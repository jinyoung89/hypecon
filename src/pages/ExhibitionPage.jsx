import React from 'react';
import neonStage from '../assets/images/neon-green-stage.jpg';

function ExhibitionPage() {
  
    return (
        <section id="exhibition" className="waterbomb-wave-section" style={{background:'#FF96C5', color:'#000', padding:'0', paddingTop:'90px'}}>
          {/* 상단 이미지 + 텍스트 오버레이 */}
          <div style={{position:'relative', width:'100%', maxHeight:'340px', overflow:'hidden', marginBottom:'2.5rem'}}>
            <img src={neonStage} alt="HYPECON 전시 공간" style={{width:'100%', objectFit:'cover', maxHeight:'340px', display:'block', filter:'brightness(0.82)'}} />
            <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none'}}>
              <div style={{color:'#fff', fontWeight:700, fontSize:'1.35rem', textShadow:'0 2px 12px rgba(0,0,0,0.32)', textAlign:'center', padding:'0 1.5rem', lineHeight:'1.5', letterSpacing:'-0.5px'}}>
                4일간, 매일 새로운 경험과 반응이 펼쳐집니다<br/>브랜드는 콘텐츠가 되고, 참관객은 팬덤이 됩니다
              </div>
            </div>
          </div>
    
          {/* EXHIBITION 타이틀 및 설명 */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div className="text-center mb-2">
              <div style={{fontWeight:'900', fontSize:'2.5rem', letterSpacing:'-1px'}}>EXHIBITION</div>
              <div style={{fontWeight:'700', fontSize:'1.4rem', marginTop:'0.5rem'}}>체험하고, 반응하고, 확산되는 스타일 무대</div>
            </div>
            <div className="text-center mb-6" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
              <span style={{fontWeight:'bold'}}>HYPECON STYLE WEEK</span>는 단순한 전시가 아닙니다.<br/>
              브랜드와 참관객이 함께 만들어가는 살아있는 콘텐츠 플랫폼입니다.
            </div>
          </div>
    
          {/* 행사 개요 정보 블록 */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2.2rem 1.5rem', marginBottom:'2.5rem', color:'#222', fontSize:'1.08rem', lineHeight:'1.85', letterSpacing:'-0.01em'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.5rem', color:'#222', textAlign:'left'}}>
              행사 개요
              </div>
              
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'1.5rem'}} className="exhibition-overview-grid">
              {/* 왼쪽 열 */}
              <div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>행사명</div>
                  <div>HYPECON STYLE WEEK SEOUL 2026</div>
                </div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>일시</div>
                  <div>2026년 2월 19일 (Thu) ~ 22일 (Sun)</div>
                </div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>장소</div>
                  <div>서울 COEX C Hall</div>
                </div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>주최</div>
                  <div>㈜플레네스 / 공동주관 : ㈜플레네스, ㈜그래서</div>
                </div>
              </div>
    
              {/* 오른쪽 열 */}
              <div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>대상</div>
                  <div>Z세대 소비자, 브랜드, 바이어, ㈜플루언서, 창작자, 황족, 틱토커, 미디어</div>
                </div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>관람 수요</div>
                  <div>최대 10만 명 전체 입장 대상 예정</div>
                </div>
                <div style={{marginBottom:'1rem'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.3rem', color:'#FF2D2D'}}>참가 브랜드</div>
                  <div>스트릿 / 컨템포러리 / 키치 / Y2K / 모던 / 유니섹스 / 하프세컨드 / 슈즈 / 가방 / 뷰티 (색조, 향수 등)</div>
                </div>
              </div>
            </div>
          </div>
    
          {/* 존 구성 정보 */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>존 구성</div>
            
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.2rem'}}>
              {[
                {
                  title: 'HypeSty',
                  subtitle: '스트릿 / 유니섹스 : 그래서 씨 있는 감지, 초동의 섹 스트릿',
                  color: '#FF5768'
                },
                {
                  title: 'CoolSty',
                  subtitle: '미니멀 / 시크 : 감성의 무심하고 정제된 도시 감성 브랜드',
                  color: '#00A5E3'
                },
                {
                  title: 'SuperSty',
                  subtitle: '프리미엄 감성 하이엔드 디자이너 브랜드',
                  color: '#FFBF65'
                },
                {
                  title: 'PopSty',
                  subtitle: '심플함 : Y2K : 기저 키치 감성 유쾌 룩, 일상 룩 심플 스타일',
                  color: '#FF60A8'
                },
                {
                  title: 'FitSty',
                  subtitle: '스포츠웨어와 충성의 피트니스 : 요가 브랜드',
                  color: '#00CDAC'
                },
                {
                  title: 'PickSty',
                  subtitle: '스타일링 창작자의 추천리 가방, 신즈 중심 브랜드',
                  color: '#8DD1E3'
                }
              ].map((zone, index) => (
                <div key={index} style={{
                  background:'#fff', 
                  borderRadius:'12px', 
                  padding:'1.5rem', 
                  boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
                  border:`2px solid ${zone.color}`,
                  borderLeft:`8px solid ${zone.color}`
                }}>
                  <div style={{fontWeight:'bold', fontSize:'1.2rem', color:zone.color, marginBottom:'0.5rem'}}>
                    {zone.title}
                  </div>
                  <div style={{fontSize:'0.95rem', color:'#444', lineHeight:'1.5'}}>
                    {zone.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* 특별 프로그램 */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>특별 프로그램</div>
            
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', color:'#222'}}>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'1.5rem'}}>
                <div>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.5rem', color:'#FF2D2D'}}>BeautySty</div>
                  <div style={{fontSize:'0.95rem', lineHeight:'1.5'}}>MZ 인기 뷰티 코스메틱 브랜드<br/>IndeSty : 인디 크리에이터 브랜드<br/>KingSty : 킹 인플루언서 스타일링 브랜드<br/>GlowSty : 색조 · 네일 · 향 브랜드</div>
                </div>
                <div>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', marginBottom:'0.5rem', color:'#FF2D2D'}}>특별 큐레이션</div>
                  <div style={{fontSize:'0.95rem', lineHeight:'1.5'}}>StarSty : 셀럽 중심 큐레이션 존<br/>그 외 Runway / 포토존 / F&B / Buyer Lounge / 스타일링룸 /<br/>굿즈존 / 세미나룸 / 공유 파킹존</div>
                </div>
              </div>
            </div>
          </div>
    
          {/* PROGRAMS Highlight */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>PROGRAMS Highlight</div>
            
            <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem'}}>
              {[
                {
                  date: '02.19 Thurs',
                  title: 'Opening Day',
                  description: '오프닝 퍼포먼스, AI 런웨이쇼, VIP&셀럽 등장, 하이퍼 포토 스팟 오픈',
                  subtitle: '브랜드와 팬 모두의 주목도를 높이는 미디어&콘텐츠 중심 첫 날',
                  color: '#FF5768'
                },
                {
                  date: '02.20 Fri',
                  title: 'Signature Showcase Day',
                  description: '쇼케이스 브랜드 컨퍼런스',
                  subtitle: '주요 브랜드가 중심이 되는 HYPECON의 메인스테이지\n현장 비즈니스 미팅과 콘텐츠 제작 동시 진행',
                  color: '#00A5E3'
                },
                {
                  date: '02.21 Sat',
                  title: 'Fan Experience Day',
                  description: '스타일 챌린지, 셀피 이벤트, 인플루언서 라이브커머스, K-Style Awards',
                  subtitle: '관객 참여형 콘텐츠 집중 편성, 팬덤 및 유저 생성 콘텐츠 확대\n타겟 소비자의 실질 구매 전환 유도',
                  color: '#FFBF65'
                },
                {
                  date: '02.22 Sun',
                  title: 'Final Drop Day',
                  description: '샘플 세일, 한정판 구매 이벤트, 리캡 콘텐츠 촬영',
                  subtitle: '구매 유도 강화일, 행사 전체의 리텐션 콘텐츠 확보\n매거진 촬영, 아카이빙 등 B2B 후속 콘텐츠 제작까지 연계',
                  color: '#00CDAC'
                }
              ].map((program, index) => (
                <div key={index} style={{
                  background:'#fff',
                  borderRadius:'18px',
                  boxShadow:'0 2px 16px rgba(0,0,0,0.04)',
                  padding:'2rem 1.5rem',
                  borderLeft:`8px solid ${program.color}`,
                  position:'relative'
                }}>
                  <div style={{display:'flex', alignItems:'flex-start', gap:'1.5rem', flexWrap:'wrap'}}>
                    <div style={{minWidth:'140px', width:'140px'}}>
                      <div style={{fontWeight:'bold', fontSize:'1.1rem', color:program.color, marginBottom:'0.3rem'}}>
                        {program.date}
                      </div>
                      <div style={{fontWeight:'bold', fontSize:'1.25rem', color:'#222', marginBottom:'0.8rem', lineHeight:'1.3'}}>
                        {program.title}
                      </div>
                    </div>
                    <div style={{flex:1, minWidth:'300px'}}>
                      <div style={{fontSize:'1.05rem', fontWeight:'600', color:'#222', marginBottom:'0.8rem', lineHeight:'1.5'}}>
                        {program.description}
                      </div>
                      <div style={{fontSize:'0.95rem', color:'#666', lineHeight:'1.6', whiteSpace:'pre-line'}}>
                        {program.subtitle}
                      </div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div style={{
                      position:'absolute',
                      bottom:'-12px',
                      left:'50%',
                      transform:'translateX(-50%)',
                      width:'60px',
                      height:'2px',
                      background:'#ddd',
                      borderRadius:'1px'
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
    
          {/* HYPECON Experience */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>HYPECON Experience</div>
            
            {/* 상단 설명 */}
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', marginBottom:'2rem', color:'#222'}}>
              <div style={{fontSize:'1.1rem', lineHeight:'1.7', marginBottom:'1.5rem'}}>
                <strong>하이픈의 경험 콘텐츠</strong>는 단순한 체험이 아닙니다.<br/>
                <strong>도파민 반응 → SNS 자동확산 → 실구매 유도</strong>로 이어지는 Z세대 맞춤형 구조
              </div>
              <div style={{fontSize:'1.05rem', lineHeight:'1.6'}}>
                <div style={{marginBottom:'0.5rem'}}>• '입어보고, 바르고, 꾸미고' 중심 콘텐츠</div>
                <div style={{marginBottom:'0.5rem'}}>• '찍히고 퍼지는' SNS 최적화 콘텐츠 설계</div>
                <div>• 실질 구매 전환 + 팬덤 유도 → 브랜드 ROI 상승</div>
              </div>
            </div>
    
            {/* 4개 존 그리드 */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.5rem', marginBottom:'2rem'}}>
              {[
                {
                  title: 'EXPERIENCE ZONE',
                  items: ['스타일 체인지 부티크', '헤어&메이크업', '커스터마이징 DIY', '포토존 6종'],
                  color: '#FF5768'
                },
                {
                  title: 'INTERACTION & SHOW',
                  items: ['셀럽/인플루언서 팬미팅', '디자인 & 네스크루 공연', '브랜드 인터뷰존', '스타일링 데이팅존'],
                  color: '#00A5E3'
                },
                {
                  title: 'SNS & CHALLENGE',
                  items: ['릴스 챌린지', 'K-Style 어워즈', '스타일링 리액션 캠'],
                  color: '#FFBF65'
                },
                {
                  title: 'COMMERCE & QUEST',
                  items: ['타임세일/한정판매', '패션 아바타 퀘스트', '커플룩 투어 이벤트', '실구매 전환 연계 콘텐츠'],
                  color: '#00CDAC'
                }
                ].map((zone, index) => (
                <div key={index} style={{
                  background: zone.color,
                  borderRadius:'12px',
                  padding:'1.8rem 1.5rem',
                  color:'#fff',
                  position:'relative'
                }}>
                  <div style={{display:'flex', alignItems:'flex-start', gap:'0.5rem', marginBottom:'1rem'}}>
                    <div style={{width:'12px', height:'12px', background:'#FFD700', borderRadius:'2px', marginTop:'0.2rem', flexShrink:0}}></div>
                    <div style={{fontWeight:'bold', fontSize:'1.1rem', lineHeight:'1.3'}}>
                      {zone.title}
                    </div>
                  </div>
                  <div>
                    {zone.items.map((item, itemIndex) => (
                      <div key={itemIndex} style={{
                        fontSize:'0.95rem',
                        marginBottom:'0.4rem',
                        paddingLeft:'0.5rem',
                        position:'relative'
                      }}>
                        <span style={{position:'absolute', left:'-0.3rem', top:'0.1rem'}}>•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  </div>
                ))}
            </div>
    
            {/* 하이픈 체험 콘텐츠의 특징 */}
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', color:'#222'}}>
              <div style={{display:'flex', alignItems:'flex-start', gap:'0.5rem', marginBottom:'1.2rem'}}>
                <div style={{fontSize:'1.5rem'}}>🎯</div>
                <div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#FF5768'}}>하이픈 체험 콘텐츠의 특징</div>
              </div>
              <div style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
                <div style={{marginBottom:'0.8rem'}}>
                  <strong>• 즉흥 반응 콘텐츠의 특징:</strong> 모든 체험은 Z세대 가장 핫한 감성탐 '핫님'의 곧음을 끌어
                </div>
                <div style={{marginBottom:'0.8rem'}}>
                  <strong>• 브랜드 연동 확산:</strong> 모든 체험은 브랜드와 연계 운영 → 구매 전환 SNS 확산을 전면 확산
                </div>
                <div>
                  <strong>• 소비자의 브랜드 실시간 피드백:</strong> 입어보고 반응하고, 바로 구매까지 연결되는 실시간 확산 체험
                </div>
              </div>
            </div>
          </div>
    
          {/* HYPECON B2B 바이어 프로그램 */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>HYPECON B2B 바이어 프로그램</div>
            
            {/* 글로벌 바이어 사전 매칭 프로그램 */}
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', marginBottom:'1.5rem', color:'#222', borderLeft:'8px solid #FF5768'}}>
              <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'1rem', color:'#FF5768'}}>글로벌 바이어 사전 매칭 프로그램</div>
              <div style={{fontSize:'1.05rem', lineHeight:'1.6'}}>
                <div style={{marginBottom:'0.5rem'}}>• 브랜드 신청 시 바이어 대상 유통 희망 체크 → 자동 매칭 시스템 작동</div>
                <div style={{marginBottom:'0.5rem'}}>• 품아형 맞춤 바이어 초청 (해외, 뷰티, 리테일, 온라인, 전시회 등)</div>
                <div style={{marginBottom:'0.5rem'}}>• 1:1 매칭의 사전매칭 대화 라운지에서 비즈니스 미팅 진행</div>
                <div>• 사전 협상, 동의 이력, 바이어 사전 프로필, 샘플 세팅 공간</div>
              </div>
            </div>
    
            {/* 바이어 프로그램 상세 */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem', marginBottom:'1.5rem'}}>
              {[
                {
                  title: '바이어 전용 VIP 공간',
                  subtitle: 'Business Lounge 별도 구성',
                  items: ['바이어 휴식 공간 + 브랜드 컨프룸인 가람드 미팅', '브랜드 & 제품 사전 노출 공간 설치'],
                  color: '#00A5E3'
                },
                {
                  title: '해외 진출 가이드 세미나',
                  subtitle: '(B2B 브랜치)',
                  items: ['중국, 일본, 동동철 확장, 동출 마케팅 세션 운영', 'K-패션브랜드 글로벌 성공 사례 및 실패 비즈팩 공유', '글로벌 플랫폼 연동 (ex. Amazon, Tmall, Zozotown 등)'],
                  color: '#FFBF65'
                }
              ].map((program, index) => (
                <div key={index} style={{
                  background:'#fff',
                  borderRadius:'12px',
                  padding:'1.8rem 1.5rem',
                  boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
                  borderLeft:`8px solid ${program.color}`
                }}>
                  <div style={{fontWeight:'bold', fontSize:'1.1rem', color:program.color, marginBottom:'0.3rem'}}>
                    {program.title}
                  </div>
                  <div style={{fontSize:'0.95rem', color:'#666', marginBottom:'1rem', fontStyle:'italic'}}>
                    {program.subtitle}
                  </div>
                  <div>
                    {program.items.map((item, itemIndex) => (
                      <div key={itemIndex} style={{
                        fontSize:'0.95rem',
                        marginBottom:'0.5rem',
                        paddingLeft:'0.8rem',
                        position:'relative',
                        lineHeight:'1.5'
                      }}>
                        <span style={{position:'absolute', left:'0', top:'0.1rem', color:program.color}}>•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
    
            {/* 실시간 상품 소싱 쇼케이스 */}
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', marginBottom:'1.5rem', color:'#222', borderLeft:'8px solid #00CDAC'}}>
              <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'1rem', color:'#00CDAC'}}>실시간 상품 소싱 쇼케이스 (Live Buyer Preview)</div>
              <div style={{fontSize:'1.05rem', lineHeight:'1.6'}}>
                <div style={{marginBottom:'0.5rem'}}>• 바이어 대상 브랜드별 상품 프레젠테이션 세션</div>
                <div style={{marginBottom:'0.5rem'}}>• HYPECON 관심 스타일이나 or 바이어 전용 상품 소싱 운영</div>
                <div>• 현장 확대에 or 수출업 물량, B2B 채널로 2차 논솔</div>
              </div>
            </div>
    
            {/* 온라인 B2B 유통 연계 */}
            <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', color:'#222', borderLeft:'8px solid #FF60A8'}}>
              <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'1rem', color:'#FF60A8'}}>온라인 B2B 유통 연계</div>
              <div style={{fontSize:'1.05rem', lineHeight:'1.6'}}>
                <div style={{marginBottom:'0.5rem'}}>• KOTRA, 한국패션산업협회, 뷰티협회 등과 연계한 온라인 수출 플랫폼 접속 권한 제공</div>
                <div>• 행사 종료 후 3개월 간 B2B 커머스 페이지 운영 (참가 브랜드 대상)</div>
              </div>
            </div>
          </div>
    
          {/* 모바일 반응형 CSS */}
          <style>{`
            @media (max-width: 768px) {
              .exhibition-grid-2col {
                grid-template-columns: 1fr !important;
              }
              .exhibition-info-block {
                padding: 1.5rem 1rem !important;
              }
              .program-card-content {
                flex-direction: column !important;
                gap: 1rem !important;
              }
              .program-date-section {
                min-width: 0 !important;
              }
              .program-content-section {
                min-width: 0 !important;
              }
              .exhibition-overview-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
              .exhibition-overview-grid > div {
                margin-bottom: 0.5rem !important;
              }
              .exhibition-overview-grid > div > div {
                margin-bottom: 0.8rem !important;
              }
              .why-join-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
              .why-join-grid > div {
                min-height: auto !important;
                padding: 1.5rem 1rem !important;
              }
            }
          `}</style>
    
          {/* WHY JOIN */}
          <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
            <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>WHY JOIN</div>
            
            {/* 2x2 그리드 레이아웃 */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.5rem'}} className="why-join-grid">
              {[
                {
                  title: 'For Brands',
                  content: '"하이픈에서 보면 그 브랜드가 됩니다.\nZ세대의 핫스팟 포착하고, 팬덤에 파지고,\n콘텐츠 확산 \'팬덤\' 브랜드에서 \'사랑받는 브랜드\'로\n도약합니다.\n지금 흐르는 안 보였고, 그 저희는 다른 브랜드가\n저지없습니다.\n\'Z세대의 공감\' 하이픈에서 시작됩니다."',
                  color: '#FF5768'
                },
                {
                  title: 'For Guests',
                  content: '입고, 바르고, 꾸고, 놀고.\n내가 좋아하는 것들을 하루종일 가장 체우는 곳.\n스타일, 감성, 취향, 모든 것이 어우러지는\n하이픈은 \'나\'를 표현하는 가장 멋진 방법이다.',
                  color: '#00A5E3'
                },
                {
                  title: 'For Buyers',
                  content: '"데이터보다 빠른 현장감.\nZ세대의 시선이 닿는 브랜드, 찍는 제품, 사고 싶은 룩이\n그대로 눈앞에서 펼쳐집니다.\n현장을 체크하지 마세요. 하이픈에서 직접 확인하면 됩니다."\n"브랜드는 감성하지 않다. 하이픈에서 \'직관\'한다."',
                  color: '#FFBF65'
                },
                {
                  title: 'For Influencers',
                  content: '"카메라를 켤 순간, 모든 조명이 당신을 향합니다.\n여기서 당신이 브랜드고, 콘텐츠고, 세상 중심입니다.\n일기자 모든 하루게가 되고, 찍히는 순간 콘텐츠가 되며,\n하이픈은 당신의 \'다음\'을 만들어주는 무대입니다."\n"당신은 게스트가 아닙니다.\n하이픈은 당신을 위해 만들어진 무대입니다."',
                  color: '#00CDAC'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background:'#fff',
                  borderRadius:'18px',
                  boxShadow:'0 2px 16px rgba(0,0,0,0.04)',
                  padding:'2rem 1.5rem',
                  borderLeft:`8px solid ${item.color}`,
                  minHeight:'200px'
                }}>
                  <div style={{fontWeight:'bold', fontSize:'1.3rem', color:item.color, marginBottom:'1.2rem'}}>
                    {item.title}
                  </div>
                  <div style={{fontSize:'1.05rem', lineHeight:'1.7', color:'#333', whiteSpace:'pre-line'}}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
    
        
        </section>
    );
}

export default ExhibitionPage; 