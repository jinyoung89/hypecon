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
              <Link to="/brand" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Brand</Link>
              <Link to="/ticket" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Ticket</Link>
              <Link to="/buyer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Buyer</Link>
              <Link to="/influencer" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Influencer</Link>
              <Link to="/award" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Award</Link>
              <Link to="/contact" className="waterbomb-nav-link" style={{fontWeight:600, fontSize:'1.13rem', padding:'0 0.2em'}}>Contact</Link>
            </div>
            {/* 모바일 메뉴 오버레이 */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col" onClick={()=>setIsMobileMenuOpen(false)}>
                <div style={{background:'#fff', borderRadius:'0 0 18px 18px', boxShadow:'0 8px 32px rgba(0,0,0,0.13)', margin:'0 auto', marginTop:'0.5rem', minWidth:'220px', maxWidth:'90vw', padding:'1.5rem 1.2rem', display:'flex', flexDirection:'column', alignItems:'center'}} onClick={e=>e.stopPropagation()}>
                  <Link to="/about" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>About</Link>
                  <Link to="/exhibition" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Exhibition</Link>
                  <Link to="/brand" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Brand</Link>
                  <Link to="/ticket" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Ticket</Link>
                  <Link to="/buyer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Buyer</Link>
                  <Link to="/influencer" className="waterbomb-nav-link mb-3" style={{fontWeight:600, fontSize:'1.13rem'}} onClick={()=>setIsMobileMenuOpen(false)}>Influencer</Link>
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

