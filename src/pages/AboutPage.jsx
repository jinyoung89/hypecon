import React from 'react';
import diverseYouthFashio from '../assets/images/diverse-youth-fashion.jpg';

function AboutPage() {
  return (
    <section id="about" className="waterbomb-wave-section" style={{background:'#FF96C5', color:'#000', padding:'0', paddingTop:'90px'}}>
      {/* 상단 이미지 + 텍스트 오버레이 */}
      <div style={{position:'relative', width:'100%', maxHeight:'340px', overflow:'hidden', marginBottom:'2.5rem'}}>
        <img src={diverseYouthFashio} alt="Z세대 패션 뷰티 페어" style={{width:'100%', objectFit:'cover', maxHeight:'340px', display:'block', filter:'brightness(0.82)'}} />
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none'}}>
          <div style={{color:'#fff', fontWeight:700, fontSize:'1.35rem', textShadow:'0 2px 12px rgba(0,0,0,0.32)', textAlign:'center', padding:'0 1.5rem', lineHeight:'1.5', letterSpacing:'-0.5px'}}>
            Z세대를 중심의 패션, 뷰티, 콘텐츠, 테크, 커머스를 융합한<br/>체험형 스타일 패션 뷰티 페어
          </div>
        </div>
      </div>

      {/* WHY HYPECON 타이틀 및 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div className="text-center mb-2">
          <div style={{fontWeight:'900', fontSize:'2.5rem', letterSpacing:'-1px'}}>WHY HYPECON</div>
          <div style={{fontWeight:'700', fontSize:'1.4rem', marginTop:'0.5rem'}}>입고, 퍼지고, 팔리는 브랜드의 리얼 무대</div>
        </div>
        <div className="text-center mb-6" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
          <span style={{fontWeight:'bold'}}>HYPECON</span>은 브랜드가 단순히 보여지는 곳이 아닙니다.<br/>
          입혀지고, 반응이 콘텐츠가 되고, 판매로 이어지며, 국내외 팬과 브랜드가 직접 연결되는 오프라인 플랫폼입니다.
        </div>
      </div>

      {/* HYPECON STYLE WEEK Seoul 2026 소개 텍스트 블록 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2.2rem 1.5rem', marginBottom:'2.5rem', color:'#222', fontSize:'1.08rem', lineHeight:'1.85', letterSpacing:'-0.01em'}}>
        <div style={{fontWeight:'bold', fontSize:'1.18rem', marginBottom:'0.7rem'}}>
          HYPECON STYLE WEEK Seoul 2026<span style={{fontWeight:400}}>은</span>
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700}}>Z</span>세대가 직접 입고, 꾸미고, 찍고, 퍼뜨리는<br/>
          경험과 반응 중심의 스타일 <span style={{fontWeight:700}}>패션·뷰티</span> 페어입니다.
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          200여 개의 <span style={{fontWeight:700}}>패션·뷰티</span> 브랜드와<br/>
          국내외 10만 명의 <span style={{fontWeight:700}}>Z</span>세대가 함께하며,<br/>
          온라인으로는 경험할 수 없던 스타일을 직접 입어보고,<br/>
          반응하고, 콘텐츠로 퍼뜨리며, 실제 구매까지 이어지는<br/>
          실시간 소비의 흐름을 만들어냅니다.
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          브랜드는 현장에서 소비자의 반응을 마주하고,<br/>
          그 반응은 <span style={{fontWeight:700}}>릴스·틱톡·인스타그램 등 SNS</span>를 통해 자연스럽게 확산되며 인지도와<br/>
          팬덤, 구매로 연결됩니다.<br/>
          <span style={{fontWeight:700}}>바이어</span>는 반응을 체감하고, <span style={{fontWeight:700}}>브랜드</span>는 증명합니다.<br/>
          이곳이 바로, <span style={{fontWeight:'bold'}}>HYPECON STYLE WEEK</span>입니다.
        </div>
      </div>

      {/* Why Brands Choose HYPECON */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'0.7rem', letterSpacing:'-0.5px'}}>Why Brands Choose HYPECON</div>
        <div style={{fontSize:'1.05rem', color:'#222', lineHeight:'1.7', fontWeight:500}}>
          팬덤, 콘텐츠, 실질 매출을 동시에 창출하는 브랜드 성장 촉진 플랫폼<br/>
          입고, 찍고, 공유하고, 구매하는 Z세대 특화 구매 전환 구조<br/>
          글로벌 인플루언서 활용 / 해외 바이어 매칭 → 글로벌 진출 가능성<br/>
          브랜드가 콘텐츠가 되는 유일한 무대, 글로벌 확산의 출발점
        </div>
      </div>

      {/* Z세대 경험 소비 강조 텍스트 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.45rem', marginBottom:'0.3rem', letterSpacing:'-0.5px'}}>
          "Z세대는 제품이 아닌, <span style={{fontWeight:'900'}}>'경험'</span>을 소비합니다."
        </div>
        <div style={{fontSize:'1.05rem', color:'#222', marginBottom:'0.7rem', fontWeight:500}}>
          입고, 찍고, 퍼지고, 팔리는 브랜드의 리얼 무대
        </div>
        <div style={{fontWeight:'bold', fontSize:'1rem', marginBottom:'0.1rem', letterSpacing:'-0.2px'}}>
          HYPECON STYLE WEEK Seoul 2026<span style={{fontWeight:400}}>은</span> 브랜드가 단순히 보여지는 곳이 아닙니다.
        </div>
        <div style={{fontSize:'1rem', color:'#222', fontWeight:400}}>
          입혀지고, 반응이 콘텐츠가 되고, 판매로 이어지며, 국내외 팬과 브랜드가 직접 연결되는 플랫폼입니다.
        </div>
      </div>

      {/* 피처 카드 섹션 - 2줄(3+2) 레이아웃 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div className="hypecon-feature-card-wrap" style={{width:'100%', boxSizing:'border-box'}}>
          <style>{`
            @media (max-width: 768px) {
              .hypecon-feature-card-row { flex-direction: column !important; gap: 1rem !important; align-items: stretch !important; }
              .hypecon-feature-card { min-width: 0 !important; width: 100% !important; max-width: 100% !important; }
            }
          `}</style>
          <div className="hypecon-feature-card-row" style={{display:'flex', flexDirection:'row', gap:'1.1rem', marginBottom:'1.1rem'}}>
            {[
              {title:'Z세대 큐레이션', desc:'Z세대가 지금 가장 사랑하는 브랜드만 선택', bg:'#CFFF00', color:'#222'},
              {title:'피팅 기반 쇼핑', desc:'직접 입어보고 결정하는 "피팅" 기반 소비 경험', bg:'#FF5768', color:'#fff'},
              {title:'실구매 전환', desc:'전시와 소비가 동시에 일어나는 체험형 플랫폼', bg:'#8DD7BF', color:'#222'},
            ].map((item) => (
              <div
                key={item.title}
                className="hypecon-feature-card"
                style={{
                  backgroundColor: item.bg,
                  color: item.color,
                  border: 'none',
                  borderRadius: '16px',
                  padding: '2rem 1.2rem',
                  minHeight: '85px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'none',
                  boxSizing: 'border-box',
                  flex: 1,
                  opacity: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:'0.3rem', textAlign:'center', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', height:'32px', lineHeight:'32px', display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>{item.title}</div>
                <div style={{fontSize:'0.97rem', textAlign:'center', whiteSpace:'normal', flex:1, display:'flex', alignItems:'flex-start', justifyContent:'center', width:'100%'}}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="hypecon-feature-card-row" style={{display:'flex', flexDirection:'row', gap:'1.1rem', justifyContent:'center'}}>
            {[
              {title:'SNS 콘텐츠 허브', desc:'찍고 공유하며 자발적 바이럴 생성', bg:'#00A5E3', color:'#fff'},
              {title:'글로벌 유통 파급력', desc:'K-브랜드가 콘텐츠로 퍼지고, 리얼로 판매되고, 바이어와 연결되는 K-브랜드 실전형 유통 무대', bg:'#FFBF65', color:'#222'},
            ].map((item) => (
              <div
                key={item.title}
                className="hypecon-feature-card"
                style={{
                  backgroundColor: item.bg,
                  color: item.color,
                  border: 'none',
                  borderRadius: '16px',
                  padding: '2rem 1.2rem',
                  minHeight: '85px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'none',
                  boxSizing: 'border-box',
                  flex: 1,
                  maxWidth: '48%',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 1,
                }}>
                <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:'0.3rem', textAlign:'center', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', height:'32px', lineHeight:'32px', display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>{item.title}</div>
                <div style={{fontSize:'0.97rem', textAlign:'center', whiteSpace:'normal', flex:1, display:'flex', alignItems:'flex-start', justifyContent:'center', width:'100%'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px'}}>
        <div style={{borderTop:'4px solid #fff', margin:'40px 0 30px 0'}}></div>
      </div>

      {/* 체험형 콘텐츠 타이틀 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div className="text-center mb-2">
          <div style={{fontWeight:'900', fontSize:'1.5rem', letterSpacing:'-1px'}}>입어보고, 바르고, 꾸미고, 공유하고, 팬이 되는 도파민 쇼핑+콘텐츠 스타일 페어</div>
        </div>
      </div>

      {/* 6 ZONE 스타일 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        {[
          {title:'실감 체험 콘텐츠', desc:'입어보고, 바르고, 꾸미고 → 직접 경험 가능한 스타일 콘텐츠 다수 운영, 제품이 아닌 경험을 판매하는 구조'},
          {title:'참여형 콘텐츠 구조', desc:'릴스 챌린지, 스타일링랩/메이크업 다이브, 카멜 이벤트, 투표 콘텐츠 등 관람객이 콘텐츠 주인공이 되는 구조'},
          {title:'자동 확산 설계', desc:'활동 포인트, 릴스/인스타/챌스, 굿즈/인증샷 유도 등으로 SNS 확산이 자연스럽게 일어나는 시스템 내용'},
          {title:'도파민 자극 콘텐츠', desc:'피팅 컨텐츠 및 커스터마이즈, 타임세일 등 즉시 반응형 콘텐츠 중심, Z세대 순간 반응 최적화'},
          {title:'브랜드 연동 구조', desc:'모든 체험 콘텐츠는 브랜드와 연계 운영, 브랜드 쇼, 체험존, 릴스존, 부스/체험/이벤트 유기적 연결'},
          {title:'글로벌 확산성', desc:'왕홍/인플루언서/바이어 연계 콘텐츠 – 브랜드 쇼, 인플루언서, 바이어, 콘텐츠 수출 기획까지 내장된 구조'},
        ].map((item, idx) => (
          <div key={item.title} style={{
            display:'flex', alignItems:'center', padding:'18px 0',
            borderBottom: idx!==5 ? '2px solid #000' : 'none'
          }}>
            <div style={{
              minWidth: '120px',
              fontWeight: '900',
              fontSize: '1.13rem',
              color: '#222',
              lineHeight: '1.3',
              marginRight: '12px',
              whiteSpace: 'normal',
              overflow: 'visible',
              textOverflow: 'unset'
            }}>
              {item.title}
            </div>
            <div style={{
              flex:1, fontSize:'1.05rem', color:'#222', fontWeight:'400', marginLeft:'18px'
            }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage; 