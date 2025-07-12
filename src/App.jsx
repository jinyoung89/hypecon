import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import heroImage from './assets/images/waterbomb-hero.jpg'
import blueCrowd from './assets/images/blue-crowd.jpg'
import waterCannons from './assets/images/water-cannons.png'
import neonStage from './assets/images/neon-green-stage.jpg'

// Import video (여기에 영상 파일명을 넣으세요)
import heroVideo from './assets/videos/hypecon.mp4'
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 로딩 애니메이션
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <div className="waterbomb-loading">
        <div className="waterbomb-loading-text">HYPECON</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* 워터밤 스타일 네비게이션 */}
      <nav className="waterbomb-nav">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="waterbomb-title" style={{ fontSize: '1.5rem' }}>
              HYPECON
            </div>
            <div className="flex space-x-6">
              <a 
                href="#home" 
                className={`waterbomb-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                HOME
              </a>
              <a 
                href="#about" 
                className={`waterbomb-nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                ABOUT
              </a>
              <a 
                href="#partners" 
                className={`waterbomb-nav-link ${activeSection === 'partners' ? 'active' : ''}`}
                onClick={() => scrollToSection('partners')}
              >
                PARTNERS
              </a>
            </div>
            {/* 소셜 아이콘 버튼 */}
            <div className="flex flex-row items-center space-x-5 ml-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"
                style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s', marginRight:'1.25rem' }}
                className="hover:bg-pink-100">
                <FaInstagram size={20} color="#E1306C" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube"
                style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s', marginRight:'1.25rem' }}
                className="hover:bg-red-100">
                <FaYoutube size={20} color="#FF0000" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"
                style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s', marginRight:'1.25rem' }}
                className="hover:bg-blue-100">
                <FaFacebookF size={18} color="#1877F3" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok"
                style={{ width:36, height:36, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', transition:'background 0.2s' }}
                className="hover:bg-gray-200">
                <FaTiktok size={18} color="#000" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 워터밤 스타일 히어로 섹션 */}
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
                열리 참가신청<br/>OPEN<br/><span style={{fontSize:'1rem',fontWeight:400}}>부스 소진 시 마감</span>
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

      {/* ABOUT 섹션 */}
      <section id="about" className="waterbomb-wave-section" style={{background:'#d32f2f', color:'#000', padding:'0'}}>
        <div className="container mx-auto px-4 py-12" style={{maxWidth:'900px'}}>
          {/* WHY HYPECON 타이틀 */}
          <div className="text-center mb-2">
            <div style={{fontWeight:'900', fontSize:'2.5rem', letterSpacing:'-1px'}}>WHY HYPECON</div>
            <div style={{fontWeight:'700', fontSize:'1.4rem', marginTop:'0.5rem'}}>입고, 퍼지고, 팔리는 브랜드의 리얼 무대</div>
          </div>
          {/* WHY HYPECON 설명 */}
          <div className="text-center mb-6" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
            <span style={{fontWeight:'bold'}}>HYPECON</span>은 브랜드가 단순히 보여지는 곳이 아닙니다.<br/>
            입혀지고, 반응이 콘텐츠가 되고, 판매로 이어지며, 국내외 팬과 브랜드가 직접 연결되는 오프라인 플랫폼입니다.
          </div>
          {/* 5가지 특징 박스 */}
          <div
            className="flex flex-row gap-3 mb-10 md:gap-3 gap-4"
            style={{width:'100%', flexWrap:'wrap'}}>
            {/* 반응형: 모바일에서는 세로로 쌓이게 */}
            <style>{`
              @media (max-width: 768px) {
                .hypecon-feature-card-wrap { flex-direction: column !important; gap: 1rem !important; }
                .hypecon-feature-card { min-width: 0 !important; width: 100% !important; max-width: 100% !important; }
              }
            `}</style>
            {[
              {title:'Z세대 큐레이션', desc:'Z세대가 지금 가장 사랑하는 브랜드만 선택'},
              {title:'피팅 기반 쇼핑', desc:'직접 입어보고 결정하는 “피팅” 기반 소비 경험'},
              {title:'실구매 전환', desc:'전시와 소비가 동시에 일어나는 체험형 플랫폼'},
              {title:'SNS 콘텐츠 허브', desc:'찍고 공유하며 자발적 바이럴 생성'},
              {title:'글로벌 유통 파급력', desc:'K-브랜드가 콘텐츠로 퍼지고, 리얼로 판매되고, 바이어와 연결되는 K-브랜드 실전형 유통 무대'},
            ].map((item, idx) => (
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
          {/* 구분선 */}
          <div style={{borderTop:'4px solid #fff', margin:'40px 0 30px 0'}}></div>
          {/* 두번째 타이틀 */}
          <div className="text-center mb-2">
            <div style={{fontWeight:'900', fontSize:'1.5rem', letterSpacing:'-1px'}}>좋아하는 브랜드를 마주하고, 입고, 즐기는 순간</div>
          </div>
          {/* 두번째 설명 */}
          <div className="text-center mb-8" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
            내가 좋아하던 브랜드를 한자리에 만나 입어보고, 스타일링 받고, 포토존에서 찍고, 챌린지를 즐기고, 릴스로 퍼뜨리고, 셀럽과 인플루언서를 직접 마주하고 패션쇼까지 함께하는 Z세대만의 실감형 스타일 플레이그라운드입니다.
          </div>
          {/* 6 ZONE 라인업 */}
          <div className="mb-2" style={{maxWidth:'700px', margin:'0 auto'}}>
            {[
              {num:'01.', title:'TRY-ON ZONE', desc:'입고 스타일링 받기'},
              {num:'02.', title:'CUSTOMIZING', desc:'패치, 데코로 나만의 스타일 만들기'},
              {num:'03.', title:'PHOTO ZONE', desc:'인생네컷 & 바이럴 포토 콘텐츠'},
              {num:'04.', title:'SELFIE RANKING', desc:'베스트 셀피 선정 콘텐츠'},
              {num:'05.', title:'STYLE QUEST', desc:'미션 클리어 & 굿즈 리워드'},
              {num:'06.', title:'CELEB STAGE', desc:'셀럽 퍼포먼스'},
            ].map((item, idx) => (
              <div key={item.num} style={{display:'flex', alignItems:'center', padding:'18px 0', borderBottom: idx!==5 ? '2px solid #000' : 'none'}}>
                <div style={{width:'320px', fontWeight:'900', fontSize:'1.5rem', color:'#000', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight:'1.2'}}>{item.num} <span style={{fontWeight:'900', fontSize:'1.5rem'}}>{item.title}</span></div>
                <div style={{flex:1, fontSize:'1.05rem', color:'#000', fontWeight:'400', marginLeft:'18px'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS 섹션 */}
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

      {/* 푸터 */}
      <footer className="waterbomb-section dark border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="waterbomb-title mb-4" style={{ fontSize: '2rem' }}>
            HYPECON
          </div>
          <div className="waterbomb-body mb-8">
            HYPECON STYLE WEEK 2025<br />
            Z세대를 위한 패션 뷰티 페스티벌<br />
            partner@hypeconweek.com | 02-567-5109
          </div>
          <div className="flex justify-center space-x-8">
            <a href="#" className="waterbomb-nav-link">Instagram</a>
            <a href="#" className="waterbomb-nav-link">TikTok</a>
            <a href="#" className="waterbomb-nav-link">YouTube</a>
            <a href="#" className="waterbomb-nav-link">Twitter</a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            © 2025 HYPECON STYLE WEEK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

