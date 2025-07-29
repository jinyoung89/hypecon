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
        height: 'clamp(600px, 44.5vw, 854px)',
        padding: 'clamp(1rem, 2vw, 2rem)',
        '@media (max-width: 768px)': {
          height: 'auto !important',
          minHeight: 'clamp(600px, 80vw, 800px) !important',
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
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: 'clamp(0.5rem, 2vw, 2rem)',
          maxWidth: '90vw',
          marginTop: 'clamp(4rem, 8vw, 8rem)',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            alignItems: 'center !important',
            textAlign: 'center !important',
            gap: 'clamp(1rem, 3vw, 2rem) !important',
            marginTop: 'clamp(2rem, 6vw, 4rem) !important'
          }
        }}>
          <span style={{
            color: 'white',
            fontSize: 'clamp(1.5rem, 3.33vw, 4rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '700',
            lineHeight: 'clamp(1.5rem, 3.33vw, 4rem)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(1.2rem, 5vw, 2.5rem) !important',
              lineHeight: 'clamp(1.4rem, 5.5vw, 2.8rem) !important',
              textAlign: 'center !important'
            }
          }}>
            {t('about.intro.mainTitle')}
          </span>
          <span style={{
            color: 'white',
            fontSize: 'clamp(1.5rem, 3.33vw, 4rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '700',
            lineHeight: 'clamp(1.2rem, 2.73vw, 3.28rem)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(1.2rem, 5vw, 2.5rem) !important',
              lineHeight: 'clamp(1.4rem, 5.5vw, 2.8rem) !important',
              textAlign: 'center !important'
            }
          }}>
            <br/>
          </span>
          <span style={{
            color: 'white',
            fontSize: 'clamp(1rem, 2.08vw, 2.5rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '700',
            lineHeight: 'clamp(0.8rem, 1.71vw, 2.05rem)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'left',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(0.9rem, 3vw, 1.8rem) !important',
              lineHeight: 'clamp(1.1rem, 3.5vw, 2rem) !important',
              textAlign: 'center !important'
            }
          }}>
            {t('about.intro.subtitle')}
          </span>
          <span style={{
            color: '#00E5A8',
            fontSize: 'clamp(0.9rem, 1.35vw, 1.625rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'clamp(1rem, 1.56vw, 1.875rem)',
            wordWrap: 'break-word',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'left',
            marginBottom: 'clamp(1rem, 4.01vw, 4.8125rem)',
            '@media (max-width: 768px)': {
              fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem) !important',
              lineHeight: 'clamp(1rem, 2.8vw, 1.4rem) !important',
              textAlign: 'center !important',
              marginBottom: 'clamp(1.5rem, 4vw, 2.5rem) !important'
            }
          }}>
            {t('about.intro.description').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line.split(' ').map((word, wordIndex) => {
                  // 언어 파일에서 강조 키워드 가져오기
                  const highlightKeywords = t('about.intro.highlightKeywords');
                  
                  // 키워드가 포함된 단어인지 확인
                  const isHighlighted = highlightKeywords.some(keyword => 
                    word.includes(keyword) || keyword.includes(word)
                  );
                  
                  if (isHighlighted) {
                    return (
                      <span key={wordIndex} style={{
                        color: '#00E5A8',
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: 'clamp(0.9rem, 1.35vw, 1.625rem)',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 'clamp(1rem, 1.56vw, 1.875rem)',
                        '@media (max-width: 768px)': {
                          fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem) !important',
                          lineHeight: 'clamp(1rem, 2.8vw, 1.4rem) !important'
                        }
                      }}>
                        {word}{wordIndex < line.split(' ').length - 1 ? ' ' : ''}
                      </span>
                    );
                  }
                  
                  return (
                    <span key={wordIndex}>
                      {word}{wordIndex < line.split(' ').length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
                {index < t('about.intro.description').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        </div>
      </section>

      {/* WHY BRANDS CHOOSE HYPECON 섹션 */}
      <section className="about-section about-section-why" style={{
        background: `var(--hypecon-dark)`,
        height: 'clamp(300px, 33.33vw, 640px)',
        '@media (max-width: 768px)': {
          height: 'auto !important',
          minHeight: 'clamp(400px, 60vw, 600px) !important',
          padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
          flexDirection: 'column !important'
        }
      }}>
        <div className="about-why-title" style={{
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: '#E1F800',
          fontSize: 'clamp(4rem, 10.42vw, 12.5rem)',
          fontFamily: 'Bebas Neue, sans-serif',
          fontWeight: '400',
          lineHeight: 'clamp(3rem, 8.54vw, 10.25rem)',
          wordWrap: 'break-word',
          marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          '@media (max-width: 768px)': {
            fontSize: 'clamp(2.5rem, 12vw, 6rem) !important',
            lineHeight: 'clamp(2rem, 10vw, 5rem) !important',
            marginBottom: 'clamp(2rem, 4vw, 3rem) !important',
            textAlign: 'center !important'
          }
        }}>
          {t('about.why.title').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('about.why.title').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        <div className="about-why-desc" style={{
          width: 'clamp(400px, 48.13vw, 924px)',
          height: 'clamp(60px, 6.09vw, 117px)',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          fontSize: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: '500',
          lineHeight: 'clamp(1.8rem, 2.6vw, 3.125rem)',
          wordWrap: 'break-word',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            fontSize: 'clamp(1.2rem, 4vw, 2rem) !important',
            lineHeight: 'clamp(1.5rem, 4.5vw, 2.5rem) !important',
            padding: '0 clamp(1rem, 3vw, 2rem) !important',
            textAlign: 'center !important'
          }
        }}>
          <span className="about-why-highlight">
            {t('about.why.desc').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('about.why.desc').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        </div>
      </section>

      {/* Z세대 경험 소비 강조 섹션 */}
      <section className="about-section about-section-experience" style={{
        '@media (max-width: 768px)': {
          padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
          flexDirection: 'column !important'
        }
      }}>
        <div className="about-experience-badge" style={{
          '@media (max-width: 768px)': {
            fontSize: 'clamp(0.8rem, 3vw, 1.2rem) !important',
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem) !important',
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem) !important',
            textAlign: 'center !important'
          }
        }}>
          {t('about.experience.badge')}
        </div>
        <div className="about-experience-title" style={{
          width: 'clamp(400px, 55.83vw, 1072px)',
          height: 'clamp(40px, 3.91vw, 75.09px)',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: 'black',
          fontSize: 'clamp(2rem, 3.13vw, 3.75rem)',
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: '700',
          lineHeight: 'clamp(1.8rem, 2.6vw, 3.125rem)',
          wordWrap: 'break-word',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            fontSize: 'clamp(1.5rem, 6vw, 3rem) !important',
            lineHeight: 'clamp(1.8rem, 6.5vw, 3.5rem) !important',
            marginBottom: 'clamp(1rem, 3vw, 2rem) !important',
            textAlign: 'center !important'
          }
        }}>
          {t('about.experience.title')}
        </div>
        <div className="about-experience-desc" style={{
          width: 'clamp(600px, 80vw, 1600px)',
          height: 'clamp(30px, 2.66vw, 51.06px)',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: 'black',
          fontSize: 'clamp(1.2rem, 1.67vw, 2rem)',
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: '700',
          lineHeight: 'clamp(1.8rem, 2.6vw, 3.125rem)',
          wordWrap: 'break-word',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          '@media (max-width: 768px)': {
            width: '100% !important',
            height: 'auto !important',
            fontSize: 'clamp(1rem, 4vw, 1.5rem) !important',
            lineHeight: 'clamp(1.3rem, 4.5vw, 1.8rem) !important',
            whiteSpace: 'normal !important',
            marginBottom: 'clamp(2rem, 5vw, 3rem) !important',
            textAlign: 'center !important'
          }
        }}>
          {t('about.experience.desc')}
        </div>
        <div className="about-experience-cards" style={{
          '@media (max-width: 768px)': {
            display: 'flex !important',
            flexDirection: 'column !important',
            gap: 'clamp(1rem, 3vw, 2rem) !important',
            padding: '0 clamp(1rem, 3vw, 2rem) !important'
          }
        }}>
          {t('about.experience.cards').map((item, idx) => (
            <div className={`about-card ${idx % 2 === 1 ? 'about-card-main' : 'about-card-dark'}`} key={idx} style={{
              '@media (max-width: 768px)': {
                width: '100% !important',
                height: 'auto !important',
                minHeight: 'clamp(120px, 30vw, 200px) !important',
                padding: 'clamp(1.5rem, 4vw, 2.5rem) !important',
                borderRadius: 'clamp(15px, 4vw, 20px) !important',
                textAlign: 'center !important'
              }
            }}>
              <div className="about-card-title" style={{
                '@media (max-width: 768px)': {
                  fontSize: 'clamp(1.2rem, 5vw, 2rem) !important',
                  lineHeight: 'clamp(1.4rem, 5.5vw, 2.3rem) !important',
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem) !important',
                  textAlign: 'center !important'
                }
              }}>{item.title}</div>
              <div className="about-card-desc" style={{
                '@media (max-width: 768px)': {
                  fontSize: 'clamp(0.9rem, 3.5vw, 1.3rem) !important',
                  lineHeight: 'clamp(1.2rem, 4vw, 1.6rem) !important',
                  textAlign: 'center !important'
                }
              }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 도파민 쇼핑+콘텐츠 스타일 페어 섹션 */}
      <section className="about-section about-2col-section" style={{
        width: '100vw',
        height: 'auto',
        minHeight: 'clamp(800px, 91.04vw, 1748px)',
        background: '#F2F2F2',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 'clamp(2rem, 4vw, 4rem) 0',
        overflow: 'visible'
      }}>
        {/* 상단 텍스트와 이미지 영역 */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(300px, 20.73vw, 398px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          margin: '0 auto',
          gap: 'clamp(2rem, 4vw, 4rem)'
        }}>
          {/* 왼쪽 텍스트 섹션 */}
          <div style={{
            width: 'clamp(300px, 30.05vw, 577px)',
            height: 'clamp(200px, 15.53vw, 298.18px)',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            gap: 'clamp(0.5rem, 1vw, 1rem)'
          }}>
            <span style={{
              color: 'black',
              fontSize: 'clamp(2rem, 4.17vw, 5rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '400',
              lineHeight: 'clamp(2.5rem, 5.21vw, 6.25rem)',
              wordWrap: 'break-word'
            }}>
              {t('about.content.title')}
            </span>
            <span style={{
              color: 'black',
              fontSize: 'clamp(2rem, 4.17vw, 5rem)',
              fontFamily: 'Noto Sans, sans-serif',
              fontWeight: '700',
              lineHeight: 'clamp(2.5rem, 5.21vw, 6.25rem)',
              wordWrap: 'break-word'
            }}>
              {t('about.content.strong').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < t('about.content.strong').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </div>
          
          {/* 오른쪽 이미지 */}
          <div style={{
            width: 'clamp(300px, 32.96vw, 632.80px)',
            height: 'clamp(200px, 20.7vw, 397.48px)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={aboutSec04Img} 
              alt="콘텐츠 + 커머스 스타일 페어" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* 하단 6개 카드 영역 */}
        <div className="about-cards-container" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginTop: 'clamp(2rem, 4vw, 4rem)',
          padding: '0 clamp(2rem, 4vw, 3rem)',
          '@media (max-width: 768px)': {
            gap: 'clamp(1.5rem, 4vw, 2.5rem) !important',
            marginTop: 'clamp(2rem, 5vw, 3rem) !important',
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
                width: 'clamp(200px, 18.23vw, 350px)',
                height: 'clamp(80px, 7.81vw, 150px)',
                padding: 'clamp(1rem, 1.56vw, 1.875rem) clamp(1rem, 2.5vw, 3rem)',
                background: 'black',
                borderRadius: '30px',
                border: '2px solid black',
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
                  color: index % 2 === 0 ? '#00E5A8' : '#E1F800',
                  fontSize: 'clamp(1rem, 1.88vw, 2.25rem)',
                  fontFamily: 'Noto Sans, sans-serif',
                  fontWeight: '700',
                  lineHeight: 'clamp(1.2rem, 2.08vw, 2.5rem)',
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
                width: 'clamp(400px, 45.52vw, 874px)',
                height: 'clamp(80px, 7.81vw, 150px)',
                background: 'white',
                borderRadius: '30px',
                border: '2px solid black',
                display: 'flex',
                alignItems: 'center',
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
                  color: 'black',
                  fontSize: 'clamp(0.8rem, 1.67vw, 2rem)',
                  fontFamily: 'Noto Sans, sans-serif',
                  fontWeight: '500',
                  lineHeight: 'clamp(1.2rem, 2.6vw, 3.125rem)',
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
        background: '#00E5A8',
        padding: 'clamp(2rem, 5vw, 4rem) 0',
        minHeight: 'clamp(300px, 40vw, 600px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '0',
        position: 'relative',
        zIndex: 10,
        '@media (max-width: 768px)': {
          padding: 'clamp(2rem, 6vw, 3rem) clamp(1rem, 3vw, 2rem) !important',
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
            color: 'black',
            fontSize: 'clamp(1.5rem, 1.98vw, 2.375rem)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '500',
            lineHeight: 'clamp(1.6rem, 2.08vw, 2.5rem)',
            wordWrap: 'break-word',
            maxWidth: 'clamp(600px, 80vw, 1200px)',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            textAlign: 'left',
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

      {/* 반응형 스타일은 AboutPage.css에서 관리 */}
    </>
  );
}

export default AboutPage; 