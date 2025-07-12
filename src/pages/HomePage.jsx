import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/hypecon.mp4';

function HomePage() {
  // 카드 클릭 핸들러
  const handleCardClick = () => {
    window.open('https://www.naver.com', '_blank');
  };

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
          <div className="hero-neon" style={{color:'#CFFF00', background:'none', WebkitBackgroundClip:'unset', WebkitTextFillColor:'unset'}}>Beyond Online, Experience Style</div>
          <div className="hero-main-title">HYPECON</div>
          <div className="hero-style-week">S T Y L E &nbsp; W E E K</div>
          <div className="hero-seoul">SEOUL 2026</div>
          <div className="hero-date">2026. 2.19~ 22 @ COEX HALL C</div>
          <div className="waterbomb-subtitle mb-12">
          Z세대와 브랜드가 감각을 공유하고 반응으로 세계를 여는 스타일 패션 · 뷰티  페어
          </div>
        
        </div>
      </section>
      {/* 티켓/알림/참가신청/등록 박스 레이아웃 */}
      <section className="hero-below-section">
        <div className="hero-below-container">
          {/* 왼쪽 세로 박스 */}
          <div className="hero-below-left">
            <div className="hero-below-box" style={{background:'#FF5768', color:'#fff', cursor:'pointer'}} onClick={handleCardClick}>입장권 티켓 오픈<br/>알림 신청</div>
            <div className="hero-below-box" style={{background:'#00A5E3', color:'#fff', cursor:'pointer'}} onClick={handleCardClick}>NOTICE</div>
            <div className="hero-below-box" style={{background:'#8DD7BF', color:'#222', cursor:'pointer'}} onClick={handleCardClick}>뉴스레터 등록</div>
          </div>
          {/* 오른쪽 2x2 그리드 */}
          <div className="hero-below-right">
            <div className="hero-below-grid">
              <div className="hero-below-box hero-below-box-lg" style={{background:'#FF60A8', color:'#fff', cursor:'pointer'}} onClick={handleCardClick}>
                얼리 참가신청<br/>OPEN<br/><span style={{fontSize:'1rem',fontWeight:400, color:'#fff'}}>부스 소진 시 마감</span>
              </div>
              <div className="hero-below-box hero-below-box-lg" style={{background:'#00CDAC', color:'#fff', cursor:'pointer'}} onClick={handleCardClick}>
                Early TICKET OPEN<br/><span style={{fontSize:'1rem',fontWeight:400, color:'#fff'}}>2025. 10. 15.</span>
              </div>
              <div className="hero-below-box hero-below-box-lg" style={{background:'#FFBF65', color:'#222', cursor:'pointer'}} onClick={handleCardClick}>Influencer<br/>등록</div>
              <div className="hero-below-box hero-below-box-lg" style={{background:'#CFFF00', color:'#222', cursor:'pointer'}} onClick={handleCardClick}>BUYER/PRESS<br/>등록</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage; 