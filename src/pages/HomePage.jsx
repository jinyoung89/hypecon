import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/video_1.mp4';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
import sec2Img from '../assets/images/sec2_img.png';
import sec3Img from '../assets/images/sec3_img.png';
import sec3Img2 from '../assets/images/sec3_img_2.png';
import sec4Img from '../assets/images/sec4_img.png';
import { useLanguage } from '../contexts/LanguageContext';
import './HomePage.css';

function HomePage() {
  const { t } = useLanguage();

  // 카드 클릭 핸들러 (네이버로 이동)
  const handleCardClick = () => {
    window.open('https://www.naver.com', '_blank');
  };

  // 인플루언서 등록 핸들러 (Google Forms로 이동)
  const handleInfluencerClick = () => {
    window.open('https://docs.google.com/forms/d/1ot0y2q8LRFzkeql-lvd3On5gwk-8pq6IB9l2ejKWq_Y/edit', '_blank');
  };

  // 바이어 등록 핸들러 (Google Forms로 이동)
  const handleBuyerClick = () => {
    window.open('https://docs.google.com/forms/d/1e0V1BkDvqMTnu5_ghtbpp7cb5pu5me_Is0MCf8jOo0g/edit', '_blank');
  };

  // 티켓 알림 신청 핸들러 (Google Forms로 이동)
  const handleTicketClick = () => {
    window.open('https://docs.google.com/forms/d/1qloDsLH1ODQeTmSJQoUrPKQ1fGNs5yi6vw1gbh-IYfM/edit', '_blank');
  };

  return (
    <>
      {/* 메인 히어로 섹션 */}
      <section className="home-hero-section">
        {/* 배경 비디오 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="home-hero-video"
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* 오버레이 */}
        <div className="home-hero-overlay"></div>
        
        {/* 텍스트 오버레이 */}
        <div className="home-hero-text">
          <div className="home-hero-title">{t('home.hero.title')}</div>
          <div className="home-hero-subtitle">{t('home.hero.subtitle')}</div>
          <div className="home-hero-desc">{t('home.hero.desc')}</div>
        </div>
      </section>

      {/* 중간 콘텐츠 블록 */}
      <section className="home-section-block">
        <div className="container home-block-grid">
          {/* 왼쪽 섹션 */}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 'clamp(300px, 24vw, 460px)'}}>
            {/* 상단 여백을 위한 빈 공간 */}
            <div style={{flex: 1}}></div>
            
            {/* 컨텐츠 영역 */}
            <div>
              <h2 className="home-block-title">
                {t('home.section1.title')}
              </h2>
              <p className="home-block-desc">
                {t('home.section1.desc')}
              </p>
              <div className="home-block-btns">
                <button onClick={handleTicketClick} className="home-btn-main hover:scale-105">
                  {t('home.section1.button')}
                </button>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 섹션 - 이미지 */}
          <div className="home-block-img">
            <img 
              src={sec2Img}
              alt="HYPECON Event"
              className="home-block-img-el"
            />
          </div>
        </div>
      </section>

      {/* "THAT'S WHERE HYPECON BEGINS" 섹션 */}
      <section className="home-begins-section">
        <div className="container home-begins-container">
          <div className="home-begins-grid">
            {/* 왼쪽 텍스트 섹션 */}
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 'clamp(300px, 24vw, 460px)'}}>
              {/* 상단 여백을 위한 빈 공간 */}
              <div style={{flex: 1}}></div>
              
              {/* 컨텐츠 영역 */}
              <div>
              <div className="home-begins-desc">
                {t('home.section2.desc')}
              </div>
              <h2 className="home-begins-title">
                {t('home.section2.title')}
              </h2>
              <p className="home-begins-highlight">
                {t('home.section2.highlight')}
              </p>
              </div>
            </div>
            
            {/* 오른쪽 이미지 블록들 */}
            <div className="home-begins-right">
              {/* 상단 이미지 블록 */}
              <div className="home-begins-img-block">
                <img 
                  src={sec3Img}
                  alt="얼리 부스 참가 신청"
                  className="home-begins-img"
                />
                <div className="image-overlay home-begins-img-overlay">
                  <div className="overlay-text home-begins-img-title">
                    {t('home.section2.earlyBooth')}
                  </div>
                  <div className="overlay-text home-begins-img-date">
                    {t('home.section2.deadline')}
                  </div>
                </div>
              </div>
              
              {/* 하단 이미지 블록 */}
              <div className="home-begins-img-block">
                <img 
                  src={sec3Img2}
                  alt="얼리 참가신청"
                  className="home-begins-img"
                />
                <div className="image-overlay home-begins-img-overlay">
                  <div className="overlay-text home-begins-img-title" style={{color: 'var(--hypecon-pink)'}}>
                    {t('home.section2.earlyApply')}
                  </div>
                  <div className="overlay-text home-begins-img-date" style={{color: 'var(--hypecon-pink)'}}>
                    {t('home.section2.deadline')}
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 인플루언서/바이어/프레스 섹션 */}
      <section className="home-influencer-section" style={{background: `url(${sec4Img}) center/cover no-repeat`}}>
        <div className="container home-influencer-container">
          <div className="home-influencer-btns">
            <button onClick={handleInfluencerClick} className="home-btn-black hover:scale-105">
              {t('home.section3.influencer')}
            </button>
            <button onClick={handleBuyerClick} className="home-btn-main hover:scale-105">
              {t('home.section3.buyer')}
            </button>
          </div>
        </div>
      </section>

      {/* 애니메이션 CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        @keyframes pattern-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        .hover\\:text-gray-700:hover {
          color: #374151;
        }
        
        /* 이미지 오버레이 호버 효과 */
        .image-overlay:hover .overlay-text {
          color: var(--hypecon-main) !important;
        }
        .image-overlay:hover .overlay-underline {
          background: var(--hypecon-main) !important;
        }
        
        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
          
          /* 모바일에서 터치 영역 확대 */
          button {
            min-height: 48px !important;
          }
          
          /* 모바일에서 텍스트 줄바꿈 최적화 */
          h1, h2, h3, p {
            word-break: keep-all;
            overflow-wrap: break-word;
          }
        }
        
        /* 태블릿 최적화 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .container {
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default HomePage; 