import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/video_1.mp4';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
import sec2Img from '../assets/images/sec2_img.png';
import sec3Img from '../assets/images/sec3_img.png';
import sec3Img2 from '../assets/images/sec3_img_2.png';
import sec4Img from '../assets/images/sec4_img.png';
import homeImg from '../assets/images/home.png';
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
    <div className="home-page-root">
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
        <div className="home-hero-text" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 'clamp(1rem, 2vw, 2rem)'
        }}>
          <img 
            src={homeImg}
            alt="HYPECON STYLE WEEK"
            style={{
              width: 'clamp(300px, 31.25vw, 600px)',
              height: 'clamp(131px, 13.65vw, 262px)',
              objectFit: 'contain'
            }}
          />
          <div className="home-hero-subtitle" style={{
            color: '#FFF',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(1.2rem, 1.67vw, 2rem)',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'clamp(1.6rem, 2.5vw, 3rem)',
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>2026. 2.19 ~ 22 @ COEX C HALL</div>
        </div>
      </section>

      {/* 중간 콘텐츠 블록 */}
      <section className="home-section-block" style={{
        width: '100vw',
        height: 'clamp(400px, 33.33vw, 640px)',
        position: 'relative',
        background: '#F2F2F2',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          height: 'auto',
          minHeight: 'clamp(600px, 80vw, 800px)',
          padding: 'clamp(2rem, 4vw, 3rem) 0'
        }
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          margin: '0 auto',
          gap: 'clamp(2rem, 4vw, 4rem)',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            height: 'auto',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }
        }}>
          {/* 왼쪽 섹션 */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%',
            gap: 'clamp(1rem, 2vw, 2rem)',
            '@media (max-width: 768px)': {
              alignItems: 'center',
              textAlign: 'center',
              height: 'auto',
              gap: 'clamp(0.8rem, 2vw, 1.5rem)'
            }
          }}>
            {/* BEYOND ONLINE EXPERIENCE STYLE 타이틀 */}
            <div className="home-block-title" style={{
              width: 'clamp(300px, 31.61vw, 607px)',
              height: 'clamp(100px, 10.73vw, 206px)',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              color: 'black',
              fontSize: 'clamp(3rem, 5.21vw, 6.25rem)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: '400',
              lineHeight: 'clamp(2.5rem, 4.69vw, 5.625rem)',
              wordWrap: 'break-word',
              '@media (max-width: 768px)': {
                width: '100%',
                height: 'auto',
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                lineHeight: 'clamp(1.8rem, 7vw, 3.5rem)'
              }
            }}>
              {t('home.section1.title')}
            </div>
            
            {/* 설명 텍스트 */}
            <div style={{
              width: 'clamp(300px, 27.03vw, 519px)',
              height: 'clamp(30px, 2.97vw, 57px)',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              color: 'black',
              fontSize: 'clamp(0.75rem, 1.3vw, 1.563rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '400',
              lineHeight: 'clamp(1.5rem, 1.56vw, 1.875rem)',
              wordWrap: 'break-word',
              '@media (max-width: 768px)': {
                width: '100%',
                height: 'auto',
                fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
                lineHeight: 'clamp(1.2rem, 3.5vw, 1.5rem)'
              }
            }}>
              {t('home.section1.desc').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < t('home.section1.desc').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            
            {/* 버튼 컨테이너 */}
            <div style={{
              position: 'relative',
              width: 'clamp(300px, 28.13vw, 540px)',
              height: 'clamp(50px, 4.69vw, 90px)',
              '@media (max-width: 768px)': {
                width: '100%',
                maxWidth: 'clamp(280px, 80vw, 400px)',
                height: 'clamp(45px, 12vw, 60px)'
              }
            }}>
              {/* 버튼 배경 */}
              <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                background: '#00E5A8',
                borderRadius: '40px'
              }} />
              
              {/* 버튼 텍스트 */}
              <button 
                onClick={handleTicketClick} 
                className="home-btn-main hover:scale-105"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#000',
                  fontSize: 'clamp(21.6px, 1.875vw, 36px)',
                  fontFamily: '"Noto Sans CJK KR", sans-serif',
                  fontWeight: '700',
                  lineHeight: '120%',
                  wordWrap: 'break-word',
                  cursor: 'pointer',
                  '@media (max-width: 768px)': {
                    fontSize: 'clamp(18px, 4vw, 28px)',
                    lineHeight: '120%'
                  }
                }}
              >
                {t('home.section1.button')}
              </button>
            </div>
          </div>
          
          {/* 오른쪽 섹션 - 이미지 */}
          <div style={{
            width: 'clamp(314px, 32.76vw, 629px)',
            height: 'clamp(200px, 20.83vw, 400px)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            '@media (max-width: 768px)': {
              width: '100%',
              maxWidth: 'clamp(280px, 80vw, 400px)',
              height: 'clamp(180px, 50vw, 250px)'
            }
          }}>
            <img 
              src={sec2Img}
              alt="HYPECON Event"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* 흰색 여백바 */}
      <div style={{
        width: '100%',
        height: 'clamp(120px, 12.5vw, 240px)',
        background: '#FFFFFF',
        margin: 0,
        padding: 0
      }} />

       {/* 인플루언서/바이어/프레스 섹션 */}
       <section className="home-influencer-section" style={{
        background: `url(${sec4Img}) center/cover no-repeat`,
        height: 'clamp(400px, 39.53vw, 759px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button 
              onClick={handleInfluencerClick} 
              style={{
                width: 'clamp(400px, 45.3vw, 869.84px)',
                height: 'clamp(60px, 5.78vw, 111px)',
                borderRadius: '40px',
                background: 'black',
                color: 'white',
                border: 'none',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                fontSize: 'clamp(1.688rem, 2.34vw, 2.8125rem)',
                fontFamily: 'Noto Sans, sans-serif',
                fontWeight: '700',
                lineHeight: 'clamp(2rem, 2.81vw, 3.375rem)',
                wordWrap: 'break-word',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
            >
              {t('home.section3.influencer')}
            </button>
            <button 
              onClick={handleBuyerClick} 
              style={{
                width: 'clamp(400px, 45.3vw, 869.84px)',
                height: 'clamp(60px, 5.78vw, 111px)',
                borderRadius: '40px',
                background: '#00E5A8',
                color: 'black',
                border: 'none',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                fontSize: 'clamp(1.688rem, 2.34vw, 2.8125rem)',
                fontFamily: 'Noto Sans, sans-serif',
                fontWeight: '700',
                lineHeight: 'clamp(2rem, 2.81vw, 3.375rem)',
                wordWrap: 'break-word',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
            >
              {t('home.section3.buyer')}
            </button>
          </div>
        </div>
      </section>

           {/* 흰색 여백바 */}
           <div style={{
        width: '100%',
        height: 'clamp(120px, 12.5vw, 240px)',
        background: '#FFFFFF',
        margin: 0,
        padding: 0
      }} />

      {/* "THAT'S WHERE HYPECON BEGINS" 섹션 */}
      <section className="home-begins-section">
        <div className="container home-begins-container">
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            margin: '0 auto',
            gap: 'clamp(2rem, 4vw, 4rem)'
          }}>
            {/* 왼쪽 텍스트 섹션 */}
            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              gap: 'clamp(1rem, 2vw, 2rem)',
              '@media (max-width: 768px)': {
                alignItems: 'center',
                textAlign: 'center',
                width: '100%'
              }
            }}>
              {/* 컨텐츠 영역 */}
              <div style={{
                '@media (max-width: 768px)': {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }
              }}>
              <div className="home-begins-desc" style={{
                width: 'clamp(300px, 34.38vw, 660px)',
                height: 'auto',
                minHeight: 'clamp(30px, 3.02vw, 58px)',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'black',
                fontSize: 'clamp(1.125rem, 1.56vw, 1.875rem)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                lineHeight: 'clamp(1.35rem, 1.87vw, 2.25rem)',
                wordWrap: 'break-word',
                textAlign: 'left',
                alignItems: 'flex-start',
                '@media (max-width: 768px)': {
                  width: '100%',
                  textAlign: 'center',
                  alignItems: 'center'
                }
              }}>
                {t('home.section2.desc').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('home.section2.desc').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <h2 className="home-begins-title" style={{
                color: '#000',
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(108px, 9.375vw, 180px)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '87%',
                letterSpacing: '-1.8px',
                marginBottom: '1.5rem'
              }}>
                {t('home.section2.title').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('home.section2.title').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="home-begins-highlight" style={{
                width: 'clamp(300px, 25.42vw, 488px)',
                height: 'clamp(50px, 4.84vw, 93px)',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'black',
                fontSize: 'clamp(1.313rem, 1.82vw, 2.188rem)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                lineHeight: 'clamp(1.58rem, 2.18vw, 2.63rem)',
                wordWrap: 'break-word',
                '@media (max-width: 768px)': {
                  width: '100%',
                  textAlign: 'center',
                  alignItems: 'center'
                }
              }}>
                {t('home.section2.highlight').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t('home.section2.highlight').split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              </div>
            </div>
            
            {/* 오른쪽 이미지 블록들 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 2rem)'
            }}>
              {/* 상단 이미지 블록 */}
              <div style={{
                width: 'clamp(300px, 33.33vw, 640px)',
                height: 'clamp(200px, 23.96vw, 460px)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                display: 'flex',
                alignItems: 'stretch'
              }}>
                <img 
                  src={sec3Img}
                  alt="얼리 부스 참가 신청"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
              </div>
              
              {/* 하단 이미지 블록 */}
              <div style={{
                width: 'clamp(300px, 33.33vw, 640px)',
                height: 'clamp(200px, 23.96vw, 460px)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                display: 'flex',
                alignItems: 'stretch'
              }}>
                <img 
                  src={sec3Img2}
                  alt="얼리 참가신청"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
              </div>
            </div>
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
    </div>
  );
}

export default HomePage; 