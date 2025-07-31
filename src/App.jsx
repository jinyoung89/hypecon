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

// Import BrandPage
import BrandPage from './pages/BrandPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ExhibitionPage from './pages/ExhibitionPage';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import BuyerPage from './pages/BuyerPage';
import InfluencerPage from './pages/InfluencerPage';
import AwardPage from './pages/AwardPage';
import ContactPage from './pages/ContactPage';
import youtubeIcon from './assets/icons/youtube-icon.svg';
import facebookIcon from './assets/icons/facebook-icon.svg';
import tiktokIcon from './assets/icons/tiktok-icon.svg';
import instagramIcon from './assets/icons/instagram-icon.svg';

// Import Language Context
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  // 모바일 메뉴 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  // 현재 경로에 따라 메뉴 활성화 상태 확인
  const isActive = (path) => {
    return location.pathname === path;
  };

  // 페이지 이동 시 스크롤을 맨 위로 올리기
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <div className="min-h-screen" style={{paddingTop: '72px'}}>
        {/* 네비게이션 */}
      <nav className="waterbomb-nav" style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10000, width: '100%'}}>
        {/* 상단: 네온 옐로우 헤더 */}
        <div style={{
          background: 'var(--hypecon-main)',
          padding: '0.3rem 0',
          margin: 0
        }}>
          <div className="container mx-auto px-4" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* 중앙: 로고 */}
            <div style={{flex: 1}}></div>
            <Link to="/" style={{textDecoration: 'none'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontWeight: '900', fontSize: '1.7rem', color: 'var(--hypecon-dark)', lineHeight: '1'}}>HYPECON</div>
                <div style={{fontWeight: '500', fontSize: '1.35rem', color: 'var(--hypecon-dark)', lineHeight: '1'}}>STYLE WEEK</div>
              </div>
            </Link>
            {/* 오른쪽: 언어 변경 버튼 */}
            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
              <button 
                onClick={toggleLanguage}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#000',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '4px',
                  fontSize: 'clamp(1rem, 0.94vw, 1.125rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif',
                  fontStyle: 'normal',
                  lineHeight: '150%'
                }}
              >
                {language === 'KR' ? 'EN' : 'KR'}
              </button>
            </div>
          </div>
        </div>
        
        {/* 하단: 검은색 네비게이션 바 */}
        <div style={{
          background: 'var(--hypecon-dark)',
          padding: '0.3rem 0',
          margin: 0
        }}>
          <div className="container mx-auto px-4" style={{position:'relative'}}>
            {/* 햄버거 메뉴 + 네비게이션 링크 */}
            <div className="flex items-center justify-between" style={{position: 'relative', minHeight: '40px'}}>
              {/* 왼쪽: 빈 공간 (균형 맞추기) - 데스크톱에서만 */}
              <div className="nav-left-space" style={{width: '100px'}}></div>
              
              {/* 중앙: 네비게이션 링크들 */}
              <div className="nav-menu-bar flex items-center justify-center" style={{gap:'2rem', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                <Link to="/about" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/about') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>ABOUT</Link>
                <Link to="/exhibition" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/exhibition') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>EXHIBITION</Link>
                <Link to="/brand" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/brand') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>BRAND</Link>
                <Link to="/ticket" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/ticket') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>TICKET</Link>
                <Link to="/buyer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/buyer') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>BUYER</Link>
                <Link to="/influencer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/influencer') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>INFLUENCER</Link>
                <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/award') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>AWARD</Link>
                <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/contact') ? 'var(--hypecon-main)' : 'var(--hypecon-white)', padding:'0 0.2em'}}>CONTACT</Link>
              </div>
              
              {/* 오른쪽: 햄버거 메뉴 */}
              <div className="nav-hamburger-wrap" style={{display:'flex', width: '100px', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)'}}>
                <div onClick={()=>setIsMobileMenuOpen(v=>!v)} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
                  <div style={{width:'22px', height:'3px', background:'var(--hypecon-white)', borderRadius:'2px', margin:'2px 0'}}></div>
                  <div style={{width:'22px', height:'3px', background:'var(--hypecon-white)', borderRadius:'2px', margin:'2px 0'}}></div>
                  <div style={{width:'22px', height:'3px', background:'var(--hypecon-white)', borderRadius:'2px', margin:'2px 0'}}></div>
                </div>
              </div>
            </div>
            
            {/* 모바일 메뉴 드롭다운 */}
            {isMobileMenuOpen && (
              <div className="mobile-menu-dropdown" style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'var(--hypecon-white)',
                borderRadius: '0 0 18px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                padding: '1.5rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10000,
                borderTop: '2px solid var(--hypecon-main)',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}>
                <Link to="/about" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/about') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/exhibition" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/exhibition') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Exhibition</Link>
                <Link to="/brand" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/brand') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Brand</Link>
                <Link to="/ticket" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/ticket') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Ticket</Link>
                <Link to="/buyer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/buyer') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Buyer</Link>
                <Link to="/influencer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/influencer') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Influencer</Link>
                <Link to="/award" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/award') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Award</Link>
                <Link to="/contact" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/contact') ? 'var(--hypecon-main)' : 'var(--hypecon-dark)'}} onClick={()=>setIsMobileMenuOpen(false)}>Contact</Link>
              </div>
            )}
            
            {/* 반응형 CSS */}
            <style>{`
              @media (max-width: 768px) {
                .nav-menu-bar { display: none !important; }
                .nav-left-space { display: none !important; }
                .nav-hamburger-wrap { 
                  display: flex !important; 
                  width: 100px !important;
                  justify-content: flex-end !important;
                  align-items: center !important;
                  margin-left: auto !important;
                }
              }
              @media (min-width: 769px) {
                .nav-menu-bar { display: flex !important; }
                .nav-left-space { display: block !important; }
                .nav-hamburger-wrap { display: none !important; }
              }
            `}</style>
          </div>
        </div>
      </nav>
        {/* 라우트별 화면 */}
        <Routes>
          {/* /hypecon/ 또는 /로 접근 시 Home으로 리다이렉트 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          {/* 추가: 빈 페이지용 임시 컴포넌트 */}
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="/influencer" element={<InfluencerPage />} />
          <Route path="/award" element={<AwardPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </div>
      <Footer />
    </>
  )
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
    <footer style={{width:'100%', background:'var(--hypecon-dark)', marginTop:'0', padding: '4rem 0 2rem 0', textAlign: 'center'}}>
      <div className="container mx-auto px-4">
        {/* 메인 타이틀 */}
        <div style={{marginBottom: '2rem'}}>
          <div style={{fontSize: 'clamp(1.4rem, 14vw, 2.5rem)', fontWeight: '900', color: 'var(--hypecon-main)', marginBottom: '0rem', lineHeight: '0.8'}}>
            HYPECON
          </div>
          <div style={{fontSize: 'clamp(1.1rem, 12vw, 2.2rem)', fontWeight: '500', color: 'var(--hypecon-main)', marginBottom: '0rem', lineHeight: '0.8'}}>
            STYLE WEEK
          </div>
        </div>
        
        {/* 소셜 미디어 아이콘 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            background: 'transparent',
            borderRadius: '50%'
          }} className="hover:scale-110">
            <img src={youtubeIcon} alt="YouTube" style={{width:'40px', height:'40px', objectFit:'contain'}} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            background: 'transparent',
            borderRadius: '50%'
          }} className="hover:scale-110">
            <img src={facebookIcon} alt="Facebook" style={{width:'40px', height:'40px', objectFit:'contain'}} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            background: 'transparent',
            borderRadius: '50%'
          }} className="hover:scale-110">
            <img src={tiktokIcon} alt="TikTok" style={{width:'40px', height:'40px', objectFit:'contain'}} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            background: 'transparent',
            borderRadius: '50%'
          }} className="hover:scale-110">
            <img src={instagramIcon} alt="Instagram" style={{width:'40px', height:'40px', objectFit:'contain'}} />
          </a>
        </div>
        
        {/* 연락처 정보 */}
        <div style={{
          marginBottom: '2rem',
          lineHeight: '1.2'
        }}>
          <div style={{fontSize: '1rem', fontWeight: '500', marginBottom: '1rem', color: '#DDDDDD', fontFamily: 'Noto Sans KR'}}>
            HYPECON STYLE WEEK 운영사무국
          </div>
          <div style={{fontSize: '1rem', fontWeight: '350', color: '#DDDDDD', fontFamily: 'Noto Sans KR', lineHeight: 1.5}}>
            서울시 강남구 테헤란로 142 아크플레이스 5F<br/>
            문의. hello@hypeconweek.com
          </div>
        </div>
        
        {/* 저작권 */}
        <div style={{
          fontSize: '0.9rem',
          fontWeight: '350',
          color: '#DDDDDD',
          fontFamily: 'Noto Sans KR',
          marginTop: '1rem'
        }}>
          Copyright(c) HYPECON STYLE WEEK All Rights Reserved.
        </div>
      </div>
      
      <style>{`
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App