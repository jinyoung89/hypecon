import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/video_1.mp4';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
import sec2Img from '../assets/images/sec2_img.png';
import sec3Img from '../assets/images/sec3_img.png';
import sec3Img2 from '../assets/images/sec3_img_2.png';
import sec5Img from '../assets/images/sec5_img.png';
import sec4Img from '../assets/images/sec4_img.png';
import './HomePage.css';

function HomePage() {
  // 카드 클릭 핸들러
  const handleCardClick = () => {
    window.open('https://www.naver.com', '_blank');
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
          <div className="home-hero-date">SEOUL 2026</div>
          <div className="home-hero-title">HYPECON</div>
          <div className="home-hero-subtitle">STYLE WEEK</div>
          <div className="home-hero-desc">2026. 2.19 ~ 22 @ COEX HALL C</div>
        </div>
      </section>

      {/* 중간 콘텐츠 블록 */}
      <section className="home-section-block">
        <div className="container home-block-grid">
          {/* 왼쪽 섹션 */}
          <div>
            <h2 className="home-block-title">
              BEYOND ONLINE, EXPERIENCE STYLE
            </h2>
            <p className="home-block-desc">
              Z세대와 브랜드가 감각을 공유하고<br />
              반응으로 세계를 여는 스타일 패션·뷰티 페어
            </p>
            <div className="home-block-btns">
              <button onClick={handleCardClick} className="home-btn-main hover:scale-105">
                입장권 티켓 오픈 알림 신청
              </button>
              <button onClick={handleCardClick} className="home-btn-black hover:scale-105">
                뉴스레터 등록
              </button>
            </div>
          </div>
          
          {/* 오른쪽 섹션 - 이미지 */}
          <div className="home-block-img hover:scale-105">
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
            <div className="home-begins-left">
              <div className="home-begins-desc">
                THE MOMENT WHEN BRANDS<br />
                AND FANDOMS CONNECT DIRECTLY.
              </div>
              <h2 className="home-begins-title">
                THAT'S<br />
                WHERE<br />
                HYPECON<br />
                BEGINS.
              </h2>
              <p className="home-begins-highlight">
                브랜드와 팬덤이 연결되는 순간,<br />
                그 시작이 HYPECON입니다.
              </p>
            </div>
            
            {/* 오른쪽 이미지 블록들 */}
            <div className="home-begins-right">
              {/* 상단 이미지 블록 */}
              <div className="home-begins-img-block hover:scale-105">
                <img 
                  src={sec3Img}
                  alt="EARLY TICKET OPEN"
                  className="home-begins-img"
                />
                <div className="image-overlay home-begins-img-overlay">
                  <div className="overlay-text home-begins-img-title">
                    EARLY TICKET OPEN
                  </div>
                  <div className="overlay-underline home-begins-img-underline"></div>
                  <div className="overlay-text home-begins-img-date">
                    2025. 10. 15.
                  </div>
                </div>
              </div>
              
              {/* 하단 이미지 블록 */}
              <div className="home-begins-img-block hover:scale-105">
                <img 
                  src={sec3Img2}
                  alt="얼리 참가신청"
                  className="home-begins-img"
                />
                <div className="image-overlay home-begins-img-overlay">
                  <div className="overlay-text home-begins-img-title">
                    얼리 참가신청 OPEN
                  </div>
                  <div className="overlay-underline home-begins-img-underline"></div>
                  <div className="overlay-text home-begins-img-date">
                    부스 소진 시 마감
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
            <button onClick={handleCardClick} className="home-btn-black hover:scale-105">
              INFLUENCER 등록
            </button>
            <button onClick={handleCardClick} className="home-btn-main hover:scale-105">
              BUYER/PRESS 등록
            </button>
          </div>
        </div>
      </section>

      {/* 공지/NOTICE 뷰 */}
      <section className="notice-section" style={{
        background: 'var(--hypecon-main)',
        padding: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <div className="notice-inner" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          maxWidth: '900px',
          width: '100%',
          gap: '2.5rem',
          background: 'var(--hypecon-main)',
          borderRadius: '18px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
          padding: '2.2rem 1.5rem',
        }}>
          {/* 왼쪽 이미지 */}
          <div className="notice-img-col" style={{flex: '0 0 420px', display: 'flex', alignItems: 'stretch', justifyContent: 'center', height: '100%'}}>
            <img src={sec5Img} alt="Notice" style={{width: '100%', maxWidth: '420px', borderRadius: '12px', objectFit: 'cover', height: '100%'}} />
          </div>
          {/* 오른쪽 텍스트/버튼 */}
          <div className="notice-text-col" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 1.5rem', height: '100%'}}>
            <div style={{fontWeight: '900', fontSize: '2rem', lineHeight: '1.1', marginBottom: '0.2rem'}}>HYPECON</div>
            <div style={{fontWeight: '700', fontSize: '1.3rem', lineHeight: '1.1', marginBottom: '0.2rem'}}>STYLE WEEK</div>
            <div style={{fontWeight: '700', fontSize: '1.1rem', lineHeight: '1.1', marginBottom: '1.2rem'}}>SEOUL 2026</div>
            <ul style={{fontSize: '1rem', color: '#222', marginBottom: '1.5rem', paddingLeft: '1.2em', listStyle: 'disc'}}>
              <li style={{borderBottom: '1px solid #000', padding: '0.5em 0', fontWeight: 700}}>얼리버스 안내</li>
              <li style={{borderBottom: '1px solid #000', padding: '0.5em 0', fontWeight: 700}}>바이어 전용 라운지 이용안내</li>
              <li style={{borderBottom: '1px solid #000', padding: '0.5em 0', fontWeight: 700}}><b>COEX 3F C HALL</b> 평면도</li>
              <li style={{padding: '0.5em 0', fontWeight: 700}}>글로벌 바이어 매칭 프로그램 안내</li>
            </ul>
            <a href="/notice" style={{
              display: 'inline-block',
              background: '#000',
              color: 'var(--hypecon-main)',
              fontWeight: '900',
              fontSize: '1.15rem',
              borderRadius: '30px',
              padding: '0.9rem 2.5rem',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '0.5rem',
              letterSpacing: '0.03em',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'background 0.2s, color 0.2s'
            }}>NOTICE &nbsp; &gt;</a>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .notice-section {
              padding: 1.2rem 0 !important;
            }
            .notice-inner {
              flex-direction: column !important;
              gap: 1.2rem !important;
              padding: 1.2rem 0.5rem !important;
              border-radius: 10px !important;
            }
            .notice-img-col {
              max-width: 100% !important;
              margin-bottom: 1.2rem !important;
              height: auto !important;
            }
            .notice-text-col {
              padding: 0 0.5rem !important;
            }
          }
        `}</style>
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
          color: #CFFF00 !important;
        }
        .image-overlay:hover .overlay-underline {
          background: #CFFF00 !important;
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