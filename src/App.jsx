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
                href="#zones" 
                className={`waterbomb-nav-link ${activeSection === 'zones' ? 'active' : ''}`}
                onClick={() => scrollToSection('zones')}
              >
                ZONES
              </a>
              <a 
                href="#awards" 
                className={`waterbomb-nav-link ${activeSection === 'awards' ? 'active' : ''}`}
                onClick={() => scrollToSection('awards')}
              >
                AWARDS
              </a>
              <a 
                href="#partners" 
                className={`waterbomb-nav-link ${activeSection === 'partners' ? 'active' : ''}`}
                onClick={() => scrollToSection('partners')}
              >
                PARTNERS
              </a>
              <a 
                href="#apply" 
                className={`waterbomb-nav-link ${activeSection === 'apply' ? 'active' : ''}`}
                onClick={() => scrollToSection('apply')}
              >
                APPLY
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
            Z세대와 브랜드가 함께하는 스타일 페어
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
      <section id="about" className="waterbomb-wave-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="waterbomb-section-title mb-8" style={{ color: '#000' }}>
            ABOUT HYPECON
          </div>
          <div className="waterbomb-subtitle mb-12" style={{ color: '#000' }}>
            10만 명 관람객, 1,000명 인플루언서, 120개 브랜드가 함께하는 스타일 플랫폼
          </div>
          
          <div className="stats-container">
            <div className="stats-item">
              <div className="text-6xl font-bold text-black mb-4">10만+</div>
              <div className="text-xl font-semibold text-black mb-2">관람객</div>
              <div className="text-black">Z세대 실소비자와 직접 연결</div>
            </div>
            <div className="stats-item">
              <div className="text-6xl font-bold text-black mb-4">1,000+</div>
              <div className="text-xl font-semibold text-black mb-2">인플루언서</div>
              <div className="text-black">SNS 릴스, 숏폼 콘텐츠 확산</div>
            </div>
            <div className="stats-item">
              <div className="text-6xl font-bold text-black mb-4">120+</div>
              <div className="text-xl font-semibold text-black mb-2">브랜드</div>
              <div className="text-black">실질적 터치포인트 제공</div>
            </div>
          </div>

          <div className="mt-12">
            <button className="waterbomb-btn">
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </section>

      {/* ZONES 섹션 */}
      <section id="zones" className="waterbomb-section dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="waterbomb-section-title mb-6">HYPECON ZONES</div>
            <div className="waterbomb-body max-w-3xl mx-auto">
              8개의 특별한 존에서 당신만의 스타일을 발견하고 표현하세요
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'HYPESHY', desc: '스트릿/유니섹스/그래픽\n말 없는 간지, 조용히 센 스트릿' },
              { name: 'COOLSHY', desc: '미니멀/시크/감성\n무심하고 정제된 도시 감성 룩' },
              { name: 'SUPERSHY', desc: '컬러풀/Y2K/키치\n튀고 싶은 유스 룩, 릴스 특화' },
              { name: 'FITSHY', desc: '스포츠·애슬레저\n퍼포먼스/요가 브랜드 중심' },
              { name: 'PICKSHY', desc: '주얼리·가방·슈즈\n스타일을 완성하는 아이템' },
              { name: 'BEAUTYSHY', desc: '대표 브랜드\nMZ 인기 코스메틱' },
              { name: 'SKINSHY', desc: '기초 스킨케어\n선크림, 앰플, 진정/보습' },
              { name: 'GLOWSHY', desc: '색조 화장품\n향수, 네일 등 표현 중심' }
            ].map((zone, index) => (
              <div key={index} className="waterbomb-card fade-in">
                <h3>{zone.name}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS 섹션 */}
      <section id="awards" className="waterbomb-section green">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="waterbomb-section-title mb-6" style={{ color: '#000' }}>
              K-STYLE AWARDS
            </div>
            <div className="waterbomb-body max-w-3xl mx-auto" style={{ color: '#000' }}>
              스타일을 만든 모든 이들을 위한, 하입콘 K-스타일 어워즈
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'HYPE STYLE ICON', desc: '행사 참여 셀럽 대상\n가장 주목받은 스타일 셀럽' },
              { name: 'K-FASHION CREATOR', desc: '셀럽 스타일리스트, 무대 디렉터\nZ세대 트렌드 반영 창조자' },
              { name: 'K-STYLE BRAND', desc: '참가 브랜드 중 1곳\n스타일 감성 + 부스 경험' },
              { name: 'VIRAL MOMENT', desc: 'SNS 가장 확산 콘텐츠\n도달률, 참여도 기준' },
              { name: 'NEXT GENERATION', desc: '콘텐츠 기획자, 디자이너\n참신한 아이디어 시도' },
              { name: 'GEN-Z PICK!', desc: '일반 관람객 인기 투표\n가장 스타일리시한 순간' }
            ].map((award, index) => (
              <div key={index} className="bg-black bg-opacity-20 border-2 border-black p-6 text-center fade-in">
                <h3 className="text-xl font-bold text-black mb-4">{award.name}</h3>
                <p className="text-black" style={{ whiteSpace: 'pre-line' }}>{award.desc}</p>
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
            <div className="waterbomb-body max-w-3xl mx-auto">
              브랜드와 연결되는 가장 스타일리시한 접점
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

          <div className="text-center mt-12">
            <button className="waterbomb-btn">
              <span>BECOME A PARTNER</span>
            </button>
          </div>
        </div>
      </section>

      {/* APPLY 섹션 */}
      <section id="apply" className="waterbomb-wave-section">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="waterbomb-section-title mb-8" style={{ color: '#000' }}>
            BRAND BOOTH APPLY
          </div>
          <div className="waterbomb-subtitle mb-12" style={{ color: '#000' }}>
            브랜드 부스 참가 신청
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-black bg-opacity-20 p-8 text-left">
              <h3 className="text-2xl font-bold text-black mb-4">기본 부스</h3>
              <div className="text-black mb-4">
                <div className="text-3xl font-bold mb-2">₩3,800,000</div>
                <div className="text-sm line-through">₩4,800,000</div>
                <div className="text-sm">(8/31까지 조기 신청 시)</div>
              </div>
              <ul className="text-black space-y-2">
                <li>• 1~4부스 가능</li>
                <li>• 구조물 제공</li>
                <li>• 공용 탈의실 사용</li>
              </ul>
            </div>
            
            <div className="bg-black bg-opacity-20 p-8 text-left">
              <h3 className="text-2xl font-bold text-black mb-4">독립 부스</h3>
              <div className="text-black mb-4">
                <div className="text-3xl font-bold mb-2">₩6,400,000</div>
                <div className="text-sm line-through">₩8,000,000</div>
                <div className="text-sm">(8/31까지 조기 신청 시)</div>
              </div>
              <ul className="text-black space-y-2">
                <li>• 2~12부스 (짝수 단위)</li>
                <li>• 자체 시공</li>
                <li>• 부스 내 탈의실 필수</li>
              </ul>
            </div>
          </div>

          <div className="button-container">
            <button className="waterbomb-btn">
              <span>부스 신청하기</span>
            </button>
            <button className="waterbomb-btn">
              <span>파트너십 문의</span>
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

