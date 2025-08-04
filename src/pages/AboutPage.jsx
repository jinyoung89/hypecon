import React from 'react';
import aboutSec04Img from '../assets/images/about_sec04_img.png';
import aboutImg from '../assets/images/about.png';
import { useLanguage } from '../contexts/LanguageContext';
import './AboutPage.css';

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
        padding: 'clamp(1rem, 2vw, 2rem)'
      }}>
        <div className="about-intro-container">
          <span className="about-intro-main-text">
            {t('about.intro.mainTitle')}
          </span>
          <span className="about-intro-sub-text">
            <br/>
          </span>
          <span className="about-intro-sub-text">
            {t('about.intro.subtitle')}
          </span>
        </div>
      </section>

      {/* 흰색 섹션 */}
      <section className="about-spacing-section"></section>

      {/* Z세대가 주목하는  섹션 */}
      <section className="about-gray-section">
        <div className="about-text-container">
          <span className="about-description-text">
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
       <section className="about-spacing-section"></section>

      {/* WHY BRANDS CHOOSE HYPECON 섹션 */}
      <section className="about-section about-section-why">
        <h2 className="hypecon-large-title hypecon-large-title--primary">
          {t('about.why.title').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('about.why.title').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <div className="about-why-desc">
          {t('about.why.desc').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('about.why.desc').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
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
      <section className="about-section about-dopamine-section">
        {/* 상단 텍스트와 이미지 영역 */}
        <div className="about-dopamine-top">
          {/* 왼쪽 텍스트 섹션 */}
          <div className="about-dopamine-text">
            <span className="about-dopamine-title">
              {t('about.content.title')}
            </span>
            <span className="about-dopamine-strong1">
              {t('about.content.strong1')}
            </span>
            <span className="about-dopamine-strong2">
              {t('about.content.strong2')}
            </span>
          </div>
          {/* 오른쪽 이미지 */}
          <div className="about-dopamine-image">
            <img 
              src={aboutSec04Img} 
              alt="HYPECON Style"
            />
          </div>
        </div>

        {/* 통합된 카드 영역 */}
        <div className="about-cards-container">
          {/* 언어 파일의 about.list 배열을 사용하여 카드 렌더링 */}
          {t('about.list').map((item, index) => (
            <div key={item.title} className="about-card-item">
              <div className="about-card-title-box">
                <div className="about-card-title-text">
                  {item.title}
                </div>
              </div>
              <div className="about-card-content-box">
                <div className="about-card-content-text">
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
      <section className="about-section about-global-section">
        <div className="about-global-content">
          <div className="about-global-desc">
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
       <section className="about-spacing-section"></section>

      {/* 반응형 스타일은 AboutPage.css에서 관리 */}
    </>
  );
}

export default AboutPage; 