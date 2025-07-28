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
      <section className="about-section about-section-intro" style={{background: `url(${aboutImg}) center/cover no-repeat`}}>
        <div className="about-intro-content">
          <div className="about-intro-main-title">
            {t('about.intro.mainTitle')}
            <br/>
            <br/>
            <span className="about-intro-subtitle">{t('about.intro.subtitle')}</span>
          </div>
          <div className="about-intro-description">
            {t('about.intro.description')}
          </div>
        </div>
      </section>

      {/* WHY BRANDS CHOOSE HYPECON 섹션 */}
      <section className="about-section about-section-why" style={{background: `var(--hypecon-dark)`}}>
        <div className="about-why-title">
          {t('about.why.title')}
        </div>
        <div className="about-why-desc">
          <span className="about-why-highlight">{t('about.why.desc')}</span>
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
              <div className="about-card-title">{item.title}</div>
              <div className="about-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 도파민 쇼핑+콘텐츠 스타일 페어 섹션 */}
      <section className="about-section about-2col-section">
        <div className="about-2col-text">
          <div className="about-content-title">
            {t('about.content.title')}
          </div>
          <div className="about-content-strong">
            {t('about.content.strong')}
          </div>
        </div>
        <div className="about-2col-img">
          <img src={aboutSec04Img} alt="콘텐츠 + 커머스 스타일 페어" />
        </div>
      </section>

      {/* 6개 항목 리스트 섹션 */}
      <section className="about-section about-list-section">
        <div className="about-list-wrap">
          {t('about.list').map((item, idx) => (
            <div className="about-list-row" key={item.title}>
              <div className="about-list-title" style={{
                borderRadius: '30px',
                border: '2px solid #000',
                background: idx % 2 === 0 ? 'var(--hypecon-main)' : 'var(--hypecon-yellow)',
                display: 'flex',
                width: 'clamp(220px, 15.6vw, 300px)',
                padding: '30px 48px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                flexShrink: 0,
                height: 'clamp(120px, 7.8vw, 150px)'
              }}>
                {item.title}
              </div>
              <div className="about-list-desc" style={{
                width: 'clamp(450px, 41.7vw, 800px)',
                height: 'clamp(120px, 7.8vw, 150px)',
                flexShrink: 0,
                borderRadius: '30px',
                border: '2px solid #000',
                background: '#FFF',
                padding: 'clamp(15px, 1.6vw, 30px)',
                display: 'flex',
                alignItems: 'center'
              }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 글로벌 브랜드 어필 섹션 */}
      <section className="about-section about-global-section">
        <div className="about-global-content">
          <div className="about-global-desc">
            {t('about.global.desc')}
          </div>
        </div>
      </section>

      {/* 반응형 스타일은 AboutPage.css에서 관리 */}
    </>
  );
}

export default AboutPage; 