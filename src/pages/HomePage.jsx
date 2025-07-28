import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/video_1.mp4';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
import sec2Img from '../assets/images/sec2_img.png';
import sec3Img from '../assets/images/sec3_img.png';
import sec3Img2 from '../assets/images/sec3_img_2.png';
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 'clamp(300px, 24vw, 460px)'}}>
            {/* 상단 여백을 위한 빈 공간 */}
            <div style={{flex: 1}}></div>
            
            {/* 컨텐츠 영역 */}
            <div>
              <h2 className="home-block-title">
                BEYOND ONLINE EXPERIENCE STYLE
              </h2>
              <p className="home-block-desc">
                Z세대와 브랜드가 감각을 공유하고<br />
                반응으로 세계를 여는 스타일 패션·뷰티 페어
              </p>
              <div className="home-block-btns">
                <button onClick={handleCardClick} className="home-btn-main hover:scale-105">
                  입장권 티켓 오픈 알림 신청
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
                    얼리 부스 참가 신청
                  </div>
                  <div className="overlay-text home-begins-img-date">
                    부스 소진 시 마감
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
                    얼리 참가신청 OPEN
                  </div>
                  <div className="overlay-text home-begins-img-date" style={{color: 'var(--hypecon-pink)'}}>
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