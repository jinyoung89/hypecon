import React from 'react';
import heroImage from '../assets/images/waterbomb-hero.jpg';
import heroVideo from '../assets/videos/hypecon.mp4';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';

function HomePage() {
  // 카드 클릭 핸들러
  const handleCardClick = () => {
    window.open('https://www.naver.com', '_blank');
  };

  return (
    <>
      {/* 메인 히어로 섹션 */}
      <section style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #CFFF00 0%, #8DD7BF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        {/* 배경 비디오 */}
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* 오버레이 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }}></div>
        
        {/* 텍스트 오버레이 */}
        <div style={{textAlign: 'center', color: '#fff', zIndex: 2, position: 'relative'}}>
          <div style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.8rem', lineHeight: '0.9'}}>SEOUL 2026</div>
          <div style={{fontSize: '6rem', fontWeight: '900', marginBottom: '0.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: '0.8'}}>
            HYPECON
          </div>
          <div style={{fontSize: '4rem', fontWeight: '700', marginBottom: '0.8rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: '0.9'}}>
            STYLE WEEK
          </div>
          <div style={{fontSize: '1.5rem', fontWeight: '600', lineHeight: '1'}}>2026. 2.19 ~ 22 @ COEX HALL C</div>
        </div>
      </section>

      {/* 중간 콘텐츠 블록 */}
      <section style={{padding: '4rem 0', background: '#F0F0F0'}}>
        <div className="container mx-auto px-4" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
          {/* 왼쪽 섹션 */}
          <div>
            <h2 style={{fontSize: '2.5rem', fontWeight: '900', color: '#000', marginBottom: '1rem'}}>
              BEYOND ONLINE, EXPERIENCE STYLE
            </h2>
            <p style={{fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '2rem'}}>
              Z세대와 브랜드가 감각을 공유하고<br />
              반응으로 세계를 여는 스타일 패션·뷰티 페어
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <button onClick={handleCardClick} style={{
                background: '#CFFF00',
                color: '#000',
                border: 'none',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }} className="hover:scale-105">
                입장권 티켓 오픈 알림 신청
              </button>
              <button onClick={handleCardClick} style={{
                background: '#000',
                color: '#fff',
                border: 'none',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }} className="hover:scale-105">
                뉴스레터 등록
              </button>
            </div>
          </div>
          
          {/* 오른쪽 섹션 - 이미지 */}
          <div style={{
            borderRadius: '12px',
            height: '400px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            overflow: 'hidden'
          }} className="hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" 
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

      {/* "THAT'S WHERE HYPECON BEGINS" 섹션 */}
      <section style={{
        padding: '6rem 0',
        background: '#fff',
        color: '#000',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container mx-auto px-4" style={{position: 'relative', zIndex: 2}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            {/* 왼쪽 텍스트 섹션 */}
            <div style={{maxWidth: '600px'}}>
              <div style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '3rem', color: '#000', lineHeight: '1.5'}}>
                THE MOMENT WHEN BRANDS<br />
                AND FANDOMS CONNECT DIRECTLY.
              </div>
              <h2 style={{fontSize: '5.5rem', fontWeight: '700', marginTop: '6rem', marginBottom: '6rem', lineHeight: '0.8', color: '#000', letterSpacing: '-0.05em', transform: 'scaleY(1.6)'}}>
                THAT'S<br />
                WHERE<br />
                HYPECON<br />
                BEGINS.
              </h2>
              <p style={{fontSize: '1.5rem', lineHeight: '1.5', color: '#000', fontWeight: '700'}}>
                브랜드와 팬덤이 연결되는 순간,<br />
                그 시작이 HYPECON입니다.
              </p>
            </div>
            
            {/* 오른쪽 이미지 블록들 */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {/* 상단 이미지 블록 */}
              <div style={{
                borderRadius: '12px',
                height: '270px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }} className="hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=180&fit=crop" 
                  alt="EARLY TICKET OPEN"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                  textAlign: 'center'
                }} className="image-overlay">
                  <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem', transition: 'color 0.3s'}} className="overlay-text">
                    EARLY TICKET OPEN
                  </div>
                  <div style={{width: '60px', height: '2px', background: '#fff', marginBottom: '0.5rem', transition: 'background 0.3s'}} className="overlay-underline"></div>
                  <div style={{fontSize: '1rem', color: '#fff', transition: 'color 0.3s'}} className="overlay-text">
                    2025. 10. 15.
                  </div>
                </div>
              </div>
              
              {/* 하단 이미지 블록 */}
              <div style={{
                borderRadius: '12px',
                height: '270px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }} className="hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=180&fit=crop" 
                  alt="얼리 참가신청"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                  textAlign: 'center'
                }} className="image-overlay">
                  <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem', transition: 'color 0.3s'}} className="overlay-text">
                    얼리 참가신청 OPEN
                  </div>
                  <div style={{width: '60px', height: '2px', background: '#fff', marginBottom: '0.5rem', transition: 'background 0.3s'}} className="overlay-underline"></div>
                  <div style={{fontSize: '1rem', color: '#fff', transition: 'color 0.3s'}} className="overlay-text">
                    부스 소진 시 마감
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인플루언서/바이어/프레스 섹션 */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #CFFF00 0%, #8DD7BF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z\' fill=\'rgba(0,0,0,0.1)\'/%3E%3C/svg%3E")',
          animation: 'pattern-move 20s linear infinite'
        }}></div>
        <div className="container mx-auto px-4" style={{textAlign: 'center', position: 'relative', zIndex: 2}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto'}}>
            <button onClick={handleCardClick} style={{
              background: '#000',
              color: '#fff',
              border: 'none',
              padding: '1.5rem 2rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }} className="hover:scale-105">
              INFLUENCER 등록
            </button>
            <button onClick={handleCardClick} style={{
              background: '#CFFF00',
              color: '#000',
              border: 'none',
              padding: '1.5rem 2rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }} className="hover:scale-105">
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
          color: #CFFF00 !important;
        }
        .image-overlay:hover .overlay-underline {
          background: #CFFF00 !important;
        }
        
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export default HomePage; 