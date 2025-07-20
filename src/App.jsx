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

function App() {
  // 모바일 메뉴 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 현재 경로에 따라 메뉴 활성화 상태 확인
  const isActive = (path) => {
    return location.pathname === path;
  };

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
      <nav className="waterbomb-nav" style={{position: 'relative', zIndex: 9999}}>
        {/* 상단: 네온 옐로우 헤더 */}
        <div style={{
          background: '#CFFF00',
          padding: '0.3rem 0',
          margin: 0
        }}>
          <div className="container mx-auto px-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* 중앙: 로고 */}
            <Link to="/" style={{textDecoration: 'none'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontWeight: '900', fontSize: '1.7rem', color: '#000', lineHeight: '1'}}>HYPECON</div>
                <div style={{fontWeight: '500', fontSize: '1.35rem', color: '#000', lineHeight: '1'}}>STYLE WEEK</div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* 하단: 검은색 네비게이션 바 */}
        <div style={{
          background: '#000',
          padding: '0.3rem 0',
          margin: 0
        }}>
          <div className="container mx-auto px-4" style={{position:'relative'}}>
            {/* 햄버거 메뉴 + 네비게이션 링크 */}
            <div className="flex items-center justify-between">
              {/* 왼쪽: 햄버거 메뉴 */}
              <div className="nav-hamburger-wrap" style={{display:'flex', width: '100px'}}>
                <div onClick={()=>setIsMobileMenuOpen(v=>!v)} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
                  <div style={{width:'22px', height:'3px', background:'#fff', borderRadius:'2px', margin:'2px 0'}}></div>
                  <div style={{width:'22px', height:'3px', background:'#fff', borderRadius:'2px', margin:'2px 0'}}></div>
                  <div style={{width:'22px', height:'3px', background:'#fff', borderRadius:'2px', margin:'2px 0'}}></div>
                </div>
              </div>
              
              {/* 중앙: 네비게이션 링크들 */}
              <div className="nav-menu-bar flex items-center justify-center" style={{gap:'2rem', flex: 1}}>
                <Link to="/about" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/about') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>ABOUT</Link>
                <Link to="/exhibition" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/exhibition') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>EXHIBITION</Link>
                <Link to="/brand" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/brand') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>BRAND</Link>
                <Link to="/ticket" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/ticket') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>TICKET</Link>
                <Link to="/buyer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/buyer') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>BUYER</Link>
                <Link to="/influencer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/influencer') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>INFLUENCER</Link>
                <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/award') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>AWARD</Link>
                <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1rem', color: isActive('/contact') ? '#CFFF00' : '#fff', padding:'0 0.2em'}}>CONTACT</Link>
              </div>
              
              {/* 오른쪽: 빈 공간 (균형 맞추기) */}
              <div style={{width: '100px'}}></div>
            </div>
            
            {/* 모바일 메뉴 드롭다운 */}
            {isMobileMenuOpen && (
              <div className="mobile-menu-dropdown" style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#fff',
                borderRadius: '0 0 18px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                padding: '1.5rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10000,
                borderTop: '2px solid #CFFF00',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}>
                <Link to="/about" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/about') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/exhibition" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/exhibition') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Exhibition</Link>
                <Link to="/brand" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/brand') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Brand</Link>
                <Link to="/ticket" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/ticket') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Ticket</Link>
                <Link to="/buyer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/buyer') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Buyer</Link>
                <Link to="/influencer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/influencer') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Influencer</Link>
                <Link to="/award" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/award') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Award</Link>
                <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', color: isActive('/contact') ? '#CFFF00' : '#000'}} onClick={()=>setIsMobileMenuOpen(false)}>Contact</Link>
              </div>
            )}
            
            {/* 반응형 CSS */}
            <style>{`
              @media (max-width: 768px) {
                .nav-menu-bar { display: none !important; }
                .nav-hamburger-wrap { display: flex !important; }
              }
              @media (min-width: 769px) {
                .nav-menu-bar { display: flex !important; }
                .nav-hamburger-wrap { display: flex !important; }
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
    <footer style={{width:'100%', background:'#000', marginTop:'0', padding: '4rem 0 2rem 0', textAlign: 'center'}}>
      <div className="container mx-auto px-4">
        {/* 메인 타이틀 */}
        <div style={{marginBottom: '2rem'}}>
          <div style={{fontSize: '3rem', fontWeight: '900', color: '#CFFF00', marginBottom: '0rem', lineHeight: '0.8'}}>
            HYPECON
          </div>
          <div style={{fontSize: '2.5rem', fontWeight: '900', color: '#CFFF00', marginBottom: '0rem', lineHeight: '0.8'}}>
            STYLE WEEK
          </div>
          <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#CFFF00'}}>
            SEOUL 2026
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
            width: '50px',
            height: '50px',
            background: '#CFFF00',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }} className="hover:scale-110">
            <FaYoutube size={20} color="#FF0000" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
            width: '50px',
            height: '50px',
            background: '#CFFF00',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }} className="hover:scale-110">
            <FaFacebookF size={18} color="#1877F3" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
            width: '50px',
            height: '50px',
            background: '#CFFF00',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }} className="hover:scale-110">
            <FaTiktok size={18} color="#000" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            width: '50px',
            height: '50px',
            background: '#CFFF00',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }} className="hover:scale-110">
            <FaInstagram size={20} color="#E1306C" />
          </a>
        </div>
        
        {/* 연락처 정보 */}
        <div style={{
          marginBottom: '2rem',
          lineHeight: '1.2'
        }}>
          <div style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.2rem', color: '#fff'}}>
            HYPECON STYLE WEEK 운영사무국
          </div>
          <div style={{fontSize: '1rem', marginBottom: '0.2rem', color: '#fff'}}>
            서울시 강남구 테헤란로 142 아크플레이스 5F
          </div>
          <div style={{fontSize: '1rem', color: '#fff'}}>
            문의. hello@hypeconweek.com
          </div>
        </div>
        
        {/* 저작권 */}
        <div style={{
          fontSize: '0.9rem',
          color: '#999',
        
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

export default App