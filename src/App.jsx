import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import heroImage from './assets/images/waterbomb-hero.jpg'
import blueCrowd from './assets/images/blue-crowd.jpg'
import waterCannons from './assets/images/water-cannons.png'
import neonStage from './assets/images/neon-green-stage.jpg'
import logoHypecon from './assets/images/hypecon-logo.png';
import hypeconLogo from './assets/images/hypecon_logo.png';
import diverseYouthFashio from './assets/images/diverse-youth-fashion.jpg';

// Import video (여기에 영상 파일명을 넣으세요)
import heroVideo from './assets/videos/hypecon.mp4'
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';

function App() {
  // 모바일 메뉴 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 모바일 메뉴 오픈 시 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // 로딩 애니메이션 등은 생략(라우팅 구조에 집중)
  return (
    <>
      <div className="min-h-screen">
        {/* 네비게이션 */}
        <nav className="waterbomb-nav">
          <div className="container mx-auto px-4">
            {/* 상단: 로고 + 소셜 + EN + 햄버거 */}
            <div className="flex justify-between items-center" style={{paddingTop:'0.7rem'}}>
              {/* 왼쪽: 로고 */}
              <div className="waterbomb-title" style={{ display: 'flex', alignItems: 'center', minWidth: '130px' }}>
                <Link to="/" style={{display:'block'}}>
                  <img src={hypeconLogo} alt="HYPECON STYLE WEEK" style={{ height: '38px', width: 'auto', display: 'block' }} />
                </Link>
              </div>
              {/* 오른쪽: 소셜 + EN + 햄버거 */}
              <div className="flex flex-row items-center">
                {/* 소셜 아이콘 */}
                <div className="flex flex-row items-center nav-social-wrap" style={{gap:'0.7rem', marginRight:'1.5rem'}}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"
                    style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s' }}
                    className="hover:bg-pink-100">
                    <FaInstagram size={20} color="#E1306C" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube"
                    style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s' }}
                    className="hover:bg-red-100">
                    <FaYoutube size={20} color="#FF0000" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"
                    style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s' }}
                    className="hover:bg-blue-100">
                    <FaFacebookF size={18} color="#1877F3" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok"
                    style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s' }}
                    className="hover:bg-gray-200">
                    <FaTiktok size={18} color="#000" />
                  </a>
                </div>
                {/* EN */}
                <span style={{fontWeight:600, fontSize:'1.08rem', marginLeft:'1.2rem', marginRight:'1.2rem'}}>EN</span>
                {/* 햄버거 메뉴 (빨간색 3줄) - 모바일에서만 보임 */}
                <div className="nav-hamburger-wrap" style={{display:'none'}}>
                  <div onClick={()=>setIsMobileMenuOpen(v=>!v)} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer', marginLeft:'0.5rem'}}>
                    <div style={{width:'28px', height:'4px', background:'#FF2D2D', borderRadius:'2px', margin:'2.5px 0'}}></div>
                    <div style={{width:'28px', height:'4px', background:'#FF2D2D', borderRadius:'2px', margin:'2.5px 0'}}></div>
                    <div style={{width:'28px', height:'4px', background:'#FF2D2D', borderRadius:'2px', margin:'2.5px 0'}}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* 하단: 메뉴 바 (PC에서만 보임) */}
            <div className="nav-menu-bar flex justify-center items-center mt-6" style={{gap:'2.7rem', marginTop:'2rem'}}>
              <Link to="/about" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>About</Link>
              <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Contact</Link>
              <Link to="/exhibition" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Exhibition</Link>
              <Link to="/brand" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Brand</Link>
              <Link to="/ticket" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Ticket</Link>
              <Link to="/buyer" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Buyer</Link>
              <Link to="/influencer" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Influencer</Link>
              <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Award</Link>
            </div>
            {/* 모바일 메뉴 오버레이 */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col" onClick={()=>setIsMobileMenuOpen(false)}>
                <div style={{background:'#fff', borderRadius:'0 0 18px 18px', boxShadow:'0 8px 32px rgba(0,0,0,0.13)', margin:'0 auto', marginTop:'0.5rem', minWidth:'220px', maxWidth:'90vw', padding:'1.5rem 1.2rem', display:'flex', flexDirection:'column', alignItems:'center'}} onClick={e=>e.stopPropagation()}>
                  <Link to="/about" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>About</Link>
                  <Link to="/contact" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Contact</Link>
                  <Link to="/exhibition" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Exhibition</Link>
                  <Link to="/brand" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Brand</Link>
                  <Link to="/ticket" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Ticket</Link>
                  <Link to="/buyer" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Buyer</Link>
                  <Link to="/influencer" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Influencer</Link>
                  <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Award</Link>
                </div>
              </div>
            )}
            {/* 반응형 CSS */}
            <style>{`
              @media (max-width: 768px) {
                .nav-menu-bar { display: none !important; }
                .nav-hamburger-wrap { display: flex !important; }
                .nav-social-wrap { margin-right: 0.5rem !important; }
              }
              @media (min-width: 769px) {
                .nav-menu-bar { display: flex !important; }
                .nav-hamburger-wrap { display: none !important; }
              }
            `}</style>
          </div>
        </nav>
        {/* 라우트별 화면 */}
        <Routes>
          {/* /hypecon/ 또는 /로 접근 시 Home으로 리다이렉트 */}
          <Route path="/hypecon" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          {/* 추가: 빈 페이지용 임시 컴포넌트 */}
          <Route path="/exhibition" element={<EmptyPage title="EXHIBITION" />} />
          <Route path="/brand" element={<EmptyPage title="BRAND" />} />
          <Route path="/ticket" element={<EmptyPage title="TICKET" />} />
          <Route path="/buyer" element={<EmptyPage title="BUYER" />} />
          <Route path="/influencer" element={<EmptyPage title="INFLUENCER" />} />
          <Route path="/contact" element={<EmptyPage title="CONTACT" />} />
          <Route path="/award" element={<EmptyPage title="AWARD" />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

// 각 페이지 컴포넌트 분리(기존 섹션 내용 복사해서 붙여넣기)
function HomePage() {
  return (
    <>
      <section id="home" className="waterbomb-hero">
        {/* 배경 영상 */}
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          poster={heroImage}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="hero-neon">Beyond Online, Experience Style</div>
          <div className="hero-main-title">HYPECON</div>
          <div className="hero-style-week">S T Y L E &nbsp; W E E K</div>
          <div className="hero-seoul">SEOUL 2026</div>
          <div className="hero-date">2026. 2.19~ 22 @ COEX HALL C</div>
          <div className="waterbomb-subtitle mb-12">
            Z세대와 브랜드가 감각을 공유하고 반응으로 세계를 여는 스타일 패션 · 뷰티  페어
          </div>
          <button className="waterbomb-btn">
            <span>JOIN HYPECON</span>
          </button>
        </div>
      </section>
      {/* 티켓/알림/참가신청/등록 박스 레이아웃 */}
      <section className="hero-below-section">
        <div className="hero-below-container">
          {/* 왼쪽 세로 박스 */}
          <div className="hero-below-left">
            <div className="hero-below-box">입장권 티켓 오픈<br/>알림 신청</div>
            <div className="hero-below-box">NOTICE</div>
            <div className="hero-below-box">뉴스레터 등록</div>
          </div>
          {/* 오른쪽 2x2 그리드 */}
          <div className="hero-below-right">
            <div className="hero-below-grid">
              <div className="hero-below-box hero-below-box-lg">
                얼리 참가신청<br/>OPEN<br/><span style={{fontSize:'1rem',fontWeight:400}}>부스 소진 시 마감</span>
              </div>
              <div className="hero-below-box hero-below-box-lg">
                Early TICKET OPEN<br/><span style={{fontSize:'1rem',fontWeight:400}}>2025. 10. 15.</span>
              </div>
              <div className="hero-below-box hero-below-box-lg">Influencer<br/>등록</div>
              <div className="hero-below-box hero-below-box-lg">BUYER/PRESS<br/>등록</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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

      {/* WHY HYPECON 타이틀 및 설명 (이미지 바로 아래로 이동) */}
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
          "Z세대는 제품이 아닌, <span style={{fontWeight:'900'}}>‘경험’</span>을 소비합니다."
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
      {/* 6 ZONE 스타일 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', margin:'0 auto 2.5rem auto'}}>
        {[
          {title:'실감 체험 콘텐츠', desc:'‘입어보고, 바로고, 꾸미고’ → 직접 경험 가능한 스타일 콘텐츠 다수 운영, 제품이 아닌 경험을 판매하는 구조'},
          {title:'참여형 콘텐츠 구조', desc:'릴스 챌린지, 스타일링랩/메이크업 다이브, 카멜 이벤트, 투표 콘텐츠 등 관람객이 콘텐츠 주인공이 되는 구조'},
          {title:'자동 확산 설계', desc:'활동 포인트, 릴스/인스타/챌스, 굿즈/인증샷 유도 등으로 SNS 확산이 자연스럽게 일어나는 시스템 내용'},
          {title:'도파민 자극 콘텐츠', desc:'피팅 컨텐츠 및 커스터마이즈, 타임세일 등 즉시 반응형 콘텐츠 중심, 2세대 ‘순간’ 반응 최적화'},
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


   {/* Z세대 경험 소비 강조 텍스트 */}
   <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.2rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.45rem', marginBottom:'0.3rem', letterSpacing:'-0.5px'}}>
          "Z세대는 제품이 아닌, <span style={{fontWeight:'900'}}>‘경험’</span>을 소비합니다."
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
      
        {/* 2줄(3+2) 레이아웃, 모바일은 세로 */}
        <div className="hypecon-feature-card-wrap mb-10" style={{width:'100%', padding:'0 1.2rem', boxSizing:'border-box'}}>
          <style>{`
            @media (max-width: 768px) {
              .hypecon-feature-card-row { flex-direction: column !important; gap: 1rem !important; align-items: stretch !important; }
              .hypecon-feature-card { min-width: 0 !important; width: 100% !important; max-width: 100% !important; }
            }
          `}</style>
          <div className="hypecon-feature-card-row" style={{display:'flex', flexDirection:'row', gap:'1.1rem', marginBottom:'1.1rem'}}>
            {[
              {title:'Z세대 큐레이션', desc:'Z세대가 지금 가장 사랑하는 브랜드만 선택'},
              {title:'피팅 기반 쇼핑', desc:'직접 입어보고 결정하는 “피팅” 기반 소비 경험'},
              {title:'실구매 전환', desc:'전시와 소비가 동시에 일어나는 체험형 플랫폼'},
            ].map((item) => (
              <div
                key={item.title}
                className="hypecon-feature-card"
                style={{
                  border:'2px solid #000', borderRadius:'10px', background:'#fff', padding:'18px 10px', minHeight:'130px', height:'100%', flex:'1 1 0', flexBasis:'210px', minWidth:'210px', maxWidth:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', wordBreak:'keep-all',
                }}>
                <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:'0.3rem', textAlign:'center', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', height:'32px', lineHeight:'32px', display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>{item.title}</div>
                <div style={{fontSize:'0.97rem', textAlign:'center', whiteSpace:'normal', flex:1, display:'flex', alignItems:'flex-start', justifyContent:'center', width:'100%'}}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="hypecon-feature-card-row" style={{display:'flex', flexDirection:'row', gap:'1.1rem', justifyContent:'center'}}>
            {[
              {title:'SNS 콘텐츠 허브', desc:'찍고 공유하며 자발적 바이럴 생성'},
              {title:'글로벌 유통 파급력', desc:'K-브랜드가 콘텐츠로 퍼지고, 리얼로 판매되고, 바이어와 연결되는 K-브랜드 실전형 유통 무대'},
            ].map((item) => (
              <div
                key={item.title}
                className="hypecon-feature-card"
                style={{
                  border:'2px solid #000', borderRadius:'10px', background:'#fff', padding:'18px 10px', minHeight:'130px', height:'100%', flex:'1 1 0', flexBasis:'210px', minWidth:'210px', maxWidth:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', wordBreak:'keep-all',
                }}>
                <div style={{fontWeight:'bold', fontSize:'1.08rem', marginBottom:'0.3rem', textAlign:'center', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', height:'32px', lineHeight:'32px', display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>{item.title}</div>
                <div style={{fontSize:'0.97rem', textAlign:'center', whiteSpace:'normal', flex:1, display:'flex', alignItems:'flex-start', justifyContent:'center', width:'100%'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 구분선 */}
        <div style={{borderTop:'4px solid #fff', margin:'40px 0 30px 0'}}></div>
        {/* 두번째 타이틀 */}
        <div className="text-center mb-2">
          <div style={{fontWeight:'900', fontSize:'1.5rem', letterSpacing:'-1px'}}>입어보고, 바르고, 꾸미고, 공유하고, 팬이 되는 도파민 쇼핑+콘텐츠 스타일 페어</div>
        </div>
        {/* 두번째 설명 → 6 ZONE 스타일로 교체 */}
        <div className="mb-2" style={{maxWidth:'700px', margin:'0 auto'}}>
          {[
            {title:'실감 체험 콘텐츠', desc:'‘입어보고, 바로고, 꾸미고’ → 직접 경험 가능한 스타일 콘텐츠 다수 운영, 제품이 아닌 경험을 판매하는 구조'},
            {title:'참여형 콘텐츠 구조', desc:'릴스 챌린지, 스타일링랩/메이크업 다이브, 카멜 이벤트, 투표 콘텐츠 등 관람객이 콘텐츠 주인공이 되는 구조'},
            {title:'자동 확산 설계', desc:'활동 포인트, 릴스/인스타/챌스, 굿즈/인증샷 유도 등으로 SNS 확산이 자연스럽게 일어나는 시스템 내용'},
            {title:'도파민 자극 콘텐츠', desc:'피팅 컨텐츠 및 커스터마이즈, 타임세일 등 즉시 반응형 콘텐츠 중심, 2세대 ‘순간’ 반응 최적화'},
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
                color: '#222', // 진한 검정
                lineHeight: '1.3',
                marginRight: '12px',
                whiteSpace: 'normal', // 줄바꿈 허용
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

function PartnersPage() {
  return (
    <section id="partners" className="waterbomb-section dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="waterbomb-section-title mb-6">PARTNERS</div>
          <div
            className="waterbomb-body"
            style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2rem' }}>
            <span style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              브랜드와 연결되는 가장 스타일리시한 접점
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'SPOTLIGHT SPONSOR', desc: '메인 스폰서\n브랜드 메인 타이틀 공동노출' },
            { name: 'TRENDSETTER SPONSOR', desc: '특정 존 명칭 후원\n체험 콘텐츠 연계' },
            { name: 'EXPERIENCE SPONSOR', desc: '포토존, 스타일링존\n특정 체험 콘텐츠 네이밍' },
            { name: 'COMMUNITY SPONSOR', desc: '굿즈 제작 협업\n서포터즈 캠페인' }
          ].map((partner, index) => (
            <div key={index} className="waterbomb-card fade-in">
              <h3>{partner.name}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{partner.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <button className="waterbomb-btn">
            <span>BECOME A PARTNER</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// 추가: 빈 페이지용 임시 컴포넌트
function EmptyPage({ title }) {
  return (
    <section style={{minHeight:'60vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{fontSize:'2.2rem', fontWeight:700, marginBottom:'1.2rem'}}>{title}</div>
      <div style={{fontSize:'1.2rem', color:'#888'}}>준비중입니다.</div>
    </section>
  );
}

// Footer 컴포넌트
function Footer() {
  return (
    <footer style={{width:'100%', background:'#FF96C5', marginTop:'3.5rem'}}>
      {/* 상단 라인 + 동그라미 */}
      <div style={{position:'relative', height:'18px', marginBottom:'1.2rem'}}>
        <div style={{borderTop:'2px solid #111', width:'100%', position:'absolute', top:'9px', left:0}}></div>
        <div style={{position:'absolute', top:'2px', right:0, width:'10px', height:'10px', borderRadius:'50%', background:'#111'}}></div>
      </div>
      <div className="container mx-auto px-4 footer-flex-wrap" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', padding:'0 0 2.2rem 0'}}>
        {/* 좌측 정보 */}
        <div style={{fontSize:'0.97rem', color:'#111', lineHeight:'1.7', fontWeight:400, maxWidth:'60vw'}}>
          <div>HYPECON STYLE WEEK 운영사무국</div>
          <div>서울시 강남구 테헤란로 142 아크플레이스 5F</div>
          <div>문의. hello@hypeconweek.com</div>
          <div style={{fontSize:'0.93rem', marginTop:'0.3rem'}}>Copyright(c) HYPECON STYLE WEEK All Rights Reserved.</div>
        </div>
        {/* 우측 로고 텍스트 */}
        <div style={{fontWeight:'900', color:'#111', textAlign:'right', lineHeight:'1.05', letterSpacing:'-1px', minWidth:'180px'}}>
          <span style={{fontSize:'2.7rem', display:'block', lineHeight:'1.05'}}>HYPECON</span>
          <span style={{fontSize:'2.1rem', display:'block', lineHeight:'1.05'}}>STYLE WEEK</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .footer-flex-wrap {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.2rem;
          }
          .footer-flex-wrap > div {
            width: 100% !important;
            text-align: left !important;
          }
          .footer-flex-wrap > div:last-child {
            text-align: left !important;
            min-width: 0 !important;
          }
          .footer-flex-wrap > div span {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default App

