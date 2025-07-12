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
import boothImage from './assets/images/booth.png';

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
              <Link to="/exhibition" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Exhibition</Link>
              <Link to="/brand" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Brand</Link>
              <Link to="/ticket" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Ticket</Link>
              <Link to="/buyer" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Buyer</Link>
              <Link to="/influencer" className="waterbomb-nav-link" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Influencer</Link>
              <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Award</Link>
              <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Contact</Link>
            </div>
            {/* 모바일 메뉴 오버레이 */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col" onClick={()=>setIsMobileMenuOpen(false)}>
                <div style={{background:'#fff', borderRadius:'0 0 18px 18px', boxShadow:'0 8px 32px rgba(0,0,0,0.13)', margin:'0 auto', marginTop:'0.5rem', minWidth:'220px', maxWidth:'90vw', padding:'1.5rem 1.2rem', display:'flex', flexDirection:'column', alignItems:'center'}} onClick={e=>e.stopPropagation()}>
                  <Link to="/about" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>About</Link>
                  <Link to="/exhibition" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Exhibition</Link>
                  <Link to="/brand" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Brand</Link>
                  <Link to="/ticket" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Ticket</Link>
                  <Link to="/buyer" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Buyer</Link>
                  <Link to="/influencer" className="waterbomb-nav-link mb-3" style={{color:'var(--color-point-mint)', fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Influencer</Link>
                  <Link to="/award" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Award</Link>
                  <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Contact</Link>
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
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/brand" element={<BrandPage />} />
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
      {/* 6 ZONE 스타일 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', margin:'0 auto 2.5rem auto'}}>
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


   {/* Z세대 경험 소비 강조 텍스트 */}
   <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.2rem'}}>
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
              {title:'피팅 기반 쇼핑', desc:'직접 입어보고 결정하는 "피팅" 기반 소비 경험'},
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
        
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', marginBottom:'1.5rem'}}>
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
        }
      `}</style>

      {/* WHY JOIN */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>WHY JOIN</div>
        
        {/* 2x2 그리드 레이아웃 */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap:'1.5rem'}}>
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

      {/* 부스 이미지 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{textAlign:'center'}}>
          <img 
            src={boothImage} 
            alt="HYPECON 부스 안내" 
            style={{
              width:'100%', 
              maxWidth:'800px', 
              height:'auto', 
              borderRadius:'12px',
              boxShadow:'0 4px 20px rgba(0,0,0,0.1)',
              display:'block',
              margin:'0 auto'
            }} 
            onError={(e) => {
              console.error('이미지 로드 실패:', e.target.src);
              console.log('대체 이미지로 변경');
            }}
            onLoad={() => {
              console.log('이미지 로드 성공!');
            }}
          />
        </div>
      </div>
    </section>
  );
}

function BrandPage() {
  return (
    <section id="brand" className="waterbomb-wave-section" style={{background:'#FF96C5', color:'#000', padding:'0', paddingTop:'90px'}}>
      {/* 상단 이미지 + 텍스트 오버레이 */}
      <div style={{position:'relative', width:'100%', maxHeight:'340px', overflow:'hidden', marginBottom:'2.5rem'}}>
        <img src={diverseYouthFashio} alt="HYPECON 브랜드 파트너십" style={{width:'100%', objectFit:'cover', maxHeight:'340px', display:'block', filter:'brightness(0.82)'}} />
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none'}}>
          <div style={{color:'#fff', fontWeight:700, fontSize:'1.35rem', textShadow:'0 2px 12px rgba(0,0,0,0.32)', textAlign:'center', padding:'0 1.5rem', lineHeight:'1.5', letterSpacing:'-0.5px'}}>
            HYPECON STYLE WEEK에 선다는 건, 단지 참가가 아닌<br/>글로벌 브랜드로 향하는 첫 걸음입니다
          </div>
        </div>
      </div>

      {/* BRAND 타이틀 및 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div className="text-center mb-2">
          <div style={{fontWeight:'900', fontSize:'2.5rem', letterSpacing:'-1px'}}>BRAND</div>
          <div style={{fontWeight:'700', fontSize:'1.4rem', marginTop:'0.5rem'}}>브랜드가 콘텐츠가 되고, 팬덤이 되는 무대</div>
        </div>
        <div className="text-center mb-6" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
          <span style={{fontWeight:'bold'}}>HYPECON STYLE WEEK</span>에서 당신의 브랜드는 단순한 제품을 넘어<br/>
          Z세대와 함께 만들어가는 살아있는 콘텐츠가 됩니다.
        </div>
      </div>

      {/* "아무 브랜드나 참가할 수 없습니다" 섹션 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2.2rem 1.5rem', marginBottom:'2.5rem', color:'#222', fontSize:'1.08rem', lineHeight:'1.85', letterSpacing:'-0.01em'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1rem', color:'#FF5768', textAlign:'center'}}>
          "아무 브랜드나 참가할 수 없습니다."
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700}}>Z세대가 진짜로 좋아하는,</span><br/>
          패션과 뷰티를 진짜 브랜드만 선택되는 무대
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          하이픈은 브랜드의 <span style={{fontWeight:700}}>'규모'</span>보다 함께 영향력을 여기 봅니다.
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700}}>Z세대가 찾고, 착고, 퍼뜨리는 가장 즉각한 스타일 베어</span><br/>
          하이픈은 브랜드가 꿈꾸는 다음 레벨입니다.
        </div>
      </div>

      {/* 브랜드 큐레이션 기준 안내 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>브랜드 큐레이션 기준 안내</div>
        
        <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem'}}>
          {[
            {
              number: '1',
              title: 'Z세대 레퍼 보유 여부',
              content: '인스타그램, 틱톡 등 SNS 상의 팔로워 수, 댓글 반응률, 해 커뮤니티 유무 등\n"실제 팬들이 존재하고, 스타일에 영향력을 미치는 브랜드인가?"',
              color: '#FF5768'
            },
            {
              number: '2',
              title: '브랜드 정체성과 스타일 특성성',
              content: '콘셉트 명료도, 컬러 넘어서, 차기반의 세계관과 무드를 가진 브랜드인지\n바로와 아이덴티티, 톤&매, 재품 스타일이 명확히 구분되는가',
              color: '#00A5E3'
            },
            {
              number: '3',
              title: '실제 고객 반응과 리뷰 후기',
              content: '최근 6개월 이내의 온라인 판매 후기, 웹사이트 리뷰, 고객 피드백을 통해\n오프라인, 품질향, 고객 피드백 기반의 실제 반응을 체크',
              color: '#FFBF65'
            },
            {
              number: '4',
              title: '오프라인 확장 잠재력',
              content: '지금까지 온라인 중심이었다면, 오프라인 접점에서 매력적으로 보일 수\n있는가?\n피팅/체험/촬영을 통해 반응을 얻을 수 있는 제품 구성 여부',
              color: '#00CDAC'
            },
            {
              number: '5',
              title: '글로벌 확장 및 컨텐츠화 가능성',
              content: '한국 패션의 반응, 글로벌 매장 비즈, 해외 소셜 인정 여부\n브랜드의 컨텐츠화(릴스, 브이로그, 화보화 등) 가능성',
              color: '#FF60A8'
            }
          ].map((item, index) => (
            <div key={index} style={{
              background:'#fff',
              borderRadius:'18px',
              boxShadow:'0 2px 16px rgba(0,0,0,0.04)',
              padding:'2rem 1.5rem',
              borderLeft:`8px solid ${item.color}`,
              position:'relative'
            }}>
              <div style={{display:'flex', alignItems:'flex-start', gap:'1.5rem', flexWrap:'wrap'}}>
                <div style={{
                  minWidth:'40px',
                  width:'40px',
                  height:'40px',
                  background:item.color,
                  borderRadius:'50%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'#fff',
                  fontWeight:'bold',
                  fontSize:'1.2rem',
                  flexShrink:0
                }}>
                  {item.number}
                </div>
                <div style={{flex:1, minWidth:'300px'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#222', marginBottom:'0.8rem', lineHeight:'1.3'}}>
                    {item.title}
                  </div>
                  <div style={{fontSize:'1.05rem', color:'#666', lineHeight:'1.6', whiteSpace:'pre-line'}}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 얼리버드 참가 신청 혜택 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>얼리버드 참가 신청 혜택</div>
        
        <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', color:'#222'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'0.8rem'}}>
            {[
              '얼리버드 특가 적용 (선착순)',
              '위치 우선 배정 (입구/핵심 동선/무대 인접)',
              '코너 부스 추가 비용 면제 (2부스 이상 신청 시)',
              'SNS 사전 홍보 콘텐츠 기회',
              '브랜드 단독 패캠쇼 / AI 패션쇼 참여 우선권 (선정 브랜드 한정)',
              '브랜드 인터뷰 콘텐츠 및 프로모션 영상 우선 배정',
              '인플루언서, 황홍, 스타일링샵 콘텐츠 연계 우선 지원',
              'B2B 바이어 매칭 프로그램 우선 배정',
              '굿즈 제작 및 커스터마이징 협업 콘텐츠 연계 가능',
              '참가 브랜드 대상 바이어 수주회 등록 가능'
            ].map((benefit, index) => (
              <div key={index} style={{
                display:'flex',
                alignItems:'center',
                padding:'0.8rem 0',
                borderBottom: index !== 9 ? '1px solid #f0f0f0' : 'none'
              }}>
                <div style={{
                  width:'8px',
                  height:'8px',
                  background:'#FF5768',
                  borderRadius:'50%',
                  marginRight:'1rem',
                  flexShrink:0
                }}></div>
                <div style={{fontSize:'1.05rem', lineHeight:'1.5'}}>
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 참가신청 절차 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>참가신청 절차</div>
        
        <div style={{position:'relative', paddingLeft:'60px'}}>
          {/* 세로 타임라인 라인 */}
          <div style={{
            position:'absolute',
            left:'30px',
            top:'30px',
            bottom:'30px',
            width:'3px',
            background:'linear-gradient(to bottom, #FF5768, #00A5E3, #FFBF65, #00CDAC, #FF60A8)',
            borderRadius:'2px'
          }}></div>
          
          {[
            {
              step: '1',
              title: '온라인 얼리 참가 신청서 제출',
              description: '참가 마감일: 2025. 09. 30(화)\n신청 방식: 온라인 참가 신청서 제출 → 내부 큐레이션 심사 → 개별 참가 확정 안내\n⚠️ 얼리버드 특가는 부스 소진 시 조기 마감될 수 있습니다.\n📝 부스 배정은 신청 접수 순서, 브랜드 규모, 부스 타입, 브랜드 콘셉트 등을 종합적으로 검토하여 기준에 따라 배정',
              color: '#FF5768'
            },
            {
              step: '2',
              title: '계약금 납부',
              description: '인보이스 송신 후 결제링크 안내\n부스비 총액의 50% 납부\n💳 계약금 미납시 부스 미확정',
              color: '#00A5E3'
            },
            {
              step: '3',
              title: '잔금납부',
              description: '- 기업 : 인보이스 송신 후 60일 이내 완납\n💳 잔금 미납시 배정된 부스 자동 취소',
              color: '#FFBF65'
            },
            {
              step: '4',
              title: '부대시설 신청 및 입금',
              description: '~2025. 12. 31(수)',
              color: '#00CDAC'
            },
            {
              step: '5',
              title: '전시회 개막',
              description: '~2026. 2.19(목)',
              color: '#FF60A8'
            }
          ].map((item, index) => (
            <div key={index} style={{
              position:'relative',
              marginBottom: index < 4 ? '2.5rem' : '0',
              display:'flex',
              alignItems:'flex-start',
              gap:'1.5rem'
            }}>
              {/* 단계 번호 원 */}
              <div style={{
                position:'absolute',
                left:'-45px',
                top:'10px',
                width:'60px',
                height:'60px',
                background:item.color,
                borderRadius:'50%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                color:'#fff',
                fontWeight:'bold',
                fontSize:'1.5rem',
                boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
                border:'4px solid #fff',
                zIndex:10
              }}>
                {item.step}
              </div>
              
              {/* 내용 카드 */}
              <div style={{
                background:'#fff',
                borderRadius:'12px',
                padding:'1.8rem 1.5rem',
                boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
                borderLeft:`4px solid ${item.color}`,
                width:'100%',
                marginLeft:'15px'
              }}>
                <div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#222', marginBottom:'0.8rem'}}>
                  {item.title}
                </div>
                <div style={{fontSize:'0.95rem', color:'#666', lineHeight:'1.6', whiteSpace:'pre-line'}}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 모바일 반응형 CSS */}
        <style>{`
          @media (max-width: 768px) {
            .container .mx-auto .px-4 > div[style*="paddingLeft"] {
              padding-left: 40px !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div[style*="position:absolute"][style*="left:30px"] {
              left: 20px !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div > div[style*="position:absolute"][style*="left:-45px"] {
              left: -30px !important;
              width: 40px !important;
              height: 40px !important;
              font-size: 1.2rem !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div > div[style*="marginLeft:15px"] {
              margin-left: 10px !important;
              padding: 1.2rem 1rem !important;
            }
          }
        `}</style>
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

