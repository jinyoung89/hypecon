import React from 'react';
import aboutSec04Img from '../assets/images/about_sec04_img.png';
import aboutImg from '../assets/images/about.png';
import { useLanguage } from '../contexts/LanguageContext';
import '../AboutPage.css';

function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* 상단 소개 섹션 */}
      <section className="about-section about-section-intro" style={{
        background: `url(${aboutImg}) center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'clamp(427px, (854/1920)*100vw, 854px)',
        padding: 'clamp(1rem, 2vw, 2rem)',
        '@media (max-width: 768px)': {
          height: 'auto !important',
          minHeight: 'clamp(427px, (854/1920)*100vw, 854px) !important',
          padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
          flexDirection: 'column !important'
        }
      }}>
        <div style={{
          width: 'clamp(300px, 56.41vw, 1083px)',
          height: 'clamp(150px, 16.61vw, 319px)',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 'clamp(0.5rem, 2vw, 2rem)',
          maxWidth: '90vw',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            alignItems: 'center !important',
            textAlign: 'center !important',
            gap: 'clamp(1rem, 3vw, 2rem) !important',
            maxWidth: '85vw !important'
          }
        }}>
          <span style={{
            color: '#FFF',
            fontSize: 'clamp(28px, (56/1920)*100vw, 56px)',
            fontFamily: 'Noto Sans CJK KR, sans-serif',
            fontStyle: 'normal',
            fontWeight: '900',
            lineHeight: 'clamp(36px, (73/1920)*100vw, 73px)',
            letterSpacing: 'clamp(-1.4px, (-2.8/1920)*100vw, -2.8px)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(1rem, 4.5vw, 1.3rem) !important',
              lineHeight: 'clamp(1.2rem, 4.5vw, 1.5rem) !important',
              textAlign: 'center !important',
              whiteSpace: 'pre-line !important',
              wordBreak: 'keep-all !important',
              overflowWrap: 'break-word !important'
            }
          }}>
            {t('about.intro.mainTitle')}
          </span>
          <span style={{
            color: 'white',
            fontSize: 'clamp(18px, (36/1920)*100vw, 36px)',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '700',
            lineHeight: 'clamp(24px, (48/1920)*100vw, 48px)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(18px, (36/1920)*100vw, 36px) !important',
              lineHeight: 'clamp(24px, (48/1920)*100vw, 48px) !important',
              textAlign: 'center !important',
              whiteSpace: 'pre-line !important',
              wordBreak: 'keep-all !important',
              overflowWrap: 'break-word !important'
            }
          }}>
            <br/>
          </span>
          <span style={{
            color: 'white',
            fontSize: 'clamp(18px, (36/1920)*100vw, 36px)',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '700',
            lineHeight: 'clamp(24px, (48/1920)*100vw, 48px)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(18px, (36/1920)*100vw, 36px) !important',
              lineHeight: 'clamp(24px, (48/1920)*100vw, 48px) !important',
              textAlign: 'center !important',
              whiteSpace: 'pre-line !important',
              wordBreak: 'keep-all !important',
              overflowWrap: 'break-word !important'
            }
          }}>
            {t('about.intro.subtitle')}
          </span>
        </div>
      </section>

      {/* 흰색 섹션 */}
      <section style={{
        background: 'white',
        height: 'clamp(120px, (240/1920)*100vw, 240px)',
        width: '100%',
        margin: '0',
        padding: '0'
      }}></section>

      {/* Z세대가 주목하는  섹션 */}
      <section style={{
        background: '#F2F2F2',
        height: 'clamp(460px, (920/1920)*100vw, 920px)',
        width: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'clamp(600px, 80vw, 1200px)',
          padding: '0 clamp(1rem, 3vw, 2rem)'
        }}>
          <span style={{
            color: 'black',
            fontSize: 'clamp(19.2px, (32/1920)*100vw, 32px)',
            fontFamily: 'Noto Sans CJK KR, sans-serif',
            fontWeight: '400',
            lineHeight: 'clamp(27px, (45/1920)*100vw, 45px)',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {(() => {
              const description = t('about.intro.description');
              const keywords = t('about.intro.highlightKeywords');
              
              // 키워드를 길이 순으로 정렬 (긴 키워드부터 처리)
              const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
              
              // 텍스트를 키워드로 분할하고 강조 처리
              let result = [description];
              
              sortedKeywords.forEach(keyword => {
                const newResult = [];
                result.forEach(part => {
                  if (typeof part === 'string') {
                    const parts = part.split(keyword);
                    parts.forEach((textPart, index) => {
                      if (textPart) newResult.push(textPart);
                      if (index < parts.length - 1) {
                        newResult.push(
                          <span key={`${keyword}-${index}`} style={{ fontWeight: '700' }}>
                            {keyword}
                          </span>
                        );
                      }
                    });
                  } else {
                    newResult.push(part);
                  }
                });
                result = newResult;
              });
              
              return result;
            })()}
          </span>
        </div>
      </section>

       {/* 흰색 섹션 */}
       <section style={{
        background: 'white',
        height: 'clamp(120px, (240/1920)*100vw, 240px)',
        width: '100%',
        margin: '0',
        padding: '0'
      }}></section>

      {/* WHY BRANDS CHOOSE HYPECON 섹션 */}
      <section className="about-section about-section-why" style={{
        background: `var(--hypecon-dark)`,
        height: 'clamp(600px, (1200/1920)*100vw, 1200px)',
        '@media (max-width: 768px)': {
          height: 'auto !important',
          minHeight: 'clamp(600px, 80vw, 800px) !important',
          padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
          flexDirection: 'column !important'
        }
      }}>
        <div className="about-why-title" style={{
          width: 'clamp(600px, (1200/1920)*100vw, 1200px)',
          height: 'clamp(180px, (360/1920)*100vw, 360px)',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: 'var(--hypecon-teal)',
          fontSize: 'clamp(6.75rem, (180/1920)*100vw, 11.25rem)',
          fontFamily: 'Bebas Neue, sans-serif',
          fontWeight: '400',
          lineHeight: 'clamp(5.53rem, (147.6/1920)*100vw, 9.23rem)',
          wordWrap: 'break-word',
          whiteSpace: 'pre-line',
          '@media (max-width: 768px)': {
            fontSize: 'clamp(2.5rem, 12vw, 6rem) !important',
            lineHeight: 'clamp(2rem, 10vw, 5rem) !important',
            height: 'auto !important',
            marginBottom: 'clamp(2rem, 4vw, 3rem) !important',
            textAlign: 'center !important',
            whiteSpace: 'pre-line !important',
            width: '100% !important'
          }
        }}>
          {t('about.why.title')}
        </div>
        <div className="about-why-desc" style={{
          width: 'clamp(462px, (924/1920)*100vw, 924px)',
          height: 'clamp(112.43px, (224.86/1920)*100vw, 224.86px)',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            fontSize: 'clamp(1.2rem, 4vw, 2rem) !important',
            lineHeight: 'clamp(1.5rem, 4.5vw, 2.5rem) !important',
            padding: '0 clamp(1rem, 3vw, 2rem) !important',
            textAlign: 'center !important'
          }
        }}>
          <span style={{
            color: 'var(--hypecon-white)',
            fontSize: 'clamp(1.35rem, (36/1920)*100vw, 2.25rem)',
            fontFamily: 'Noto Sans CJK KR, sans-serif',
            fontWeight: '400',
            lineHeight: 'clamp(1.69rem, (45/1920)*100vw, 2.81rem)',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {t('about.why.desc')}
          </span>
        </div>
      </section>

      {/* Z세대 경험 소비 강조 섹션 */}
      <section className="about-section about-section-experience">
        <div className="about-experience-badge">
          {t('about.experience.badge')}
        </div>
        <div className="about-experience-title">
          {t('about.experience.title')}
        </div>
        <div className="about-experience-desc">
          {t('about.experience.desc')}
        </div>
        <div className="about-experience-cards">
          {t('about.experience.cards').map((item, idx) => (
            <div className={`about-card ${idx % 2 === 1 ? 'about-card-main' : 'about-card-dark'}`} key={idx}>
              <div className="about-card-title">
                {item.title.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < item.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <div className="about-card-desc">
                {item.desc.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < item.desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 도파민 쇼핑+콘텐츠 스타일 페어 섹션 (카드 영역 통합) */}
      <section className="about-section about-2col-section" style={{
        width: '100%',
        height: 'auto',
        background: '#F2F2F2',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(1rem, 2vw, 2rem)',
        padding: 'clamp(2rem, 4vw, 4rem) 0',
        overflow: 'visible'
      }}>
        {/* 상단 텍스트와 이미지 영역 */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          minHeight: 'clamp(150px, (300/1920)*100vw, 300px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem)',
          margin: '0 auto',
          gap: 'clamp(2rem, 4vw, 4rem)',
          maxWidth: 'clamp(600px, (1200/1920)*100vw, 1200px)'
        }}>
          {/* 왼쪽 텍스트 섹션 */}
          <div style={{
            flex: '1',
            width: 'auto',
            maxWidth: 'clamp(225px, (450/1920)*100vw, 450px)',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'black',
            gap: 'clamp(0.5rem, 1vw, 1rem)'
          }}>
            <span style={{
              color: 'black',
              fontSize: 'clamp(1.575rem, (42/1920)*100vw, 2.625rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '400',
              lineHeight: 'clamp(1.89rem, (50.4/1920)*100vw, 3.15rem)',
              wordWrap: 'break-word',
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              display: 'block',
              textAlign: 'left'
            }}>
              {t('about.content.title')}
            </span>
            <span style={{
              color: 'black',
              fontSize: 'clamp(2.325rem, (62/1920)*100vw, 3.875rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '700',
              lineHeight: 'clamp(2.79rem, (74.4/1920)*100vw, 4.65rem)',
              wordWrap: 'break-word',
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              display: 'block',
              textAlign: 'left'
            }}>
              {t('about.content.strong1')}
            </span>
            <span style={{
              color: 'black',
              fontSize: 'clamp(3.225rem, (86/1920)*100vw, 5.375rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '700',
              lineHeight: 'clamp(3.87rem, (103.2/1920)*100vw, 6.45rem)',
              wordWrap: 'break-word',
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              display: 'block',
              textAlign: 'left'
            }}>
              {t('about.content.strong2')}
            </span>
          </div>
          {/* 오른쪽 이미지 */}
          <div style={{
            width: 'clamp(234px, (468/1920)*100vw, 468px)',
            height: 'clamp(147px, (294/1920)*100vw, 294px)',
            borderRadius: '8px',
            overflow: 'hidden',
            flexShrink: 0,
            backgroundColor: '#f0f0f0'
          }}>
            <img 
              src={aboutSec04Img} 
              alt="HYPECON Style"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* 통합된 카드 영역 */}
        <div className="about-cards-container" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(1rem, 2vw, 2rem)',
          padding: '0 clamp(2rem, 4vw, 3rem)',
          '@media (max-width: 768px)': {
            gap: 'clamp(1.5rem, 4vw, 2.5rem) !important',
            padding: '0 clamp(1rem, 3vw, 2rem) !important'
          }
        }}>
          {/* 언어 파일의 about.list 배열을 사용하여 카드 렌더링 */}
          {t('about.list').map((item, index) => (
            <div key={item.title} className="about-card-item" style={{
              width: 'clamp(600px, 66.15vw, 1270px)',
              height: 'clamp(80px, 7.64vw, 146.64px)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (max-width: 768px)': {
                width: '100% !important',
                height: 'auto !important',
                minHeight: 'clamp(120px, 30vw, 200px) !important',
                flexDirection: 'column !important',
                gap: 'clamp(1rem, 3vw, 2rem) !important',
                alignItems: 'center !important'
              }
            }}>
              <div className="about-card-title-box" style={{
                width: 'clamp(150.5px, (301/1920)*100vw, 301px)',
                height: 'clamp(75px, (150/1920)*100vw, 150px)',
                padding: 'clamp(1rem, 1.56vw, 1.875rem) clamp(1rem, 2.5vw, 3rem)',
                background: 'black',
                borderRadius: '30px',
                border: '0 solid #000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'clamp(1rem, 1.56vw, 1.875rem)',
                '@media (max-width: 768px)': {
                  width: '100% !important',
                  maxWidth: 'clamp(250px, 70vw, 400px) !important',
                  height: 'auto !important',
                  minHeight: 'clamp(60px, 15vw, 100px) !important',
                  padding: 'clamp(1rem, 3vw, 1.5rem) !important',
                  borderRadius: 'clamp(20px, 5vw, 25px) !important',
                  order: 1
                }
              }}>
                <div className="about-card-title-text" style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#00E5A8',
                  fontSize: 'clamp(19.2px, (32/1920)*100vw, 32px)',
                  fontFamily: '"Noto Sans CJK KR", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '900',
                  lineHeight: 'clamp(24px, (40/1920)*100vw, 40px)',
                  letterSpacing: '-0.96px',
                  wordWrap: 'break-word',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '@media (max-width: 768px)': {
                    fontSize: 'clamp(1rem, 4vw, 1.5rem) !important',
                    lineHeight: 'clamp(1.2rem, 4.5vw, 1.8rem) !important',
                    whiteSpace: 'normal !important',
                    textAlign: 'center !important'
                  }
                }}>
                  {item.title}
                </div>
              </div>
              <div className="about-card-content-box" style={{
                width: 'clamp(323.5px, (647/1920)*100vw, 647px)',
                height: 'clamp(75px, (150/1920)*100vw, 150px)',
                background: '#FFF',
                borderRadius: '30px',
                border: '0 solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(1rem, 1.35vw, 1.625rem) clamp(2rem, 5.31vw, 6.375rem)',
                marginLeft: 'clamp(1rem, 2vw, 2rem)',
                '@media (max-width: 768px)': {
                  width: '100% !important',
                  height: 'auto !important',
                  minHeight: 'clamp(80px, 20vw, 120px) !important',
                  padding: 'clamp(1rem, 3vw, 1.5rem) !important',
                  borderRadius: 'clamp(20px, 5vw, 25px) !important',
                  marginLeft: '0 !important',
                  order: 2
                }
              }}>
                <div className="about-card-content-text" style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#000',
                  fontSize: 'clamp(14.4px, (24/1920)*100vw, 24px)',
                  fontFamily: '"Noto Sans CJK KR", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'clamp(19.8px, (33/1920)*100vw, 33px)',
                  letterSpacing: '-0.72px',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  '@media (max-width: 768px)': {
                    fontSize: 'clamp(0.9rem, 3.5vw, 1.2rem) !important',
                    lineHeight: 'clamp(1.2rem, 4vw, 1.6rem) !important',
                    textAlign: 'center !important'
                  }
                }}>
                  {item.desc.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < item.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 글로벌 브랜드 어필 섹션 */}
      <section className="about-section about-global-section" style={{
        background: 'black',
        padding: 'clamp(2rem, 5vw, 4rem) 0',
        height: 'clamp(380px, (760/1920)*100vw, 760px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
        position: 'relative',
        zIndex: 10,
        '@media (max-width: 768px)': {
          padding: 'clamp(2rem, 6vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
          height: 'auto !important',
          minHeight: 'clamp(200px, 50vw, 400px) !important',
          flexDirection: 'column !important'
        }
      }}>
        <div className="about-global-content" style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="about-global-desc" style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            fontSize: 'clamp(1.35rem, (36/1920)*100vw, 2.25rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '500',
            lineHeight: 'clamp(1.6rem, 2.08vw, 2.5rem)',
            wordWrap: 'break-word',
            maxWidth: 'clamp(600px, 80vw, 1200px)',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            textAlign: 'center',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem) !important',
              lineHeight: 'clamp(1.5rem, 4.5vw, 2.2rem) !important',
              textAlign: 'center !important',
              padding: '0 !important'
            }
          }}>
            {t('about.global.desc').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('about.global.desc').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

            {/* 흰색 섹션 */}
       <section style={{
        background: 'white',
        height: 'clamp(120px, (240/1920)*100vw, 240px)',
        width: '100%',
        margin: '0',
        padding: '0'
      }}></section>

      {/* 반응형 스타일은 AboutPage.css에서 관리 */}
    </>
  );
}

export default AboutPage; 